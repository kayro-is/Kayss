import React from 'react';
import './NavBar.scss';
import { useState } from 'react';
import { useEffect } from 'react';
//import { Link } from 'react-router-dom';

const NavBar = () => {

    const [active, setActive] = useState(false);
    const [ open, setOpen ] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => window.removeEventListener('scroll', isActive);
    },[]);

    const currentUser = {
        id:1,
        name:'kayro web',    
        isSeller:true,
    }
    return (
        <div className={active ? 'navbar active' : 'navbar'}>
        
        <div className='container'>
            <div className="logo">
                {/*<Link to='/'>*/ }
                <span className='text'>Kayss</span>
                {/*</Link>*/ }
               
                <span className='dot'>.</span>
            </div>
           <div className="links">
            <span>Entreprises Kayss</span>
            <span>Explorer</span>
            <span>Anglais</span>
            <span>Se connecter</span>
            {!currentUser?.isSeller && <span>Devenir freelance</span>}
            {!currentUser && <button>Rejoindre</button>}
            {currentUser && (
                <div className="user" onClick={() => setOpen(!open)}>
                    <img src="https://images.unsplash.com/photo-1721456795352-db8a965f921e?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>{currentUser.name}</span>
                    {open &&<div className="options">
                        {
                            currentUser.isSeller && (
                                <>
                                <span>Offre</span>
                                <span>Ajouter une offre</span>
                                </>
                            )}
                        <span>Commandes</span>
                        <span>Messages</span>
                        <span>Déconnexion</span>
                    </div>
                    } 
                </div>
            )}
           </div>
        </div>

        <>
        <hr /> 
        <div className="menu">
         <span>Test</span>
         <span>Test</span>
        </div>
        </>

        </div>
    );
}

export default NavBar;