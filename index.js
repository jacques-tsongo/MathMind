  const firstLevel = [
  {
      question: "Résous : 3x + 6 = 15",
      bon: "3",
      reponse: [
        { text: "3", correct: "true" },
        { text: "4", correct: "false" },
        { text: "2", correct: "false" },
        { text: "5", correct: "false" },
      ],
    },
    {
      question: "Résous : 2x - 4 = 6",
      bon: "5",
      reponse: [
        { text: "5", correct: "true" },
        { text: "4", correct: "false" },
        { text: "6", correct: "false" },
        { text: "3", correct: "false" },
      ],
    },
    {
      question: "Quelle est la prochaine valeur dans la suite : 3, 6, 9, ?",
      bon: "12",
      reponse: [
        { text: "10", correct: "false" },
        { text: "11", correct: "false" },
        { text: "12", correct: "true" },
        { text: "13", correct: "false" },
      ],
    },
    {
      question: "Si x = 7, quelle est la valeur de 2x + 3 ?",
      bon: "17",
      reponse: [
        { text: "14", correct: "false" },
        { text: "17", correct: "true" },
        { text: "15", correct: "false" },
        { text: "16", correct: "false" },
      ],
    },
    {
      question: "Résous : 4x - 8 = 12",
      bon: "5",
      reponse: [
        { text: "5", correct: "true" },
        { text: "4", correct: "false" },
        { text: "6", correct: "false" },
        { text: "3", correct: "false" },
      ],
    },
    {
      question: "Résous : 5x + 5 = 30",
      bon: "5",
      reponse: [
        { text: "6", correct: "false" },
        { text: "5", correct: "true" },
        { text: "4", correct: "false" },
        { text: "3", correct: "false" },
      ],
    },
    {
      question: "Trouve la suite : 2, 4, 8, 16, ?",
      bon: "32",
      reponse: [
        { text: "30", correct: "false" },
        { text: "32", correct: "true" },
        { text: "28", correct: "false" },
        { text: "36", correct: "false" },
      ],
    },
    {
      question: "Si x = 4, que vaut 3x + 2 ?",
      bon: "14",
      reponse: [
        { text: "12", correct: "false" },
        { text: "13", correct: "false" },
        { text: "14", correct: "true" },
        { text: "15", correct: "false" },
      ],
    },
    {
    question: "Résous : 5x - 10 = 12",
    bon: "4",
    reponse: [
      { text: "2", correct: false },
      { text: "12", correct: false },
      { text: "9", correct: false },
      { text: "4", correct: true },
    ],
  },
  {
    question: "Résous : 5x - 10 = 6",
    bon: "3",
    reponse: [
      { text: "5", correct: false },
      { text: "11", correct: false },
      { text: "3", correct: true },
      { text: "13", correct: false },
    ],
  },
  {
    question: "Quelle est la prochaine valeur dans la suite : 9, 10, 11, ?",
    bon: "12",
    reponse: [
      { text: "18", correct: false },
      { text: "12", correct: true },
      { text: "21", correct: false },
      { text: "17", correct: false },
    ],
  },
  {
    question: "Si x = 9, quelle est la valeur de 1x + 9 ?",
    bon: "18",
    reponse: [
      { text: "5", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "18", correct: true },
    ],
  },
  {
    question: "Si deux heures plus tôt il était deux heures plus tard, il serait midi. Quelle heure est-il maintenant ?",
    bon: "10h",
    reponse: [
      { text: "8h", correct: false },
      { text: "11h", correct: false },
      { text: "10h", correct: true },
      { text: "9h", correct: false },
    ],
  },
  {
    question: "Pierre est plus grand que Paul. Paul est plus grand que Jean. Qui est le plus petit ?",
    bon: "Jean",
    reponse: [
      { text: "pierre", correct: false },
      { text: "paul", correct: false },
      { text: "aucun", correct: false },
      { text: "Jean", correct: true },
    ],
  },
  {
    question: "Si x = 1, quelle est la valeur de 1x + 7 ?",
    bon: "8",
    reponse: [
      { text: "13", correct: false },
      { text: "8", correct: true },
      { text: "18", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "La somme de 17 et 4 est :",
    bon: "21",
    reponse: [
      { text: "21", correct: true },
      { text: "28", correct: false },
      { text: "8", correct: false },
      { text: "26", correct: false },
    ],
  },
  {
    question: "Le périmètre d’un rectangle 8 x 4 est :",
    bon: "24",
    reponse: [
      { text: "14", correct: false },
      { text: "31", correct: false },
      { text: "18", correct: false },
      { text: "24", correct: true },
    ],
  },
  {
    question: "Il y a 6 ans, j’avais 8 ans. Quel âge ai-je aujourd’hui ?",
    bon: "14",
    reponse: [
      { text: "10", correct: false },
      { text: "24", correct: false },
      { text: "14", correct: true },
      { text: "19", correct: false },
    ],
  },
  {
    question: "On lance un dé équilibré. Quelle est la probabilité d’obtenir 3 ?",
    bon: "1/6",
    reponse: [
      { text: "11", correct: false },
      { text: "1/6", correct: true },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Si x = 4, quelle est la valeur de 4x + 4 ?",
    bon: "20",
    reponse: [
      { text: "20", correct: true },
      { text: "5", correct: false },
      { text: "15", correct: false },
      { text: "28", correct: false },
    ],
  },
  {
    question: "Si dans 5 ans Paul aura 32 ans, quel est son âge actuel ?",
    bon: "27",
    reponse: [
      { text: "33", correct: false },
      { text: "35", correct: false },
      { text: "27", correct: true },
      { text: "24", correct: false },
    ],
  },
  {
    question: "Le rayon d’un cercle de diamètre 19 est :",
    bon: "9.5",
    reponse: [
      { text: "11", correct: false },
      { text: "16", correct: false },
      { text: "15", correct: false },
      { text: "9.5", correct: true },
    ],
  },
  {
    question: "Complète la suite : 17, 18, 19, 20, ?",
    bon: "21",
    reponse: [
      { text: "30", correct: false },
      { text: "29", correct: false },
      { text: "21", correct: true },
      { text: "24", correct: false },
    ],
  },
  {
    question: "Le périmètre d’un rectangle 2 x 4 est :",
    bon: "12",
    reponse: [
      { text: "2", correct: false },
      { text: "12", correct: true },
      { text: "1", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "On lance un dé équilibré. Quelle est la probabilité d’obtenir 1 ?",
    bon: "1/6",
    reponse: [
      { text: "1/6", correct: true },
      { text: "5", correct: false },
      { text: "17", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Un bus contient 69 passagers. 9 descendent et 2 montent. Combien restent-ils ?",
    bon: "62",
    reponse: [
      { text: "57", correct: false },
      { text: "62", correct: true },
      { text: "61", correct: false },
      { text: "65", correct: false },
    ],
  },
  {
    question: "Complète la suite : 7, 8, 9, 10, ?",
    bon: "11",
    reponse: [
      { text: "11", correct: true },
      { text: "13", correct: false },
      { text: "14", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Complète la suite : 15, 16, 17, 18, ?",
    bon: "19",
    reponse: [
      { text: "28", correct: false },
      { text: "23", correct: false },
      { text: "19", correct: true },
      { text: "16", correct: false },
    ],
  },
  {
    question: "Résous : 1x - 6 = 9",
    bon: "15",
    reponse: [
      { text: "3", correct: false },
      { text: "15", correct: true },
      { text: "14", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    question: "Si dans 5 ans Paul aura 26 ans, quel est son âge actuel ?",
    bon: "21",
    reponse: [
      { text: "17", correct: false },
      { text: "21", correct: true },
      { text: "25", correct: false },
      { text: "23", correct: false },
    ],
  },
  {
    question: "Si dans 5 ans Paul aura 21 ans, quel est son âge actuel ?",
    bon: "16",
    reponse: [
      { text: "16", correct: true },
      { text: "14", correct: false },
      { text: "12", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    question: "Complète la suite : 15, 22, 29, 36, ?",
    bon: "43",
    reponse: [
      { text: "39", correct: false },
      { text: "45", correct: false },
      { text: "47", correct: false },
      { text: "43", correct: true },
    ],
  },
  {
    question: "Le produit de 20 et 13 est :",
    bon: "260",
    reponse: [
      { text: "21", correct: false },
      { text: "260", correct: true },
      { text: "161", correct: false },
      { text: "234", correct: false },
    ],
  },
  {
    question: "On lance un dé équilibré. Quelle est la probabilité d’obtenir 6 ?",
    bon: "1/6",
    reponse: [
      { text: "16", correct: false },
      { text: "1/6", correct: true },
      { text: "20", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    question: "On lance un dé équilibré. Quelle est la probabilité d’obtenir 5 ?",
    bon: "1/6",
    reponse: [
      { text: "17", correct: false },
      { text: "8", correct: false },
      { text: "2", correct: false },
      { text: "1/6", correct: true },
    ],
  },
  {
    question: "Un bus contient 44 passagers. 12 descendent et 8 montent. Combien restent-ils ?",
    bon: "40",
    reponse: [
      { text: "40", correct: true },
      { text: "37", correct: false },
      { text: "46", correct: false },
      { text: "48", correct: false },
    ],
  },
  {
    question: "Il y a 7 ans, j’avais 5 ans. Quel âge ai-je aujourd’hui ?",
    bon: "12",
    reponse: [
      { text: "12", correct: true },
      { text: "13", correct: false },
      { text: "17", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Un fermier a 20 chèvres. Toutes sauf 7 meurent. Combien restent-elles ?",
    bon: "7",
    reponse: [
      { text: "7", correct: true },
      { text: "12", correct: false },
      { text: "9", correct: false },
      { text: "17", correct: false },
    ],
  },
  {
    question: "Un escargot monte 4 m par jour et descend 1 m la nuit. En combien de jours atteint-il 13 m ?",
    bon: "4",
    reponse: [
      { text: "3", correct: false },
      { text: "12", correct: false },
      { text: "5", correct: false },
      { text: "4", correct: true },
    ],
  },
  {
    question: "Un bus contient 55 passagers. 12 descendent et 19 montent. Combien restent-ils ?",
    bon: "62",
    reponse: [
      { text: "72", correct: false },
      { text: "62", correct: true },
      { text: "64", correct: false },
      { text: "69", correct: false },
    ],
  },
  {
    question: "Si x = 10, quelle est la valeur de 3x + 10 ?",
    bon: "40",
    reponse: [
      { text: "40", correct: true },
      { text: "2", correct: false },
      { text: "24", correct: false },
      { text: "27", correct: false },
    ],
  },
  {
    question: "Un escargot monte 3 m par jour et descend 2 m la nuit. En combien de jours atteint-il 9 m ?",
    bon: "7",
    reponse: [
      { text: "17", correct: false },
      { text: "9", correct: false },
      { text: "16", correct: false },
      { text: "7", correct: true },
    ],
  },
  {
    question: "Quelle est la prochaine valeur dans la suite : 4, 9, 14, ?",
    bon: "19",
    reponse: [
      { text: "19", correct: true },
      { text: "21", correct: false },
      { text: "26", correct: false },
      { text: "17", correct: false },
    ],
  },
  {
    question: "Il y a 13 ans, j’avais 9 ans. Quel âge ai-je aujourd’hui ?",
    bon: "22",
    reponse: [
      { text: "18", correct: false },
      { text: "26", correct: false },
      { text: "22", correct: true },
      { text: "19", correct: false },
    ],
  },
  {
    question: "Complète la suite : 2, 8, 14, 20, ?",
    bon: "26",
    reponse: [
      { text: "30", correct: false },
      { text: "36", correct: false },
      { text: "26", correct: true },
      { text: "21", correct: false },
    ],
  },
  {
    question: "Quelle est la prochaine valeur dans la suite : 15, 17, 19, ?",
    bon: "21",
    reponse: [
      { text: "21", correct: true },
      { text: "19", correct: false },
      { text: "22", correct: false },
      { text: "17", correct: false },
    ],
  },
  {
    question: "Quelle est la valeur de x si 4x + 4 = 20 ?",
    bon: "4",
    reponse: [
      { text: "5", correct: false },
      { text: "4", correct: true },
      { text: "6", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Quelle est la valeur de x si 5x + 3 = 18 ?",
    bon: "3",
    reponse: [
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: true },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Un fermier a 30 poules. Toutes sauf 10 meurent. Combien restent-elles ?",
    bon: "10",
    reponse: [
      { text: "20", correct: false },
      { text: "10", correct: true },
      { text: "15", correct: false },
      { text: "30", correct: false },
    ],
  },
  {
    question: "Complète la suite : 20, 22, 24, 26, ?",
    bon: "28",
    reponse: [
      { text: "28", correct: true },
      { text: "30", correct: false },
      { text: "34", correct: false },
      { text: "27", correct: false },
    ],
  },
  {
    question: "Quel est le périmètre d’un carré de côté 7 cm ?",
    bon: "28",
    reponse: [
      { text: "28", correct: true },
      { text: "14", correct: false },
      { text: "24", correct: false },
      { text: "21", correct: false },
    ],
  },
  {
    question: "Complète la suite : 3, 6, 9, 12, ?",
    bon: "15",
    reponse: [
      { text: "12", correct: false },
      { text: "15", correct: true },
      { text: "18", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    question: "Un fermier a 25 vaches. Toutes sauf 15 meurent. Combien restent-elles ?",
    bon: "15",
    reponse: [
      { text: "10", correct: false },
      { text: "15", correct: true },
      { text: "5", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    question: "Complète la suite : 10, 20, 30, 40, ?",
    bon: "50",
    reponse: [
      { text: "50", correct: true },
      { text: "45", correct: false },
      { text: "60", correct: false },
      { text: "55", correct: false },
    ],
  },
  {
    question: "Complète la suite : 6, 12, 18, 24, ?",
    bon: "30",
    reponse: [
      { text: "36", correct: false },
      { text: "30", correct: true },
      { text: "33", correct: false },
      { text: "28", correct: false },
    ],
  },
  {
    question: "Quelle est la valeur de x si 2x + 6 = 14 ?",
    bon: "4",
    reponse: [
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "6", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Complète la suite : 1, 3, 5, 7, ?",
    bon: "9",
    reponse: [
      { text: "9", correct: true },
      { text: "11", correct: false },
      { text: "8", correct: false },
      { text: "7", correct: false },
    ],
  },

];
const thirdLevel = [
  {
    question: "Quel est le plus grand pays du monde ?",
    bon: "Russie",
    reponse: [
      { text: "Chine"},
      { text: "USA"},
      { text: "Russie"},
      { text: "Canada"},
    ],
  },
  {
    question:
      "On lance un dé équilibré. Quelle est la probabilité d’obtenir 2 ?",
    bon: "1/6",
    reponse: [{ text: "17" }, { text: "19" }, { text: "1/6" }, { text: "2" }],
  },
  {
    question: "Résous : 4x - 9 = 11",
    bon: "5",
    reponse: [{ text: "14" }, { text: "9" }, { text: "15" }, { text: "5" }],
  },
  {
    question:
      "On lance un dé équilibré. Quelle est la probabilité d’obtenir 3 ?",
    bon: "1/6",
    reponse: [{ text: "3" }, { text: "11" }, { text: "16" }, { text: "1/6" }],
  },
  {
    question: "Résous : 5x - 5 = 2",
    bon: "1",
    reponse: [{ text: "8" }, { text: "6" }, { text: "2" }, { text: "1" }],
  },
  {
    question: "Le rayon d’un cercle de diamètre 2 est :",
    bon: "1.0",
    reponse: [{ text: "3" }, { text: "12" }, { text: "1.0" }, { text: "18" }],
  },
  {
    question: "Le produit de 13 et 1 est :",
    bon: "13",
    reponse: [{ text: "23" }, { text: "2" }, { text: "13" }, { text: "10" }],
  },
  {
    question:
      "On lance un dé équilibré. Quelle est la probabilité d’obtenir 6 ?",
    bon: "1/6",
    reponse: [{ text: "9" }, { text: "15" }, { text: "7" }, { text: "1/6" }],
  },
  {
    question: "L’aire d’un carré de côté 2 est :",
    bon: "4",
    reponse: [{ text: "1" }, { text: "4" }, { text: "12" }, { text: "13" }],
  },
  {
    question:
      "On lance un dé équilibré. Quelle est la probabilité d’obtenir 4 ?",
    bon: "1/6",
    reponse: [{ text: "6" }, { text: "1/6" }, { text: "12" }, { text: "20" }],
  },
  {
    question: "La somme de 15 et 11 est :",
    bon: "26",
    reponse: [{ text: "11" }, { text: "2" }, { text: "28" }, { text: "26" }],
  },
  {
    question:
      "On tire une carte d’un jeu de 52 cartes. Quelle est la probabilité de tirer un As ?",
    bon: "4/52",
    reponse: [{ text: "3" }, { text: "17" }, { text: "4/52" }, { text: "12" }],
  },
  {
    question: "Si x = 1, quelle est la valeur de 1x + 7 ?",
    bon: "8",
    reponse: [{ text: "13" }, { text: "8" }, { text: "18" }, { text: "5" }],
  },
  {
    question:
      "On lance un dé équilibré. Quelle est la probabilité d’obtenir 2 ?",
    bon: "1/6",
    reponse: [{ text: "20" }, { text: "1/6" }, { text: "4" }, { text: "16" }],
  },
  {
    question: "Le périmètre d’un rectangle 6 x 3 est :",
    bon: "18",
    reponse: [{ text: "3" }, { text: "17" }, { text: "22" }, { text: "18" }],
  },
  {
    question: "La somme de 12 et 18 est :",
    bon: "30",
    reponse: [{ text: "30" }, { text: "18" }, { text: "36" }, { text: "21" }],
  },
  {
    question: "Le produit de 6 et 12 est :",
    bon: "72",
    reponse: [{ text: "72" }, { text: "35" }, { text: "58" }, { text: "16" }],
  },
  {
    question: "Résous : 5x - 4 = 18",
    bon: "4",
    reponse: [{ text: "4" }, { text: "14" }, { text: "10" }, { text: "7" }],
  },
  {
    question: "Le périmètre d’un rectangle 10 x 10 est :",
    bon: "40",
    reponse: [{ text: "40" }, { text: "16" }, { text: "50" }, { text: "21" }],
  },
  {
    question: "Le produit de 4 et 2 est :",
    bon: "8",
    reponse: [{ text: "2" }, { text: "18" }, { text: "8" }, { text: "7" }],
  },
  {
    question: "Résous : 5x - 9 = 14",
    bon: "4",
    reponse: [{ text: "7" }, { text: "6" }, { text: "1" }, { text: "4" }],
  },
  {
    question: "L’aire d’un carré de côté 12 est :",
    bon: "144",
    reponse: [{ text: "144" }, { text: "58" }, { text: "56" }, { text: "7" }],
  },
  {
    question: "Résous : 5x - 10 = 15",
    bon: "5",
    reponse: [{ text: "10" }, { text: "15" }, { text: "1" }, { text: "5" }],
  },
  {
    question: "L’aire d’un carré de côté 5 est :",
    bon: "25",
    reponse: [{ text: "25" }, { text: "33" }, { text: "32" }, { text: "3" }],
  },
  {
    question: "Si x = 3, quelle est la valeur de 3x + 3 ?",
    bon: "12",
    reponse: [{ text: "4" }, { text: "12" }, { text: "22" }, { text: "9" }],
  },
  {
    question: "L’aire d’un carré de côté 4 est :",
    bon: "16",
    reponse: [{ text: "13" }, { text: "1" }, { text: "16" }, { text: "6" }],
  },
  // ... autres questions du 2e niveau
];

const secondLevel = [
  {
    question: "Combien y a-t-il de planètes dans le système solaire ?",
    bon: "8",
    reponse: [
      { text: "7"},
      { text: "8"},
      { text: "9"},
      { text: "6"},
    ],
  },
   {
    question:
      "Un bus contient 78 passagers. 15 descendent et 19 montent. Combien restent-ils ?",
    bon: "82",
    reponse: [{ text: "78" }, { text: "82" }, { text: "87" }, { text: "81" }],
  },
  {
    question: "Complète la suite : 17, 18, 19, 20, ?",
    bon: "21",
    reponse: [{ text: "19" }, { text: "22" }, { text: "21" }, { text: "24" }],
  },
  {
    question: "Il y a 7 ans, j’avais 5 ans. Quel âge ai-je aujourd’hui ?",
    bon: "12",
    reponse: [{ text: "12" }, { text: "13" }, { text: "17" }, { text: "7" }],
  },
  {
    question: "Quelle est la prochaine valeur dans la suite : 12, 16, 20, ?",
    bon: "24",
    reponse: [{ text: "24" }, { text: "29" }, { text: "26" }, { text: "31" }],
  },
  {
    question: "Complète la suite : 16, 21, 26, 31, ?",
    bon: "36",
    reponse: [{ text: "36" }, { text: "43" }, { text: "41" }, { text: "33" }],
  },
  {
    question:
      "Un fermier a 13 chèvres. Toutes sauf 13 meurent. Combien restent-elles ?",
    bon: "13",
    reponse: [{ text: "10" }, { text: "13" }, { text: "19" }, { text: "15" }],
  },
  {
    question: "Complète la suite : 9, 17, 25, 33, ?",
    bon: "41",
    reponse: [{ text: "41" }, { text: "47" }, { text: "38" }, { text: "49" }],
  },
  {
    question:
      "Un bus contient 77 passagers. 16 descendent et 7 montent. Combien restent-ils ?",
    bon: "68",
    reponse: [{ text: "73" }, { text: "68" }, { text: "64" }, { text: "66" }],
  },
  {
    question: "Il y a 7 ans, j’avais 7 ans. Quel âge ai-je aujourd’hui ?",
    bon: "14",
    reponse: [{ text: "22" }, { text: "9" }, { text: "19" }, { text: "14" }],
  },
  {
    question:
      "Un fermier a 12 chèvres. Toutes sauf 15 meurent. Combien restent-elles ?",
    bon: "15",
    reponse: [{ text: "21" }, { text: "15" }, { text: "17" }, { text: "16" }],
  },
  {
    question: "Complète la suite : 9, 12, 15, 18, ?",
    bon: "21",
    reponse: [{ text: "20" }, { text: "24" }, { text: "21" }, { text: "27" }],
  },
  {
    question:
      "Un bus contient 69 passagers. 2 descendent et 6 montent. Combien restent-ils ?",
    bon: "73",
    reponse: [{ text: "68" }, { text: "72" }, { text: "73" }, { text: "78" }],
  },
  {
    question:
      "Un bus contient 55 passagers. 12 descendent et 19 montent. Combien restent-ils ?",
    bon: "62",
    reponse: [{ text: "72" }, { text: "62" }, { text: "64" }, { text: "69" }],
  },
  {
    question:
      "Un fermier a 25 chèvres. Toutes sauf 14 meurent. Combien restent-elles ?",
    bon: "14",
    reponse: [{ text: "9" }, { text: "14" }, { text: "10" }, { text: "15" }],
  },
  {
    question:
      "Un escargot monte 5 m par jour et descend 2 m la nuit. En combien de jours atteint-il 8 m ?",
    bon: "2",
    reponse: [{ text: "2" }, { text: "6" }, { text: "12" }, { text: "8" }],
  },
  {
    question:
      "Un bus contient 54 passagers. 14 descendent et 18 montent. Combien restent-ils ?",
    bon: "58",
    reponse: [{ text: "65" }, { text: "64" }, { text: "58" }, { text: "62" }],
  },
  {
    question:
      "Un fermier a 18 chèvres. Toutes sauf 6 meurent. Combien restent-elles ?",
    bon: "6",
    reponse: [{ text: "15" }, { text: "4" }, { text: "6" }, { text: "14" }],
  },
  {
    question: "Si demain est dimanche, quel jour était-il avant-hier ?",
    bon: "vendredi",
    reponse: [
      { text: "mardi" },
      { text: "Samedi" },
      { text: "vendredi" },
      { text: "lundi" },
    ],
  },
  {
    question:
      "Un escargot monte 4 m par jour et descend 2 m la nuit. En combien de jours atteint-il 10 m ?",
    bon: "4",
    reponse: [{ text: "3" }, { text: "11" }, { text: "4" }, { text: "12" }],
  },
  {
    question: "Si demain est dimanche, quel jour était-il avant-hier ?",
    bon: "vendredi",
    reponse: [
      { text: "Samedi" },
      { text: "vendredi" },
      { text: "jeudi" },
      { text: "mardi" },
    ],
  },
  {
    question:
      "Un fermier a 14 chèvres. Toutes sauf 12 meurent. Combien restent-elles ?",
    bon: "12",
    reponse: [{ text: "16" }, { text: "11" }, { text: "12" }, { text: "8" }],
  },
  {
    question: "Si demain est samedi, quel jour était-il avant-hier ?",
    bon: "jeudi",
    reponse: [
      { text: "lundi" },
      { text: "Vendredi" },
      { text: "jeudi" },
      { text: "Samedi" },
    ],
  },
  {
    question: "Il y a 11 ans, j’avais 11 ans. Quel âge ai-je aujourd’hui ?",
    bon: "22",
    reponse: [{ text: "25" }, { text: "22" }, { text: "26" }, { text: "20" }],
  },
  {
    question: "Si demain est vendredi, quel jour était-il avant-hier ?",
    bon: "mercredi",
    reponse: [
      { text: "mercredi" },
      { text: "jeudi" },
      { text: "samedi" },
      { text: "Vendredi" },
    ],
  },
  {
    question:
      "Un bus contient 78 passagers. 19 descendent et 10 montent. Combien restent-ils ?",
    bon: "69",
    reponse: [{ text: "69" }, { text: "79" }, { text: "68" }, { text: "65" }],
  },
  // ... autres questions du 3e niveau
];

//les variables de stockage des elements html

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

//les variables de controle de jeu

let currentTable = [];
let currentQuestionIndex = 0;
let score = 0;
let counter = 1;
let currentQuestion = null;

//on initialise le quiz

function init() {
  setupLevelButtons();
  setupGlobalEvents();
}

// Gestion du choix de niveau
function setupLevelButtons() {
  niveauBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedLevel = e.target.value;

      if (selectedLevel === "firstLevel") {
        currentTable = firstLevel;
      } else if (selectedLevel === "secondLevel") {
        currentTable = secondLevel;
      } else if (selectedLevel === "thirdLevel") {
        currentTable = thirdLevel;
      }

      // Masquer les niveaux et commencer
      lesNiveaux.classList.remove("levelsShow");
      niveaux.classList.remove("level-show");
      document.querySelector(".laBonnereponse").style.display = "none"
      document.querySelector(".mauvaiseReponse").style.display = "none"
      startQuiz();
    });
  });
}


//la fonction qui permet de lancer le jeu

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

function showNextQuestion() {
  resetQuestion();

  if (currentQuestionIndex >= 10) {
    showScore();
    return;
  }

  const randomIndex = Math.floor(Math.random() * currentTable.length);
  currentQuestion = currentTable[randomIndex];
  question.innerHTML = currentQuestion.question;

  const compteur = `Question n° ${counter} sur 10`;
  document.querySelector(".leSpan").innerHTML = compteur;

  currentQuestion.reponse.forEach((rep) => {
    const btn = document.createElement("button");
    btn.textContent = rep.text;
    btn.classList.add("answers");

    btn.addEventListener("click", () => handleAnswerClick(btn, rep.text));

    answer.appendChild(btn);
  });

  currentQuestionIndex++;
  counter++;
}

function handleAnswerClick(button, selectedText) {
  const vrai_reponse = currentQuestion.bon;
  const allButtons = document.querySelectorAll(".answers");

  if (selectedText === vrai_reponse) {
    score++;
    document.querySelector(".laBonnereponse").style.display = "block";
    document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`
  } else {
    const mauvaiseReponse = document.querySelector(".mauvaiseReponse");
    mauvaiseReponse.style.display = "block";
    mauvaiseReponse.innerHTML = `La bonne réponse est : <em>${vrai_reponse}</em>`;
  }

  allButtons.forEach((btn) => btn.classList.add("disabled"));
  next.style.display = "block";
}

//passer a la question suivante

next.addEventListener("click", () => {
  document.querySelector(".laBonnereponse").style.display = "none";
  document.querySelector(".mauvaiseReponse").style.display = "none";
  next.style.display = "none";
  showNextQuestion();
});

recommencer.addEventListener("click", () => {
  resultBox.classList.add("demasquer");
  startQuiz();
});

//l'affichage du result

function showScore() {
  jouer.classList.remove("see");
  jouerChild.classList.remove("second_see");
  resultBox.classList.remove("demasquer");
  questionsReussies.innerHTML = `Vous avez réussi ${score} questions sur 10.`;
  let circularProgress = document.querySelector(".circular_progress")
  let pourcentageOne = document.querySelector(".pourcent_one")
  let progressSturtValue =-1;
  let progressEndValue =  (score  / 10) * 100;
  let speed = 20;
  let leScore = document.querySelector("#leScore");

  let progress = setInterval(() => {
    progressSturtValue++;
    pourcentageOne.textContent = `${progressSturtValue}%`;
    circularProgress.style.background = `conic-gradient(#ea05ff ${progressSturtValue * 3}deg, rgba(136, 136, 136, 0.1) 0deg)`
    if(progressSturtValue == progressEndValue){
      clearInterval(progress)
    }
  }, speed) 

}

//les evenements sur les bouttons

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
    jouer.classList.remove("see")
    jouerChild.classList.remove("second_see");
    score = 0;
    document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
    console.log("ok");
    
});
// les outils

function resetQuestion() {
  answer.innerHTML = "";
  next.style.display = "none";
}

//reafficher les niveaux
document.querySelector(".back").addEventListener('click', () => {
  jouerChild.classList.add("second_see");
  resultBox.classList.add("demasquer");
  score = 0;
  document.querySelector(".leScore").innerHTML = `Votre score est de ${score} sur 10<br>ou ${(score / 10) * 100}%`;
})

// lancement du jeu

init();
      