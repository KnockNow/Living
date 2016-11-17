# Living [HTML / CSS/ JAVASCRIPT]

======================
Get Started
======================

* `git clone https://github.com/KnockNow/Living.git`
* On the folder Living : `php -S localhost:3000`


====================
Membre de l'équipe
- Maxence
- William
- Alexis
- Yannick

====================

Nous avons choisi de créer une application de streaming audio.

======================
Répartition des tâche
======================

- William : design de l'application
- Alexis / Yannick : script js permettant la lecture d'une piste après l'avoir sélectionnée dans une liste. Création d'un filtre de recherche simple.
- Maxence : le design du lecteur audio.

V2 :
- William : Import local music
- Alexis : optimisation des views
- Yannick : Control player audio
- Maxence : Intégration des flexBoxs (liste ou mosaique)

TACHE A FAIRE :
- (Alexis) : Search bug
- Controleur audio
- Mappage des touches pour le controle audio

Note :

LocalStorage :
  -> Préférence utilisateur :
        - Liste, mosaique
        - Couleur (theme du site)
=======================
Technologies utilisées
=======================
- Framework CSS3 : Bootstrap
- Framework JS : jQuery


=======================
Problèmes
=======================

Nous souhaitons implémenter un ficher json contenant la liste des pistes disponibles dans le lecteur.
Cependant, le navigateur Chrome ne nous permettait pas de charger, via une requête Ajax, le tableau json.
(Erreur : Allow-Control-Allow-Origin).
La seule solution connue oblige à modifié l'en-tête de reponse HTTP grâce à un langage côté serveur.


=======================
Documentation
=======================
