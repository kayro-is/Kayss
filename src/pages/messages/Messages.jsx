import React from 'react';
import './Messages.scss';
import { Link } from 'react-router-dom';


const Messages = () => {

  const currentUser = {
    id: 1,
    name: 'kayro',
    isSeller: true,
  }

  const message = 'Bonjour, je viens de commander un produit très intéressant. Je voudrais vous le renvoyer.'


    return (
        <div className="messages">
            <div className="container">
                <div className="title">
                    <h1>Commandes</h1>
                    
                    <button>Ajouter une nouvelle Commandes</button>
                    
                </div>
                <table>
                    <tr>
                        <th>Acheteur</th>
                        <th>Dernier message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr className='active'>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>
                        <td>
                       <button>Marquer comme lu</button>
                        </td>
                    </tr>
                          
                    <tr className='active'>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>
                        <td>
                       <button>Marquer comme lu</button>
                        </td>
                    </tr>
                           
                    <tr>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>
                       
                    </tr>
                             
                    <tr>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>
                       
                    </tr>
                              
                    <tr>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>
                       
                    </tr>
             
                    <tr>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>
                        
                    </tr>
        
                    <tr>
                        <td>Kayro web</td>
                        <Link to="/message/123" className="link">
                          {message.substring(0, 100)}...
                         </Link>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Messages;