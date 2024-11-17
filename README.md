# SportSee <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5982 57.7027C44.3925 57.7027 57.1963 44.7855 57.1963 28.8514C57.1963 12.9172 44.3925 0 28.5982 0C12.8038 0 0 12.9172 0 28.8514C0 44.7855 12.8038 57.7027 28.5982 57.7027Z" fill="#FF0101"/>
<path d="M40.9175 16.4234C43.5556 16.4234 45.6943 14.2658 45.6943 11.6043C45.6943 8.94275 43.5556 6.78516 40.9175 6.78516C38.2793 6.78516 36.1406 8.94275 36.1406 11.6043C36.1406 14.2658 38.2793 16.4234 40.9175 16.4234Z" fill="#020203"/>
<mask id="mask0_526_3350" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="58" height="58">
<path d="M28.5982 57.7027C44.3925 57.7027 57.1963 44.7855 57.1963 28.8514C57.1963 12.9172 44.3925 0 28.5982 0C12.8038 0 0 12.9172 0 28.8514C0 44.7855 12.8038 57.7027 28.5982 57.7027Z" fill="#FF0101"/>
</mask>
<g mask="url(#mask0_526_3350)">
<path d="M39.5352 29.4227C39.8494 29.93 40.4151 30.247 41.0436 30.247C41.3579 30.247 41.6722 30.1836 41.9864 29.9934L50.5973 24.7938C51.4773 24.2865 51.7287 23.1451 51.2258 22.3208C50.723 21.4331 49.5917 21.1794 48.7746 21.6867L41.6093 25.9986L38.1524 19.2137C37.2096 18.2626 36.1411 17.3115 35.0726 16.4871L24.8275 11.2875C24.1362 10.9705 23.3819 11.0339 22.8162 11.5412L14.2682 19.3406C13.514 20.0381 13.4511 21.1794 14.1425 21.8769C14.8339 22.6379 15.9653 22.7013 16.6566 22.0038L24.3876 15.0287L29.7301 17.7553L20.5535 32.0859L-0.376547 57.0692C-1.19364 58.0204 -1.13078 59.5422 -0.125135 60.3665C0.817662 61.1909 2.32614 61.1275 3.14323 60.1129L23.4448 36.4611L32.1814 38.4902L26.2103 47.9383C25.5818 49.0796 25.9589 50.4747 27.0903 51.1087C28.0959 51.6794 29.4158 51.4258 30.1072 50.4112L37.7753 38.1732C38.2153 37.5391 38.2781 36.7148 38.0267 36.0173C37.7124 35.3198 37.1468 34.8125 36.3925 34.6857L29.6672 33.1004L35.764 23.4622L39.5352 29.4227Z" fill="#020203"/>
</g>
</svg>

## Dashboard d'Analyse Sportive
Ce projet est une application de suivi et d'analyse d'activités sportives, conçue avec React.js et la bibliothèque Recharts pour les graphiques. 
Il permet aux utilisateurs de visualiser leurs données d'entraînement, telles que l'activité quotidienne, la durée moyenne des sessions, les performances, et les scores.

### Fonctionnalités
1. Activité quotidienne : Affichage des calories brûlées et du poids sous forme de graphique à barres.
2. Durée moyenne des sessions : Représentation des sessions hebdomadaires sous forme de courbe.
3. Performances : Diagramme en toile d'araignée pour visualiser les performances.
4. Score personnel : Indicateur du score global de l'utilisateur.
5. Suivi des calories et macronutriments : Affichage des données clés (calories, protéines, glucides, lipides).

### Technologies utilisées
1. Frontend : React.js, Recharts
2. Outil de build : Vite.js
3. CSS : Mise en page responsive et personnalisée
4. Backend (Mock API) : Données simulées pour les utilisateurs et leurs activités

### Installation et lancement du frontend :
1. Prérequis
Assurez-vous que Node.js et npm (ou yarn) sont installés sur votre machine.
2. Installation des dépendances
npm install
3. Lancer le projet en mode développement
npm run dev
Le projet sera accessible via http://localhost:5173
4. Build pour la production
Pour créer une version optimisée du projet :
npm run build

### Installation et lancement du backend:
1. Cloner le repo du back-end : git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
2. En se plaçant dans ce repo du back-end SportSee, installer ses dépendances :
 npm install
3. Lancer le back-end sur le port 3000 (port par défaut) :
 npm start

 
### Données mockées
Les données utilisateur sont simulées via un fichier JSON pour le développement.

### Personnalisation
Les graphiques sont configurés avec Recharts. Consultez la documentation Recharts pour des personnalisations avancées.
