import React from 'react';
import './Commandes.scss';


const Commandes = () => {

  const currentUser = {
    id: 1,
    name: 'kayro',
    isSeller: true,
  }


    return (
        <div className="commandes">
            <div className="container">
                <div className="title">
                    <h1>Commandes</h1>
                    
                    <button>Ajouter une nouvelle Commandes</button>
                    
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>{currentUser.isSeller ? "Acheteur" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Commandes;