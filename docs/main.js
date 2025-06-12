document.getElementById("copyBtn").addEventListener("click", () => {
  const input = document.getElementById("shareLink");
  input.select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
  document.getElementById("copyBtn").textContent = "복사됨";
  setTimeout(
    () => (document.getElementById("copyBtn").textContent = "복사"),
    2000
  );
});
