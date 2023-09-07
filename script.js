const correctAnswers = ["D","D","A","C","C","C","B","C","A","D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
            const correctAnswerDiv = document.createElement("div");
            correctAnswerDiv.className = "correct-answer";
            correctAnswerDiv.style.color = "green";
            correctAnswerDiv.textContent = `Correct answer is ${correctAnswers[index]}`;
            questions[index].appendChild(correctAnswerDiv);
        }
    });
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/10`;
});
