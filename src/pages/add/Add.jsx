import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Titre</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Image de couverture</label>
            <input type="file" />
            <label htmlFor="">télécharger Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button>Crée</button>
          </div>
          <div className="details">
            <label htmlFor="">Titre du service</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Courte description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Délai de livraison (ex. : 3 jours)</label>
            <input type="number" />
            <label htmlFor=""> Nombre de révisions</label>
            <input type="number" />
            <label htmlFor="">Ajouter des fonctionnalités</label>
            <input type="text" placeholder="Conception de page" />
            <input type="text" placeholder="Téléchargement de fichiers" />
            <input type="text" placeholder="Configuration du domaine" />
            <input type="text" placeholder="Hébergement" />
            <label htmlFor="">Prix</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;