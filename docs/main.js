const apiKey = document.querySelector('#prompt-key');
const promptInput = document.querySelector('#prompt-input');

const form = document.querySelector('#prompt-form');
const result = document.querySelector('#result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  alert(`프롬프트 전송! API 키: ${apiKey.value}, 프롬프트: ${promptInput.value}`);
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey.value, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        contents: [
            {
            parts: [
                {
                text: "뒤에 입력한 프롬프트 초안을 PTCF(Persona, Task, Context, Format) 공식에 따라 보강하고 이 것에 대한 활용을 대충, 빨리, 잘의 단계로 서술. 마크다운이나 기타 꾸미는 특수문자 없이 간결하게 평문으로 작성. 프롬프트 초안 : {" + promptInput.value + "}",
                },
            ],
            },
        ],
        }),
    });
    if (response.ok) {
        const data = await response.json();
        alert('응답: ' + JSON.stringify(data));
        // result.textContent = JSON.stringify(data);
        result.innerHTML = data.candidates[0].content.parts[0].text;
    }
    else {
        alert('오류 발생: ' + response.statusText);
    }
});