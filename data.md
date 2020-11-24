# Fichier détaillant la mise en forme des données transmises entre les microbit #

Les données transmises sont uniquement des nombres.

Les nombres allant de 0 à 99 sont réservés pour d'éventuels codes d'erreur.
Les nombres de 100 à 199 correspondent aux action du t-shirt droit, ceux de 200 à 299 aux actions du t-shirt de gauche.

Les nombres allant de 300 à 399 correspondent au code pour revivre.

# Codes d'erreur #

010 : Les pins touchés ne correspondent à aucune combinaison

# Codes t-shirt droit #
110 : Flèche Nord
120 : Flèche Sud
101 : Flèche Est
102 : Flèche Ouest
111 : Flèche Nord-Est
112 : Flèche Nord-Ouest
121 : Flèche Sud-Est
122 : Flèche Sud-Ouest

150 : Tirer
160 : Recharger


# Codes t-shirt gauche #
Ce sont les même que pour le t-shirt droit, avec le chiffre des centaines valant 2 au lieu de 1.

# Codes pour revivre #
