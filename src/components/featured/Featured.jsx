import React from 'react';
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Trouvez le service <i>Freelance</i> idéal pour votre entreprise.</h1>
                    <div className='search'>
                        <div className="searchInput">
                            <img src="./img/search.png" alt="logo search" />
                            <input type="text" placeholder="Rechercher un freelance" />
                        </div>
                        <button>Rechercher</button>
                    </div>
                    <div className="popular">
                        <span>Populaire :</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Designe</button>
                        <button>Ai Services</button>
                    </div>
                </div>
                <div className="right">
                <img src="./img/man.png" alt="image homme" />
                </div>
            </div>
        </div>
    )
}

export default Featured;