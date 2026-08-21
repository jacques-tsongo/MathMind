
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
let niveauChoisi = 'rien';

// la partie qui gere le chronometre
let chronoInterval = null;
let tempsRestant = 20; // secondes
const chrono = document.getElementById("chrono");

// Initialisation du quiz
function init() {
  setupLevelButtons();
  // setupGlobalEvents();
}

//connaitre quel niveau est choisi

function choisirNV() {
}

// Choix de niveau des questions et chargement des questuions depuis des fichiers JSON
function setupLevelButtons() {
  niveauBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedLevel = e.target.value;
      let file = "";

      //on verifie quel boutton a ete clicke p uis on charge les questions de son niveau
      if (selectedLevel === "firstLevel") {
        file = "firstLevel.json";
        niveauChoisi = 'first'
      } else if (selectedLevel === "secondLevel") {
        file = "secondLevel.json";
        niveauChoisi = 'second'
      } else if (selectedLevel === "thirdLevel") {
        file = "thirdLevel.json";
        niveauChoisi = 'third'
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
    resultBox.appendChild(about);
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
  // Re-déclenchement de l'animation d'entrée (transition fluide entre questions)
  question.classList.remove("question-entre");
  void question.offsetWidth; // force le reflow pour relancer l'animation CSS
  question.classList.add("question-entre");

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
    mauvaiseReponse.innerHTML = `La bonne réponse est : <em>${vrai_reponse}</em>  😱`;
  }
  //on desactive tous les bouttons apres avoir cliquer sur un des bouttons puis afficher le boutton next
  allButtons.forEach((btn) => {
    btn.classList.add("disabled", "reponse-verrouillee");
    // Feedback visuel (décoratif) : bonne réponse en vert, mauvaise en rouge
    if (btn.textContent === vrai_reponse) {
      btn.classList.add("reponse-correcte");
    }
    if (btn === button && selectedText !== vrai_reponse) {
      btn.classList.add("reponse-mauvaise");
    }
  });
  next.style.display = "block";
}

// la fonction qui gerer la limite du chronometre pour devoiler la bonne reponse et passer a la suivante
function handleTimeOut() {
  const vrai_reponse = currentQuestion.bon;
  const mauvaiseReponse = document.querySelector(".mauvaiseReponse");
  mauvaiseReponse.style.display = "block";
  mauvaiseReponse.innerHTML = `Temps de réflexion écoulé !<br>La bonne réponse était : <em><strong>${vrai_reponse}<strong></em>  🥺`;
  document.querySelectorAll(".answers").forEach((btn) => {
    btn.classList.add("disabled", "reponse-verrouillee");
    if (btn.textContent === vrai_reponse) {
      btn.classList.add("reponse-correcte");
    }
  });
  next.style.display = "block";
}

// la fonction qui demarrer et arreter le chronometre
function startChrono() {
  chronoInterval = setInterval(() => {
    //on desingremente cette variable
    tempsRestant--;
    chrono.innerText = tempsRestant;
    // Effet visuel d'urgence quand il reste peu de temps
    if (tempsRestant <= 5) {
      chrono.classList.add("urgence");
    }
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

// ============ PLUIE DE FLEURS (félicitations, score >= 70%) ============
// Génère une pluie élégante de fleurs 100% CSS (tailles, vitesses,
// rotations, trajectoires et couleurs variées) — déclenchée UNIQUEMENT
// quand le score final est >= 70%. Aucune interaction n'est bloquée
// (pointer-events: none) et le DOM est nettoyé après l'animation.
const PALETTES_FLEURS = [
  { petale: "#ff5fa2", coeur: "#ffd86b" }, // rose / jaune
  { petale: "#b06bff", coeur: "#ffd86b" }, // violet
  { petale: "#ff8a3d", coeur: "#fff06b" }, // orange
  { petale: "#ff4d6d", coeur: "#ffd86b" }, // rouge
  { petale: "#ffffff", coeur: "#ffd86b" }, // blanc
  { petale: "#00e5ff", coeur: "#b06bff" }, // cyan
  { petale: "#ffd86b", coeur: "#ff5fa2" }  // jaune
];

let pluieFleursTimeout = null;

function lancerPluieDeFleurs() {
  const ecranResultat = document.querySelector(".voir_good_score");
  if (!ecranResultat) return;

  // Nettoie une éventuelle pluie précédente (Recommencer plusieurs fois)
  const ancienne = ecranResultat.querySelector(".pluie-fleurs");
  if (ancienne) ancienne.remove();
  if (pluieFleursTimeout) clearTimeout(pluieFleursTimeout);

  const conteneur = document.createElement("div");
  conteneur.className = "pluie-fleurs";

  const NOMBRE = 26;
  for (let i = 0; i < NOMBRE; i++) {
    const palette = PALETTES_FLEURS[Math.floor(Math.random() * PALETTES_FLEURS.length)];
    const duree = (4 + Math.random() * 4).toFixed(2);         // 4 -> 8 s (vitesse)
    const retard = (Math.random() * 3).toFixed(2);            // 0 -> 3 s
    const echelle = (0.5 + Math.random() * 0.9).toFixed(2);   // 0.5 -> 1.4 (taille)
    const oscDur = (2 + Math.random() * 2.5).toFixed(2);      // oscillation
    const oscillation = Math.round(10 + Math.random() * 40);  // amplitude px
    const rotation = Math.round(180 + Math.random() * 540);   // deg
    const opacite = (0.7 + Math.random() * 0.3).toFixed(2);   // 0.7 -> 1
    const x = (Math.random() * 100).toFixed(2) + "%";         // position de départ

    const fleur = document.createElement("div");
    fleur.className = "fleur";
    fleur.style.setProperty("--x", x);
    fleur.style.setProperty("--duree", duree + "s");
    fleur.style.setProperty("--retard", retard + "s");
    fleur.style.setProperty("--rotation", rotation + "deg");
    fleur.style.setProperty("--opacite", opacite);

    const swing = document.createElement("div");
    swing.className = "fleur-swing";
    swing.style.setProperty("--bal-duree", oscDur + "s");
    swing.style.setProperty("--retard", retard + "s");
    swing.style.setProperty("--oscillation", oscillation + "px");

    const petale = document.createElement("div");
    petale.className = "fleur-petale";
    petale.style.setProperty("--echelle", echelle);
    petale.style.setProperty("--petale", palette.petale);
    petale.style.setProperty("--coeur", palette.coeur);

    swing.appendChild(petale);
    fleur.appendChild(swing);
    conteneur.appendChild(fleur);
  }

  ecranResultat.appendChild(conteneur);

  // Nettoyage du DOM une fois toutes les animations terminées (performance)
  const dureeMaxMs = (3 + 8) * 1000 + 1000; // retard max + durée max + marge
  pluieFleursTimeout = setTimeout(() => {
    if (conteneur.parentNode) conteneur.remove();
  }, dureeMaxMs);
}

// Re-déclenche une animation CSS existante sur un élément (utile pour les
// écrans déjà présents dans le DOM mais affichés plus tard).
function rejouerAnimation(el) {
  if (!el) return;
  el.style.animation = "none";
  void el.offsetWidth; // force le reflow
  el.style.animation = "";
}

// Apparition échelonnée des boutons de niveaux (au moment de l'affichage).
function animerEntreeNiveaux() {
  const boutons = document.querySelectorAll(".niveaux_btn");
  boutons.forEach((b) => b.classList.remove("niveau-entre"));
  void document.body.offsetWidth; // force le reflow pour relancer l'animation
  boutons.forEach((b) => b.classList.add("niveau-entre"));
}

// cette fonction nous permet d'afficher la partie du score du parcours dans le jeu
let progressEndValue = 0;
function showScore() {
  jouer.classList.remove("see");
  jouerChild.classList.remove("second_see");
  resultBox.classList.remove("demasquer");
  questionsReussies.innerHTML = `Vous avez réussi ${score} questions sur 10.`;

  // Re-déclenchement des animations d'entrée de l'écran résultat
  rejouerAnimation(document.querySelector(".good_score"));
  rejouerAnimation(document.querySelector(".felicitation"));
  rejouerAnimation(questionsReussies);

  let circularProgress = document.querySelector(".circular_progress");
  let pourcentageOne = document.querySelector(".pourcent_one");
  let progressSturtValue = -1;
  progressEndValue = (score / 10) * 100;
  let speed = 20;

  // 🌸 Pluie de fleurs de félicitations UNIQUEMENT si score >= 70%
  if (progressEndValue >= 70) {
    lancerPluieDeFleurs();
  }

  // je cree les variables de stockage des donnees`
  let firstLevel = localStorage.firstLevel;
  let secondLevel = localStorage.secondLevel;
  let thirdLevel = localStorage.thirdLevel;

  //je stock la valeur du score actuel dans le navigateur du joueur ou client
  if (niveauChoisi === 'first') {
    if (firstLevel < progressEndValue) {
      localStorage.firstLevel = progressEndValue;
    }
  } else if (niveauChoisi === 'second') {
    if (secondLevel < progressEndValue) {
      localStorage.secondLevel = progressEndValue;
    }
  } else if (niveauChoisi === 'third') {
    if (thirdLevel < progressEndValue) {
      localStorage.thirdLevel = progressEndValue
    }
  }

  let progress = setInterval(() => {
    progressSturtValue++;
    pourcentageOne.textContent = `${progressSturtValue}%`;
    circularProgress.style.background = `conic-gradient(rgb(0, 119, 255) ${progressSturtValue * 3.6}deg, rgba(136, 136, 136, 0.1) 0deg)`;
    if (progressSturtValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  playSongEnd()
}
// la fonction qui joue la musique a la fin des questions

const playSongEnd = () => {
  const song = new Audio();
  // Correction : le fichier s'appelle "singers.mp3" (minuscules).
  // L'ancienne valeur "singers.MP3" cassait sur les serveurs sensibles à la casse.
  song.src = "./songs/singers.mp3";
  song.play();
}

// les evenements de click sur les differents bouttons dans le jeu
commencer.addEventListener("click", () => {
  document.querySelector(".instruction").classList.add("unhidden");
  main.classList.add("blur");

  // la creation de l'espace de stockage des scores
  if (!localStorage.firstLevel) {
    localStorage.firstLevel = 0;
  }
  if (!localStorage.secondLevel) {
    localStorage.secondLevel = 0;
  }
  if (!localStorage.thirdLevel) {
    localStorage.thirdLevel = 0;
  }
  playSongEnd();
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".instruction").classList.remove("unhidden");
  main.classList.remove("blur");
});
document.querySelector(".continuer").addEventListener("click", () => {
  lesNiveaux.classList.remove("levelsShow");
  niveaux.classList.remove("level-show");
  animerEntreeNiveaux();

  // ajout de l'historique
  // lesNiveaux.appendChild(about)
});

document.querySelector(".return").addEventListener("click", () => {
  jouer.classList.remove("see");
  jouerChild.classList.remove("second_see");
  score = 0;
  // lesNiveaux.appendChild(about);
  document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
});

// Nettoyer l'affichage avant la nouvelle question puis rejouer le chronometre
function resetQuestion() {
  answer.innerHTML = "";
  next.style.display = "none";
  stopChrono();
  chrono.innerText = "";
  chrono.classList.remove("urgence");
}

// Revenir a choisir les niveaux depuis l'écran des résultats par le boutton menu
document.querySelector(".back").addEventListener("click", () => {
  lesNiveaux.appendChild(about);
  jouerChild.classList.add("second_see");
  resultBox.classList.add("demasquer");
  score = 0;
  document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
  animerEntreeNiveaux();
});


//la partie de score et d'apropos

const about = document.querySelector('.apropos');
const boutton = document.createElement('button');
const apropos_btn = document.createElement('button');
boutton.innerHTML = 'Vos score';
apropos_btn.innerHTML = 'A propos';

//je cree l'espace sur le navigateur ou stocker les scores des joueurs
//le contenu de la partie score
const mes_score = document.createElement('div');
const apps = document.createElement('div');
const app = document.createElement('div');
const paraScoreEl = document.createElement('p');
const paraScoreMoy = document.createElement('p');
const paraScoreDif = document.createElement('p');
const apps_para1 = document.createElement('p');
const apps_para2 = document.createElement('p');
const apps_para3 = document.createElement('p');
const goBack = document.createElement('img');
const back = document.createElement('img');
const i_about = document.createComment('div')

// le footer
const footer = document.createElement('footer');
const footer_text = document.createElement('p');
// ajout des contenu au footer
footer.appendChild(footer_text);
// le text du footer dans un pragraphe
footer_text.innerHTML =
  `
&copy ${Date = new Date().getFullYear()}. Tous les droits rservés MATHMIND
`;

// je traite la photo de retour
goBack.setAttribute('alt', 'la photo')
goBack.setAttribute('src', 'images/undo.png')
goBack.classList.add('retour')

back.setAttribute('alt', 'la photo')
back.setAttribute('src', 'images/undo.png')
back.classList.add('retour')

apps.classList.add('de_moi')
app.classList.add('app')
mes_score.classList.add('mes_score')
mes_score.classList.add('apps')
paraScoreEl.innerHTML = `Elémentaire  : ${localStorage.firstLevel} %`
paraScoreMoy.innerHTML = `Moyen  : ${localStorage.secondLevel} %`
paraScoreDif.innerHTML = `Difficile  : ${localStorage.thirdLevel} %`

mes_score.appendChild(paraScoreEl)
mes_score.appendChild(paraScoreMoy)
mes_score.appendChild(paraScoreDif)
mes_score.appendChild(goBack)

apps_para1.innerHTML = 'L\'application MATHMIND est une application de jeux; simple et facile à utiliser, conçu pour développer la faculté mentale pour une meilleure réflexion rapide et claire pour des personnes à l\'âge de croissance'
apps_para2.innerHTML = 'Cette application est conçu par des étudiants passionnés des sciences infiormatiques de l\' <a href="https://uniluk.org" target = "_blank">Université Adventiste de Lukanga</a> en 2025'
apps_para3.innerHTML = 'Nos sommes disponibles pour repondre à des questions concernant cette application et à recevoir des suggestions. Nos questions sont tirées également des concourts scolaires, des tests d\'empauche et autres plusieurs activités scolaires'

// Ajout des contenues a l'historique
app.appendChild(apps_para1) // le paragraphe de l'historique
app.appendChild(apps_para2) // le paragraphe de l'historique
app.appendChild(apps_para3) // le paragraphe de l'historique
app.appendChild(back) // le boutton de retour de l'historique
// ajout de la classe au footer
footer.classList.add("footer")
app.appendChild(footer);

apps.appendChild(app)


//ajout des bouttons a la partie about et la verification de l'existance des bouttons avant de les ajouter
about.addEventListener('click', () => {
  if (about.contains(boutton) || about.contains(apropos_btn)) {
    console.log("ca contient deja");
    about.removeChild(boutton)
    about.removeChild(apropos_btn)
  }
  else {
    console.log("ca ne contient pas");
    about.appendChild(boutton)
    about.appendChild(apropos_btn)
  }
})
//lajout des sections score et apropos a la partie des niveaux
lesNiveaux.appendChild(mes_score)
lesNiveaux.appendChild(apps)

//je cree l'evennement de retour
goBack.addEventListener('click', () => {
  mes_score.classList.add('apps')
})
// je cree l'evennement qui affiche les scores
boutton.addEventListener('click', () => {
  mes_score.classList.remove('apps')
})

apps.classList.add('apps')
//je cree l'evennement de retour
back.addEventListener('click', () => {
  apps.classList.remove("afficherApropos");
  apps.classList.add('apps')
})

// je cree l'evennement qui affiche les scores
apropos_btn.addEventListener('click', () => {
  apps.classList.remove('apps')
  console.log("c'est bon");
  apps.classList.add("afficherApropos");
})

// Puis finalement on lance le jeu
init();