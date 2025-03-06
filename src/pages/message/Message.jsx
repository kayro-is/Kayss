import React from 'react';
import './Message.scss';
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div className="message">
           <div className="container">
            <span className='breadcrumbs'>
                <Link to='/messages'>MESSAGE</Link> &gt; kayro web &gt;
            </span>
            <div className="messages">
                <div className="item">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item owner">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item owner">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item owner">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
                <div className="item owner">
                    <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" 
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit omnis adipisci reiciendis, 
                        sed eaque nisi a voluptatum nam sapiente qui, sunt odio vero. 
                        Itaque aut cumque, dolorem iusto ratione nam!
                    </p>
                </div>
            </div>
            <div className="write">
                <textarea name="" placeholder='Écrire un message' id="" cols='30' rows="10"></textarea>
                <button>Envoyer</button>
            </div>
           </div>
        </div>
    )
}

export default Message;