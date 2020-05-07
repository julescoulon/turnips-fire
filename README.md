# NavetHub

## Introduction

Nous sommes un groupe de trois, composé de Jules Coulon, Cindy Carillo et Nathan Dubocage. Nous avons choisi de faire un tutoriel sur une technologie récente : Svelte. Il s’agit d’un framework Javascript fonctionnant ayant la même approche que React, sous forme de composants réutilisables.

Au départ, nous devions partir sur la création d’une application fonctionnant avec React. Cependant nous nous sommes vite rendu compte que l’on prenait beaucoup de temps pour développer certaines de nos fonctions et que l’on avait du mal a lié les composants entre eux. Puis Jules nous a proposé de basculer notre projet en utilisant Svelte, puisqu’il avait déjà eu une première approche il y a peu. On décide donc de partir sur Svelte pour notre tutoriel ainsi que notre application.

## Principe de fonctionnement

* Front-End : Svelte

* Back End : Firebase avec Authentification, et Firestore de Firebase pour la base de données, on utilise le package rxfire pour simplifier l’utilisation de Firebase dans notre projet

## Installation

Préalables : NodeJS + NPM et cloner notre projet à l’adresse suivante :
https://github.com/julescoulon/turnips-fire

Commandes :

    npm install
    npm run dev

## Création d’une application

L'application Navet Hub qui fait référence au jeu Animal Crossing, est une application réalisée avec Svelte, un framework Javascript fonctionnant sur le même principe que React, les composants. Le but de l'application est de pouvoir se connecter via un bouton qui fait appel à une connexion via Google.

Une fois que notre utilisateur est connecté, il peut ajouter des navets. Il s'agit d'une monnaie dans le jeu et chaque joueur possède un prix en clochette pour son navet qui change chaque matin et après-midi. Le dimanche matin est le seul jour où chaque peut acheter des navets mais ne peut pas les vendre.

Plus le prix du navet est élevé sur l'île d'un joueur, plus les autres joueurs vont être attiré et souhaiteront venir sur cette île.

Enfin, nous pouvons voir en temps réel l'affichage des navets triés par ordre décroissant de prix et qui expire si un laps de temps défini par un utilisateur connecté est expiré.

Afin de stocker nos données, nous avons utilisé Firebase, un système de données interactives proposé qui propose une base de données noSQL et un système d’authentification.

## Comparaisons avec React

Si nous nous sommes orientés sur Svelte, c’est parce que la compréhension du dossier de l’application semble plus simple et l’approche des éléments, plus intuitive.

|                          | Svelte                                                                                                                  | React                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Installation d'un projet | npx degit sveltejs/template my-svelte-project cd my-svelte-project npm install npm run dev                              | npx create-react-app monapp cd monapp npm install npm start           |
| DOM                      | Pas de DOM virtuel                                                                                                      | Utilisation d’un DOM virtuel                                          |
| Composants               | Un fichier par composant (HTML, JS et CSS dans un fichier .svelte)                                                      | 2 fichiers par Composants (un script js, et une feuille de style css) |
| Propagation du CSS       | Unique à chaque composant, chaque composant reçoit une classe CSS unique lors de sa création, le CSS ne « déborde » pas | React, CSS d’un composant se propage sur les autres composants        |
| HTML conditionnel        | Simple condition if, each, etc, syntaxe propre à Svelte, plus court et plus simple                                      | States dans React                                                     |

## Difficultés rencontrées

Comme nous le disions dans l’introduction, nous n’avons pas réussi à réaliser notre application React sur les trois jours de projet définis. Nous avons donc eu une discussion et nous sommes passés à Svelte sur le temps restant imparti avant la soutenance du jeudi 07/05/2020.

Nos difficultés principales étaient globalement l’installation des outils nécessaires au bon fonctionnement de l’application Svelte, c’est-à-dire avoir Node et npm à jour, utiliser correctement git pour tout le monde.

Ensuite, nous avons rencontrés quelques difficultés concernant l’utilisation de Firebase sous React avec l’échange de props entre composants.

L’utilisation des dates en JS ne fut pas une partie de plaisir, surtout avec l’utilisation des fuseaux horaires. Le décompte dynamique a bossé aussi quelques problèmes de mise en place.

Au final, le plus gros problème rencontré était certainement le transfert de « props » de composants à composants mais aussi l’affichage conditionnel de composants.

## Références

Documentation de Svelte : https://svelte.dev/

Firebase : https://firebase.google.com/

Rxfire : https://www.npmjs.com/package/rxfire

Codeconcept : pour formation svelte sur udemy https://codeconcept.teachable.com/

Fireship : pour la première approche de l’utilisation Svelte + Firebase https://fireship.io/lessons/svelte-v3-overview-firebase/

