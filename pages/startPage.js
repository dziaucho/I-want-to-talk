import createText from "../components/text.js";
import createButton from "../components/button.js";

let savedData = {};

const dataPromise = fetch("assets/text.json")
    .then(response => response.json())
    .then(data => savedData = data);

dataPromise.then(() => {
    const questionsList = savedData.questions;

    const pageWrapper = document.createElement("div");
    document.body.appendChild(pageWrapper);
    pageWrapper.classList.add("page-wrapper");

    const pageContent = document.createElement("div");
    pageWrapper.appendChild(pageContent);
    pageContent.classList.add("content-wrapper");

    const text = createText("main-text", `${savedData.startText}`, pageContent);
    const button = createButton("main-button", "спросить", pageContent);

    function switchQuestion() {
        const randomQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];
        text.innerText = randomQuestion;

        const currentQuestion = questionsList.indexOf(randomQuestion);
        questionsList.splice(currentQuestion, 1);

        if (questionsList.length === 0) {
            text.innerHTML = `вопросы закончились. но обязательно появятся новые.<br><span class="love">я люблю тебя!</span>`
        }
    }

    button.addEventListener("click", switchQuestion);
});