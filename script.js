/** @type {HTMLTextAreaElement} */
const questionEl = document.getElementById("question");
/** @type {HTMLTextAreaElement} */
const answersEl = document.getElementById("answers");
/** @type {HTMLTextAreaElement} */
const themeEl = document.getElementById("theme");
/** @type {HTMLButtonElement} */
const genbtn = document.getElementById("genbtn");
questionEl.style.resize = "none";
answersEl.style.resize = "none";
themeEl.style.resize = "none";
genbtn.addEventListener("click", () => {
  const question = questionEl.value;
  const answers = answersEl.value.split(',').map((ans) => ans.trim());
  const theme = themeEl.value;
  const jsonO = JSON.stringify({ question, answers, theme }, null, 2);
  const blob = new Blob([jsonO], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "question.json";
  a.click();
  URL.revokeObjectURL(url);
});