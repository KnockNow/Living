TP HTML / CSS/ JAVASCRIPT

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

- William => design de l'application
- Alexis / Yannick => script js permettant la lecture d'une piste après l'avoir sélectionnée dans une liste. Création d'un filtre de recherche simple.
- Maxence => le design du lecteur audio.


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
