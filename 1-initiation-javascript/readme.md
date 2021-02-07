# **Langages Web 3 (JavaScript avancé)** 🌐

## **Premier projet:** Initiation en Javascript

### **Création du projet**

1. Créer un nouveau sous-dossier 1-initiation-javascript 📁

    > /cours_javascript/1-initiation-javascript

2. Créer un nouveau fichier *index.html*
3. Ajouter le contenu suivant dans le fichier

    ``` html
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Initiation en Javascript</title>
        </head>
        <body>

        </body>
    </html>
    ```

4. Ajouter le premier script Javascript

    ```diff
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Initiation en Javascript</title>
    +       <script>
    +           alert("Hello world!");
    +       </script>
        </head>
        <body>

        </body>
    ```

5. Lancer la page *index.html*. Une boite de dialogue s'affiche avec le message ***Hello world!***

### **Création du premier fichier Javascript**

1. Ajouter un fichier *app.js*
2. Déplacer le contenu du **\<script>\</script>** dans le fichier *app.js*

    >index.html

    ```diff
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Initiation en Javascript</title>
    -       <script>
    -           alert(`Hello world!`);
    -       </script>
        </head>
        <body></body>
        </html>
    ```

    >app.js

    ```javascript
    alert(`Hello world!`);
    ```

3. Charger le fichier *app.js* dans le fichier *index.html*

    ```diff
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Initiation en Javascript</title>
        </head>
        <body></body>
    +   <script src="app.js"></script>
        </html>
    ```

4. Lancer la page *index.html*. Une boite de dialogue s'affiche avec le message ***Hello world!***

### **Exercice**

1. Créer la classe City avec les propriétés et les méthodes suivantes:

    - **Les propriétés**
        - **name:** Le nom de la ville
        - **country:** Le nom du pays
        - **lat:** La latitude du centre de la ville
        - **lon:** La longitude du centre de la ville
        - **population:** La population de la ville

    - **Les méthodes**
        - **getDetails:** retourne une petite description de la ville *( une chaîne de caractères )*
        - **getPosition:** retourne la position de la ville. *( un objet de type { lat, lon } )*

2. Transformer le tableau suivant à une liste d'objet de type City.

| Ville       | Pays        | Longitude | Latitude | Population |
| ----------- | ----------- | --------- | -------- | ---------- |
| Paris       | France      | 48.86     | 2.35     | 2175601    |
| Madrid      | Espagne     | 40.42     | -3.70    | 3334730    |
| Rome        | Italie      | 41.90     | 12.50    | 2844395    |
| Berlin      | Allemagne   | 52.51     | 13.39    | 3748148    |
