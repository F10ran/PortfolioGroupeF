/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// =================================================================
//                            Portfolio
// =================================================================


// Tableau contenant les boutons et les sections associées
const NavButt = [
  {button: "Acc", id: "Part_Acc"},
  {button: "Prop", id: "Part_Prop"},
  {button: "Comp", id: "Part_Comp"},
  {button: "Proj", id: "Part_Proj"},
  {button: "Cont", id: "Part_Cont"}
];

// Fonction pour activer un bouton et afficher la section correspondante
function activateSection(selectedButton) {

  // Désactiver tous les boutons et masquer toutes les sections
  NavButt.forEach(item => {

    document.getElementById(item.button).classList.remove('Activ'); // Désactive le bouton
    document.getElementById(item.id).style.display = 'none'; // Masque la section
  });

  const Particule = document.getElementById('particles-js')

  if (selectedButton.id != "Part_Acc") {Particule.style.display = 'none';}
  if (selectedButton.id == "Part_Acc") {Particule.style.display = "block";}
  // Activer le bouton sélectionné et afficher la section correspondante
  document.getElementById(selectedButton.button).classList.add('Activ');
  document.getElementById(selectedButton.id).style.display = 'block';
}

// Ajout d'un écouteur d'événement pour chaque bouton
NavButt.forEach(item => {
  document.getElementById(item.button).addEventListener('click', () => {activateSection(item) });
});
     // Appel de la fonction pour activer la section correspondante
  


const CompButton = document.getElementById('AllCompButt');

const All_Button = [
  { button: 'Comp-Surv-Butt', id: 'Part_Surv' },
  { button: 'Comp-Admi-Butt', id: 'Part_Admi' },
  { button: 'Comp-Conn-Butt', id: 'Part_Conn' },
  { button: 'Comp-Secu-Butt', id: 'Part_Secu' },
  { button: 'Comp-Prog-Butt', id: 'Part_Prog' }
];

function EventButton({ button, id }) {
  const Button = document.getElementById(button);
  const SubPart = document.getElementById(id);
  
  if (!Button) {
    console.warn(`L'élément ${button} n'a pas été trouvé dans le DOM.`);
    return;
  }
  
  Button.addEventListener('click', () => {

    // Masquer le bouton principal
    CompButton.style.display = 'none';

    const partDetails = {
      'Part_Surv': {
        Logo: `<div class='CompCat'><i class='bx bxs-show'></i></div><h1>Surveiller</h1>`,
        Txt: 'Savoir surveiller, c’est savoir analyser et comprendre un réseau informatique, une compétence fondamentale pour administrer celui-ci avec efficacité.'
      },
      'Part_Admi': {
        Logo: `<div class='CompCat'><i class='bx bxs-cog'></i></div><h1>Administrer</h1>`,
        Txt: 'Administrer un réseau informatique est une compétence primordiale pour mettre en place un réseau et en assurer la continuité.'
      },
      'Part_Conn': {
        Logo: `<div class='CompCat'><i class='bx bx-signal-5'></i></div><h1>Connecter</h1>`,
        Txt: 'Pouvoir connecter des utilisateurs est un élément essentiel dans une entreprise afin de favoriser une coopération optimale et de garantir la productivité.'
      },
      'Part_Secu': {
        Logo: `<div class='CompCat'><i class='bx bx-check-shield'></i></div><h1>Securiser</h1>`,
        Txt: 'Dans un monde où la cybersécurité est un enjeu majeur, comprendre ce qu’est la sécurité informatique permet d’assurer l’intégrité d’un service informatique. '
      },
      'Part_Prog': {
        Logo: `<div class='CompCat'><i class='bx bx-code-alt'></i></div><h1>Programer</h1>`,
        Txt: 'Connaître les langages de programmation est un atout de taille, car cela permet de mettre en œuvre des solutions qui apportent efficacité et innovation.'
      }
    };

    // Vérifie si l'id existe dans l'objet partDetails
    if (partDetails[id]) {
      const { Logo, Txt } = partDetails[id];

      const HTMLSubPart = `
        <div class="CompDet">
          <div class="CompDetLogo">${Logo}</div>
          <div class="CompDetTxt">${Txt}</div>
          <button id='Return'>Retour</button>
        </div>
      `;
      
      SubPart.innerHTML = HTMLSubPart;

      // Ajouter l'événement pour le bouton Return
      const returnButton = document.getElementById('Return');
      if (returnButton) {
        returnButton.addEventListener('click', () => {
          // Afficher le bouton principal
          CompButton.style.display = 'block';

          // Effacer le contenu du SubPart
          SubPart.innerHTML = '';
        });
      }
    } else {
      console.warn(`L'élément ${id} n'a pas été trouvé dans le DOM.`);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  All_Button.forEach(EventButton);
});


const ProjList = document.getElementById('ProjList');

const Proj = [
  {button: "ButtProj_1", id: "PartProj_1", name: 'CRYPTOGRAPHIE', dos: 'Proj1', Cat: 'Cybersécurité', Tech: 'SHA-256', Desc: 'Pour garantir la sécurité et l’intégrité des données dans un système informatique, il est nécessaire d’utiliser un algorithme de hachage qui permet de générer une empreinte unique des données.'},
  {button: "ButtProj_2", id: "PartProj_2", name: 'MORPION', dos: 'Proj2', Cat: 'Dévelloppement', Tech: 'Python', Desc: 'Voici le jeu du Morpion en Python avec une interface graphique. Il s\'agit d\'un programme simple, développé dans le cadre de l\'apprentissage du langage Python au sein de Guardia Cybersecurity School.'},
  {button: "ButtProj_3", id: "PartProj_3", name: 'SCAN DE VULNÉRABILITÉS', dos: 'Proj3', Cat: 'Hacking Ethique', Tech: 'Python', Desc: "Mon scanner de vulnérabilité web est mon plus gros projet Hacking éthique en Python. Il consiste à créer un scanner avec une interface graphique afin d'analyser une URL, scraper le site web et rechercher plusieurs failles (SQL & XSS). J'ai utilisé plusieurs modules comme Beautiful Soup, Requests, Tkinter ou Threading. Comme bonus, à la fin du scan mon programme génère un rapport HTML."},
  {button: "ReturnList", id: "ReturnList"}
];

function ProjDet({ button, id, name, dos, Cat, Tech, Desc }) {
  const Button = document.getElementById(button);
  const Part = document.getElementById(id);

  Button.addEventListener('click', () => {
    if (button === 'ReturnList') {
      // Show the project list and hide all project buttons
      ProjList.style.display = 'block';
      Proj.forEach(item => {
        if (item.button !== 'ReturnList') {
          document.getElementById(item.button).style.display = 'block'; // Show the project buttons
        }
      });
    } else {
      // Hide the project list and show project details
      ProjList.style.display = 'none';
      
      // Build the project details HTML dynamically
      const HTMLProjDet = `
      <div id='DetProj'>
        <div class='DetLin1'>
          <span>${name}</span>
          <span><img class='DetImgAcc' src="src/ProjDet/${dos}/Accueil.png" alt="${name}"></span>
        </div>
        <div class='DetLin2'>
          <div class='ImgDet'>
            <span><img src="src/ProjDet/${dos}/Img1.png" alt="${name} Image 1"></span>
            <span>
              <button class="Defil DefAct"></button> 
              <button class="Defil"></button> 
              <button class="Defil"></button> 
              <button class="Defil"></button>
            </span>
            <button id='ReturnBtn'>Retour</button>
          </div>
          <div class='InfDet'>
            <span class='InfDetPri'> 
              <h2>Information de Développement</h2>
              <div class='InfDetPriLine'><p>Catégorie :</p><p> ${Cat}</p></div>
              <div class='InfDetPriLine'><p>Technologie :</p><p> ${Tech}</p></div>
            </span>
            <span class='InfDetSec'>
              <h2>DESCRIPTION :</h2>
              <p>${Desc}</p>
            </span>
          </div>
        </div>
      </div>`;

      // Inject the generated HTML into the project section
      Part.innerHTML = HTMLProjDet;

      // Add event listener for the "Retour" button
      const ReturnBtn = document.getElementById('ReturnBtn');
      ReturnBtn.addEventListener('click', () => {
        // Show the project list again
        ProjList.style.display = 'block';
        Part.innerHTML = ''; // Clear the project detail content
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  Proj.forEach(ProjDet);  // Loop through the Proj array and call ProjDet on each item
});




