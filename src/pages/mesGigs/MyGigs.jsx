import React from 'react';
import './MyGigs.scss';
import { Link } from 'react-router-dom';

const MyGigs = () => {
    return (
        <div className="myGigs">
            <div className="container">
                <div className="title">
                    <h1>Prestations</h1>
                    <Link to="/add" >
                    <button>Ajouter une nouvelle prestation</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Commandes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" "/>
                        </td>
                        <td>Prestation 1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MyGigs;