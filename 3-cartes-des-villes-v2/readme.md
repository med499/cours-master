# **Langages Web 3 (JavaScript avancé)** 🌐

## **Troisième projet:** Cartes des villes v2

### **Création du projet**

1. Créer un nouveau sous-dossier 3-cartes-des-villes-v2 📁

    > /cours_javascript/3-cartes-des-villes-v2

2. Copier les fichiers *index.html* et *app.js* du sous-dossier :

    > /cours_javascript/2-carte-des-villes

3. Coller les 2 fichiers dans le sous dossier :

    > /cours_javascript/3-cartes-des-villes-v2

4. Ajouter le sous dossier img

    > /cours_javascript/3-couche-vecteur/img

5. Ajouter l'image *pin.png* dans le sous dossier img

    > /cours_javascript/3-couche-vecteur/img

6. Ajouter le fichier css *popup.css* dans le sous dossier css

    > /cours_javascript/3-couche-vecteur/css

7. Ajouter un checkbox avec l'id **europe-cities**

    ```diff
        <!DOCTYPE html>
        <html lang="fr" class="h-100">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Carte des villes</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css" type="text/css"/>
                <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
            </head>
            <body>
            <body class="d-flex flex-column h-100">
                <header>
                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand mb-0 h1" href="#">Carte des villes</a>
                        </div>
                    </nav>
                </header>
                <main class="h-100 row m-0 p-0">
                    <div id="map" class="h-100 col-9 m-0 p-0">
                        <!-- map container -->
                    </div>
    -               <div class="h-100 col-3 bg-secondary m-0 p-2">
    +               <div class="h-100 col-3 m-0 p-2">
    -                    <div id="mouse-position" class="badge badge-pill badge-primary w-100 p-1"></div>
    +                   <div class="card mt-3">
    +                       <div class="card-header">
    +                           La liste des couches :
    +                       </div>
    +                       <div class="card-body">
    +                           <div class="form-check">
    +                               <input type="checkbox" class="form-check-input" id="europe-cities">
    +                               <label class="form-check-label" for="europe-cities">Capitales d'europe</label>
    +                           </div>
    +                       </div>
    +                   </div>
    +                   <div class="w-100 p-1">
    +                       <span>La position du curseur :</span><span  id="mouse-position"></span>
    +                   </div>
                    </div>
                </main>
                <footer class="footer mt-auto bg-dark">
                    <div class="container">
                        <small class="text-muted">M2G. 2021</small>
                    </div>
                </footer>
            </body>
            <script src="app.js"></script>
        </html>
    ```

8. Ajouter le code html de la popup

    ```diff
        ...
        <div class="h-100 col-3 m-0 p-2">
            <div class="card mt-3">
                <div class="card-header">
                    La liste des couches :
                </div>
                <div class="card-body">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="europe-cities">
                        <label class="form-check-label" for="europe-cities">Capitales d'europe</label>
                    </div>
                </div>
            </div>
            <div class="w-100 p-1">
                <span>La position du curseur :</span><span  id="mouse-position"></span>
            </div>
    +       <div id="map-popup" class="ol-popup">
    +           <button id="popup-closer" class="ol-popup-closer" onclick="closePopup()"></button>
    +           <div id="map-popup-content"></div>
    +       </div>
        </div>
        ...
    ```

