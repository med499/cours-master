# **Langages Web 3 (JavaScript avancé)** 🌐

## **Quatrième projet:** Cartes des villes v3

### **Création du projet**

1. Créer un nouveau sous-dossier 4-cartes-des-villes-v3 📁

    > /cours_javascript/4-cartes-des-villes-v3

2. Copier les fichiers du sous-dossier :

    > /cours_javascript/3-cartes-des-villes-v2

3. Coller les fichiers dans le sous dossier :

    > /cours_javascript/4-cartes-des-villes-v3

4. Ajouter le sous dossier **/js** dans le répertoire du projet 📁

    > /cours_javascript/4-cartes-des-villes-v3/js

5. Déplacer le fichier *app.js* dans le sous dossier **/js**

    > /cours_javascript/4-cartes-des-villes-v3/js

6. Ajouter le fichier *geojson.js* dans le sous dossier **/js**

    > /cours_javascript/4-cartes-des-villes-v3/js

7. Charger le fichier *geojson.js* dans le fichier *index.html*

    ```diff
        ...
            </footer>
            </body>
    +       <script src="js/geojson.js"></script>
    +       <script src="js/app.js"></script>
    -       <script src="app.js"></script>
        </html>
    ```

8. Ajouter le code HTML des fonds de carte dans le fichier *index.html*

    ```diff
        ...
        <div id="map" class="h-100 col-9 m-0 p-0">
            <!-- map container -->
        </div>
        <div class="h-100 col-3 m-0 p-2">
    +       <!-- les fonds de carte -->
    +       <div class="card mt-3">
    +           <div class="card-header">Les fonds de carte :</div>
    +           <div class="card-body">
    +               <div class="form-check">
    +                   <input
    +                       class="form-check-input"
    +                       type="radio"
    +                       name="base-map"
    +                       id="base-map-osm"
    +                       value="osm"
    +                       checked
    +                   />
    +                   <label class="form-check-label" for="base-map-osm">
    +                       OpenStreetMap
    +                   </label>
    +               </div>
    +               <div class="form-check">
    +                   <input
    +                       class="form-check-input"
    +                       type="radio"
    +                       name="base-map"
    +                       id="base-map-esri"
    +                       value="esri"
    +                   />
    +                   <label class="form-check-label" for="base-map-esri"> Esri </label>
    +               </div>
    +           </div>
    +       </div>
            <!-- la liste des couches -->
            <div class="card mt-3">
                <div class="card-header">Les fonds de carte :</div>
        ...
    ```
