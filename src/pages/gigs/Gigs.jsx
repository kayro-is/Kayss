import React from 'react';
import './Gigs.scss';
import { useState } from 'react';
import GigCard from '../../components/gigCard/GigCard';
import {gigs} from '../../data';

const Gigs = ()=> {

    const [sort, setSort] = useState ("sales");
    const [open, setOpen] = useState (false);

    const reSort = (type) => {
        setSort (type);
        setOpen (false);
    }
    return (
        <div className='gigs'>
            <div className="container">
                <span className='breadcrumbs'>KAYSS &gt; GRAPHICS & DESIGN</span>
                <h1>AI Artists</h1>
                <p>
                Explorez les frontières de l&apos;art et de la technologie avec Kayss AI Artists.
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder='min' />
                        <input type="text" placeholder='max' />
                        <button>Appliquer</button>
                    </div>
                    <div className="right">
                        <span className='sortBy'>Trier par</span>
                        <span className='sortType'>{sort === "sales" ? "Meilleures ventes" : "Plus récent"}</span>
                        <img src="./img/down.png" alt="" onClick={() => setOpen (!open)} />
                      {( open &&
                        <div className="rightMenu">
                            {sort === "sales" ? (
                            <span onClick={() => reSort ("createdAt")}>Plus récent</span>
                        ) : (
                            <span onClick={() => reSort ("sales")}>Meilleures ventes</span>    
                        )}
                        
                        </div>
                        )}
                    </div>
                </div>
                <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
                </div>
            </div>
        </div>
    )
}

export default Gigs;