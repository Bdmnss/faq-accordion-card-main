let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    for(let j = 0; j < questions.length; j++) {
        if(questions[j].classList.contains("active")) {
            answers[j].classList.remove("open");
            answers[j].classList.add("closed");
            questions[j].classList.remove("active");
            arrow[j].classList.remove("up");
            arrow[j].classList.add("down");
        }
    }
    if (questions[i].classList == "question") {
      answers[i].classList.remove("closed");
      answers[i].classList.add("open");
      questions[i].classList.add("active");
      arrow[i].classList.remove("down");
      arrow[i].classList.add("up");
    }
  });
}
