# **Langages Web 3 (JavaScript avancé)** 🌐

## **Deuxième projet:** Carte des villes

### **Création du projet**

1. Créer un nouveau sous-dossier 2-carte-des-villes 📁

    > /cours_javascript/2-carte-des-villes

2. Créer un nouveau fichier *index.html*
3. Ajouter le contenu suivant dans le fichier

    ``` html
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Carte des villes</title>
        </head>
        <body></body>
    </html>
    ```

4. Ajouter un fichier *app.js*

5. Charger le fichier *app.js* dans le fichier *index.html*

    ```diff
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Carte des villes</title>
        </head>
        <body></body>
    +   <script src="app.js"></script>
        </html>
    ```

### **Le framework css: Bootstrap**

1. Aller sur le site: <https://getbootstrap.com/docs/4.6/getting-started/introduction/#css>

2. Copier la balise **\<link>**

3. Coller le contenu dans le **\<header>** de la page index.html

    ```diff
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Carte des villes</title>
    +       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

        </head>
        <body></body>
        <script src="app.js"></script>
        </html>
    ```

### **Le framework OpenLayers**

1. Aller sur le site: <https://openlayers.org/en/latest/doc/quickstart.html>

2. Ajouter les balises **link** et **script** d'openlayers dans le header

    ```diff
        <!DOCTYPE html>
        <html lang="fr">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carte des villes</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    +   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css" type="text/css"/>
    +   <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
        </head>
        <body></body>
        <script src="app.js"></script>
        </html>
    ```

### **Le contenu initial du projet**

1. Ajouter la strcuture html/css du projet

    ```diff
        <!DOCTYPE html>
    -   <html lang="fr">
    +   <html lang="fr" class="h-100">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Carte des villes</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css" type="text/css"/>
                <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
            </head>
    -       <body>
    +       <body class="d-flex flex-column h-100">
    +           <header>
    +               <nav class="navbar navbar-dark bg-dark">
    +                   <div class="container-fluid">
    +                       <a class="navbar-brand mb-0 h1" href="#">Carte des villes</a>
    +                  </div>
    +               </nav>
    +           </header>
    +           <main class="h-100 row">
    +               <div id="map" class="h-100 col-9 m-0 p-0">
    +                   <!-- map container -->
    +               </div>
    +               <div class="h-100 col-3 bg-secondary m-0 p-2"></div>
    +           </main>
    +           <footer class="footer mt-auto bg-dark">
    +               <div class="container">
    +                   <small class="text-muted">M2G. 2021</small>
    +               </div>
    +           </footer>
            </body>
            <script src="app.js"></script>
        </html>
    ```

### **Exercice**

1. Créer une carte openlayers dans l'élément html #map avec les options suivantes:

    - Une seule couche tuillée: le fond de carte OpenStreetMaps
    - Une vue centrée sur l'Europe *(lon: 9.89, lat: 46.66, niveau de zoom: 4)*
    - Deux contoleurs de carte: l'échelle linéaire et la position du curseur *(dans l'élément #mouse-position)*
