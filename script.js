const pin = document.querySelector(".topic-pin");
const panel = document.querySelector(".panel");
const quizForm = document.getElementById("quiz-form");
const feedback = document.getElementById("quiz-feedback");

pin.addEventListener("click", () => {
  panel.classList.add("is-active");
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answers = {
    q1: quizForm.q1.value.trim().toLowerCase(),
    q2: quizForm.q2.value,
    q3a: quizForm.q3a.value,
    q3b: quizForm.q3b.value,
    q3c: quizForm.q3c.value,
    q5: quizForm.q5.value.trim().toLowerCase(),
  };

  const score = [
    answers.q1 === "beneficiadas" || answers.q1 === "beneficiadas.",
    answers.q2 === "depredacion",
    answers.q3a === "a" && answers.q3b === "b" && answers.q3c === "c",
    answers.q5 === "mutualismo" || answers.q5 === "depredar",
  ].filter(Boolean).length;

  feedback.textContent = `¡Listo! Tuviste ${score} de 4 aciertos automáticos. Revisa también el crucigrama con tu docente.`;
});
