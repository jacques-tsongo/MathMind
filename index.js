// differents selecteurs des elements du dom
const question = document.getElementById("la_question");
const answer = document.getElementById("resultats");
const suivant = document.querySelector("#suivant");
const next = document.querySelector("#next");
const main = document.querySelector(".main");
const jouer = document.querySelector(".jouer");
const jouerChild = document.querySelector(".jouerChild");
const commencer = document.querySelector(".begin");
const resultBox = document.querySelector(".voir_good_score");
const questionsReussies = document.querySelector(".questions_reussies");
const recommencer = document.querySelector(".begin_again");
const niveauBtns = document.querySelectorAll(".niveaux_btn");
const lesNiveaux = document.querySelector(".les_niveaux");
const niveaux = document.querySelector(".niveaux");

//les  Variables du jeu
let currentTable = [];
let currentQuestionIndex = 0;
let score = 0;
let counter = 1;
let currentQuestion = null;

// la partie qui gere le chronometre
let chronoInterval = null;
let tempsRestant = 15; // secondes
const chrono = document.getElementById("chrono");

// Initialisation du quiz
function init() {
  setupLevelButtons();
  // setupGlobalEvents();
}
// Choix de niveau des questions et chargement des questuions depuis des fichiers JSON
function setupLevelButtons() {
  niveauBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedLevel = e.target.value;
      let file = "";
      //on verifie quel boutton a ete clicke puis on charge les questions de son niveau
      if (selectedLevel === "firstLevel") {
        file = "firstLevel.json";
      } else if (selectedLevel === "secondLevel") {
        file = "secondLevel.json";
      } else if (selectedLevel === "thirdLevel") {
        file = "thirdLevel.json";
      }
      //le chargement et la recuperation du fichier
      fetch(file)
        .then((res) => res.json())
        .then((data) => {
          currentTable = data;
          lesNiveaux.classList.remove("levelsShow");
          niveaux.classList.remove("level-show");
          document.querySelector(".laBonnereponse").style.display = "none";
          document.querySelector(".mauvaiseReponse").style.display = "none";
          startQuiz();
        })
        .catch((err) => {
          console.error("Erreur de chargement du niveau :", err);
        });
    });
  });
}

//a partir d'ici on lance le quiz avec cette fonction
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  counter = 1;
  jouer.classList.add("see");

  setTimeout(() => {
    jouerChild.classList.add("second_see");
  }, 1000);
  showNextQuestion();
}

// cette fonction nous permet de passer la prochaine question si bien notre condition est encore valide puis la fonction resetQuestion() nettoye la partie de affichage avant de passer a la nouvelle question 
function showNextQuestion() {
  resetQuestion();
  if (currentQuestionIndex >= 10) {
    showScore();
    return;
  }

  // Réinitialiser et démarrer le chronometre
  tempsRestant = 20;
  chrono.innerText = tempsRestant;
  startChrono();

  // Choisir une question au hasard
  const randomIndex = Math.floor(Math.random() * currentTable.length);
  currentQuestion = currentTable[randomIndex];
  question.innerHTML = currentQuestion.question;

  const compteur = `Question n° ${counter} sur 10`;
  document.querySelector(".leSpan").innerHTML = compteur;

  currentQuestion.reponse.forEach((rep) => {
    const btn = document.createElement("button");
    btn.textContent = rep.text;
    btn.classList.add("answers");

    btn.addEventListener("click", () => {
      stopChrono();
      handleAnswerClick(btn, rep.text);
    });

    answer.appendChild(btn);
  });

  currentQuestionIndex++;
  counter++;
  //on efface la question du tanleau apres l'avoir afficher
  currentTable.splice(randomIndex, 1);
}

// Gérer un clic sur les bouttons des assertions
function handleAnswerClick(button, selectedText) {
  const vrai_reponse = currentQuestion.bon;
  const allButtons = document.querySelectorAll(".answers");
  if (selectedText === vrai_reponse) {
    score++;
    document.querySelector(".laBonnereponse").style.display = "block";
    document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
  } else {
    const mauvaiseReponse = document.querySelector(".mauvaiseReponse");
    mauvaiseReponse.style.display = "block";
    mauvaiseReponse.innerHTML = `La bonne réponse est : <em>${vrai_reponse}</em>`;
  }
  //on desactive tous les bouttons apres avoir cliquer sur un des bouttons puis afficher le boutton next
  allButtons.forEach((btn) => btn.classList.add("disabled"));
  next.style.display = "block";
}

// la fonction qui gerer la limite du chronometre pour devoiler la bonne reponse et passer a la suivante
function handleTimeOut() {
  const vrai_reponse = currentQuestion.bon;
  const mauvaiseReponse = document.querySelector(".mauvaiseReponse");
  mauvaiseReponse.style.display = "block";
  mauvaiseReponse.innerHTML = `Temps de réflexion écoulé !<br>La bonne réponse était : <em><strong>${vrai_reponse}<strong></em>`;
  document.querySelectorAll(".answers").forEach((btn) => {
    btn.classList.add("disabled");
  });
  next.style.display = "block";
}

// la fonction qui demarrer et arreter le chronometre
function startChrono() {
  chronoInterval = setInterval(() => {
    //on desingremente cette variable
    tempsRestant--;
    chrono.innerText = tempsRestant;
    if (tempsRestant <= 0) {
      stopChrono();
      handleTimeOut();
    }
  }, 1000);
}
//cette fonction permet d'effacer l'interval une fois la condition ci-haut est realisee
function stopChrono() {
  clearInterval(chronoInterval);
}

// Bouton "suivant" pour passer a la question suivante
next.addEventListener("click", () => {
  document.querySelector(".laBonnereponse").style.display = "none";
  document.querySelector(".mauvaiseReponse").style.display = "none";
  next.style.display = "none";
  showNextQuestion();
});

// ce boutton permet de rejouer le quiz une fois on est a la fin
recommencer.addEventListener("click", () => {
  resultBox.classList.add("demasquer");
  startQuiz();
});

// cette fonction nous permet d'afficher la partie du score du parcours dans le jeu
function showScore() {
  jouer.classList.remove("see");
  jouerChild.classList.remove("second_see");
  resultBox.classList.remove("demasquer");
  questionsReussies.innerHTML = `Vous avez réussi ${score} questions sur 10.`;

  let circularProgress = document.querySelector(".circular_progress");
  let pourcentageOne = document.querySelector(".pourcent_one");
  let progressSturtValue = -1;
  let progressEndValue = (score / 10) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressSturtValue++;
    pourcentageOne.textContent = `${progressSturtValue}%`;
    circularProgress.style.background = `conic-gradient(#ea05ff ${progressSturtValue * 3.6}deg, rgba(136, 136, 136, 0.1) 0deg)`;
    if (progressSturtValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

// les evenements de click sur les differents bouttons dans le jeu
commencer.addEventListener("click", () => {
  document.querySelector(".instruction").classList.add("unhidden");
  main.classList.add("blur");
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".instruction").classList.remove("unhidden");
  main.classList.remove("blur");
});

document.querySelector(".continuer").addEventListener("click", () => {
  lesNiveaux.classList.remove("levelsShow");
  niveaux.classList.remove("level-show");
});

document.querySelector(".return").addEventListener("click", () => {
  jouer.classList.remove("see");
  jouerChild.classList.remove("second_see");
  score = 0;
  document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
});

// Nettoyer l'affichage avant la nouvelle question puis rejouer le chronometre
function resetQuestion() {
  answer.innerHTML = "";
  next.style.display = "none";
  stopChrono();
  chrono.innerText = "";
}

// Revenir a choisur les niveaux depuis l'écran des résultats par le boutton menu
document.querySelector(".back").addEventListener("click", () => {
  jouerChild.classList.add("second_see");
  resultBox.classList.add("demasquer");
  score = 0;
  document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
});

// Puis finalement on lance le jeu
init();