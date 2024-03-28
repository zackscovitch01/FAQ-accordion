const imgBtn = document.getElementById("imgBtn");
const imgBtn2 = document.getElementById("imgBtn2");
const imgBtn3 = document.getElementById("imgBtn3");
const imgBtn4 = document.getElementById("imgBtn4");
const showQuestion = document.getElementById("hideQuestionAnswer");
const showQuestion2 = document.getElementById("hideQuestionAnswer2");
const showQuestion3 = document.getElementById("hideQuestionAnswer3");
const showQuestion4 = document.getElementById("hideQuestionAnswer4");

let questionOpen = false;
let questionOpen2 = false;
let questionOpen3 = false;
let questionOpen4 = false;

function toggleQuestion() {
  if (questionOpen == false) {
    imgBtn.src = "./assets/images/icon-minus.svg";
    questionOpen = true;
    showQuestion.id = "";
  } else {
    imgBtn.src = "./assets/images/icon-plus.svg";
    questionOpen = false;
    showQuestion.id = "hideQuestionAnswer";
  }
}

function toggleQuestion2() {
  if (questionOpen2 == false) {
    imgBtn2.src = "./assets/images/icon-minus.svg";
    questionOpen2 = true;
    showQuestion2.id = "";
  } else {
    imgBtn2.src = "./assets/images/icon-plus.svg";
    questionOpen2 = false;
    showQuestion2.id = "hideQuestionAnswer2";
  }
}

function toggleQuestion3() {
  if (questionOpen3 == false) {
    imgBtn3.src = "./assets/images/icon-minus.svg";
    questionOpen3 = true;
    showQuestion3.id = "";
  } else {
    imgBtn3.src = "./assets/images/icon-plus.svg";
    questionOpen3 = false;
    showQuestion3.id = "hideQuestionAnswer3";
  }
}

function toggleQuestion4() {
  if (questionOpen4 == false) {
    imgBtn4.src = "./assets/images/icon-minus.svg";
    questionOpen4 = true;
    showQuestion4.id = "";
  } else {
    imgBtn4.src = "./assets/images/icon-plus.svg";
    questionOpen4 = false;
    showQuestion4.id = "hideQuestionAnswer3";
  }
}
