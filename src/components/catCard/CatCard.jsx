import React from 'react';
import './CardCard.scss';
import { Link } from 'react-router-dom';

const catCard = ({card}) => {
  return (
    <Link to="offres?cat=design">
    <div className='catCard'>
      <img src={card.img} alt="" />
      <span className="desc">{card.desc}</span>
      <span className="title">{card.title}</span>
        </div>
    </Link>
  );
}

export default catCard ;