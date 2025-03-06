import React from 'react';
import './Gig.scss';
import { Slider } from 'infinite-react-carousel';

const Gig = () => {
    return (
        <div className='gig'>
            <div className="container">
                <div className="left">
                    <span className='breadCrumbs'>KAYSS &gt; GRAPHICS & DESIGN</span>
                    <h1>Je réaliserai une œuvre d&apos;art unique générée par IA pour vous.</h1>

                    <div className="user">
                        <img 
                        className='pp'
                        src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>kayro web</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>

                    <Slider slidToShow={1} arrowScroll={1}   className="slider">
                    <img
                      src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <img
                      src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt=""
                    />
                    <img
                      src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    </Slider>

                    <h2>À propos de ce service</h2>
                    <p>
                    J&apos;utilise un programme d&apos;intelligence artificielle pour générer des images à partir de descriptions textuelles.
                     Cela signifie que je peux donner vie à votre vision en transformant une simple description en une œuvre d’art, sans nécessiter d’images de référence.
                   L&apos;IA excelle particulièrement dans les domaines suivants :

                    Portraits de personnages (ex : illustration pour votre personnage de JDR comme Donjons & Dragons)
                    Paysages (ex : fonds d&apos;écran, illustrations pour accompagner une histoire)
                    Logos (ex : équipe e-sport, entreprise, photo de profil)
                    Vous pouvez être aussi vague ou détaillé que vous le souhaitez. Une description plus ouverte laissera davantage de place à la créativité de l&apos;IA, 
                    ce qui peut aboutir à des résultats surprenants et uniques. À l’inverse, si vous avez une idée très précise en tête, l’IA pourra s’y conformer avec précision.

                    Toutes les images que je crée sont 100 % originales et exclusives.
                    Si vous avez des questions, n’hésitez pas à me contacter ! 😊  
                    </p>

                    <div className="vendeur">
                        <h2>À propos du vendeur</h2>
                        <div className="user">
                            <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <div className="info">
                                <span>kayro web</span>
                                <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                        <button>Contacter moi</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                            <div className="item">
                                <span className="title">From</span>
                                <span className="desc">France</span>
                              </div>
                              <div className="item">
                                <span className="title">Membre depuis</span>
                                <span className="desc">Aug 2024</span>
                              </div>
                              <div className="item">
                                <span className="title">Temps de réponse </span>
                                <span className="desc">4 heures</span>
                              </div>
                              <div className="item">
                                <span className="title">Dernière livraison</span>
                                <span className="desc">1 jour</span>
                              </div>
                              <div className="item">
                                <span className="title">Languages</span>
                                <span className="desc">Francais</span>
                              </div>
                              <hr />
                                <p>
                                Je m&apos;appelle Kayro et j&apos;aime créer des œuvres dm&apos;art générées par IA pendant mon temps libre.
                                 Jm&apos;ai une grande expérience avec ce programme dm&apos;IA, ce qui me permet de rédiger des descriptions
                                  optimisées pour obtenir des résultats détaillés et impressionnants.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="reviews">
                        <h2>Commentaires</h2>
                        <div className="item">
                            <div className="user">
                                <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='pp' />
                                <div className="info">
                                    <span>mouloud serio</span>
                                    <div className="country">
                                        <img src="/img/language.jpg" alt="" />
                                        <span>France</span>
                                    </div>
                                </div>
                                <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                        <p>
                        Je tiens à dire qu&apos;art_with_ai a été le premier, et sera désormais le seul artiste que j&apos;utiliserai sur Kayss.
                         La communication a été exceptionnelle, chaque jour, il m&apos;envoyait des images que je pouvais modifier à ma guise.
                          Ils ont su écouter, comprendre mes besoins et livrer un travail bien au-delà de mes attentes.
                           Je recommande vivement ce service et je sais déjà que je ferai appel à lui très bientôt.
                        </p>

                            </div>
                            
                        <div className="utile">
                            <span>utile?</span>
                            <img src="/img/like.png" alt="" />
                            <span>oui</span>
                            <img src="/img/dislike.png" alt="" />
                            <span>non</span>
                        </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='pp' />
                                <div className="info">
                                    <span>mouloud serio</span>
                                    <div className="country">
                                        <img src="/img/language.jpg" alt="" />
                                        <span>France</span>
                                    </div>
                                </div>
                                <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                        <p>
                        Je tiens à dire qu&apos;art_with_ai a été le premier, et sera désormais le seul artiste que j&apos;utiliserai sur Kayss.
                         La communication a été exceptionnelle, chaque jour, il m&apos;envoyait des images que je pouvais modifier à ma guise.
                          Ils ont su écouter, comprendre mes besoins et livrer un travail bien au-delà de mes attentes.
                           Je recommande vivement ce service et je sais déjà que je ferai appel à lui très bientôt.
                        </p>

                            </div>
                            
                        <div className="utile">
                            <span>utile?</span>
                            <img src="/img/like.png" alt="" />
                            <span>oui</span>
                            <img src="/img/dislike.png" alt="" />
                            <span>non</span>
                        </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='pp'/>
                                <div className="info">
                                    <span>mouloud serio</span>
                                    <div className="country">
                                        <img src="/img/language.jpg" alt="" />
                                        <span>France</span>
                                    </div>
                                </div>
                                <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                        <p>
                        Je tiens à dire qu&apos;art_with_ai a été le premier, et sera désormais le seul artiste que j&apos;utiliserai sur Kayss.
                         La communication a été exceptionnelle, chaque jour, il m&apos;envoyait des images que je pouvais modifier à ma guise.
                          Ils ont su écouter, comprendre mes besoins et livrer un travail bien au-delà de mes attentes.
                           Je recommande vivement ce service et je sais déjà que je ferai appel à lui très bientôt.
                        </p>

                            </div>
                            
                        <div className="utile">
                            <span>utile?</span>
                            <img src="/img/like.png" alt="" />
                            <span>oui</span>
                            <img src="/img/dislike.png" alt="" />
                            <span>non</span>
                        </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='pp'/>
                                <div className="info">
                                    <span>mouloud serio</span>
                                    <div className="country">
                                        <img src="/img/language.jpg" alt="" />
                                        <span>France</span>
                                    </div>
                                </div>
                                <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                        <p>
                        Je tiens à dire qu&apos;art_with_ai a été le premier, et sera désormais le seul artiste que j&apos;utiliserai sur Kayss.
                         La communication a été exceptionnelle, chaque jour, il m&apos;envoyait des images que je pouvais modifier à ma guise.
                          Ils ont su écouter, comprendre mes besoins et livrer un travail bien au-delà de mes attentes.
                           Je recommande vivement ce service et je sais déjà que je ferai appel à lui très bientôt.
                        </p>
                            </div>
                            <div className="utile">
                            <span>utile?</span>
                            <img src="/img/like.png" alt="" />
                            <span>oui</span>
                            <img src="/img/dislike.png" alt="" />
                            <span>non</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                <div className="price">
                <h3>1 image générée par IA</h3>
               <h2>59,99 €</h2>
               </div>
               <p>
                 Je vais créer une image unique de haute qualité générée par IA en fonction
                 de la description que vous me fournirez.
               </p>
               <div className="details">
                 <div className="item">
                   <img src="/img/clock.png" alt="" />
                   <span>Livraison en 2 jours</span>
                 </div>
                 <div className="item">
                   <img src="/img/recycle.png" alt="" />
                   <span>3 révisions</span>
                 </div>
               </div>
               <div className="features">
                 <div className="item">
                   <img src="/img/check.png" alt="" />
                   <span>Rédaction du prompt</span>
                 </div>
                 <div className="item">
                   <img src="/img/check.png" alt="" />
                   <span>Livraison de l&apos;œuvre</span>
                 </div>
                 <div className="item">
                   <img src="/img/check.png" alt="" />
                   <span>Amélioration de l&apos;image</span>
                 </div>
                 <div className="item">
                   <img src="/img/check.png" alt="" />
                   <span>Design supplémentaire</span>
                 </div>
               </div>
               <button>Continuer</button>
        </div>
      </div>
    </div>
    )
}

export default Gig;