## INTRODUCTION
Le site Nonna M a été imaginé dans le but de mettre en avant et vendre des produits
artisanaux mais également promouvoir un terroir et une région, celle des Abruzzes,
dans le Sud-Est de l’Italie d’où est originaire le fondateur de la société. C’est un bel
hommage à la grand-mère du fondateur, Nonna Maria (« grand-mère Maria » en
Italien) qui participe activement à la préparation de nombreux produits telles que les
sauces tomates, les cœurs d’artichauts ou bien encore la charcuterie.

## OBJECTIF
L’application propose à son utilisateur de s’imprégner de l’histoire de la famille de
Nonna M à travers des photos et anecdotes sur les terres cultivées pour obtenir les
différents produits mis en vente. Cela dans le but de leur donner une dimension plus
artisanale, familiale et le rassurer quant à son authenticité et sa qualité.
Cette application permet également à son administrateur de pouvoir mieux gérer ses
stocks et de pouvoir rester libre quant à l’évolution du contenu général du mis en ligne.

## FONCTIONNALITÉS DE L’APPLICATION
Les utilisateurs pourront remplir un formulaire de commande leur permettant de laisser
leurs coordonnées ainsi que le détail de la commande souhaitée afin que le directeur
de Nonna M puisse les recontacter pour confirmer la disponibilité des produits et
convenir d’une date et d’un lieu pour la livraison.
L’administrateur du site sera le seul à pouvoir se créer un accès administrateur
(comprenant un email et un mot de passe) lui permettant d’accéder au back-office de
l’application de manière sécurisée et ainsi de pouvoir gérer les éléments suivants :
- **Produits** :
o Lister ses produits
o Faire une recherche rapide parmi tous les produits mis en ligne pour en
trouver un particulier plus rapidement
o Ajouter de nouveaux produits
o Modifier des produits existants
o Supprimer des produits existants

- **Stocks** :
o Modifier l’intitulé des produits
o Modifier le stock actuel de chaque produit
o Modifier le tarif HT et le tarif TTC des produits
- **Photos** :
o Modifier chaque photo de la mosaïque de photos
o Modifier chaque commentaire au dos de ces photos
- **Recettes** :
o Modifier le nom de la personne donnant le conseil/recette
o Modifier le texte avant de la carte
o Modifier le texte arrière de la carte
- **Légal** :
o Modifier les Mentions Légales
o Modifier les Conditions Générales de Vente
o Modifier les Conditions Générales d’Utilisation

## RÔLES UTILISATEUR DE L’APPLICATION
- **Utilisateurs non-connectés** : ces utilisateurs représentent l’ensemble des
visiteurs et ont accès à la page d’accueil leur permettant de voir l’ensemble du
site à l’exception de la partie backoffice. Ils peuvent également envoyer un
formulaire de commande.
- **Utilisateur connecté** : ce type d’utilisateur correspond au profil de
l’administrateur du site qui a accès à la partie back-office en plus du reste du
site, grâce à des identifiants sécurisés.

## TECHNOLOGIES UTILISÉES
**Front** :
- React
- Redux
- Axios
- Sass
- Semantic UI (utilisé uniquement pour quelques éléments ponctuels, type
bouton etc...)

**Back** :
- Node.js
- Express
- MongoDb
- Mongoose
- Multer
- Nodemailer
