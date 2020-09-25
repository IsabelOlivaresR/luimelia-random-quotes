import React from 'react';
import arrow from '../images/flechita.png';
import { Link } from 'react-router-dom';

//generate random number

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(61);

//paint quote and refresh button

class AmarQuote extends React.Component {
  refreshPage() {
    window.location.reload();
  }
  render() {
    const quote = this.props.data.map((quote) => {
      if (parseInt(quote.id) === randomNumber) {
        return (
          <li className='container__info' key={quote.id}>
            <p className='container__info__quote'>"{quote.quote}"</p>
            <p className='container__info__name'>{quote.name}</p>
            <img
              className='container__info__img'
              src={quote.image}
              alt={quote.name}
            ></img>
          </li>
        );
      } else {
        return true;
      }
    });
    return (
      <div className='page2'>
        <ul className='container'>
          <Link to={'/'} title='home'>
            <img className='back__button' src={arrow} alt='back' />
          </Link>
          {quote}
          <button className='container__button' onClick={this.refreshPage}>
            ¿quieres otra?
          </button>
        </ul>
      </div>
    );
  }
}

export default AmarQuote;
