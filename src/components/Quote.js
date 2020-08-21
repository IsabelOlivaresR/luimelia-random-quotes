import React from 'react';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(31);
console.log(randomNumber);

class Quote extends React.Component {
  refreshPage() {
    window.location.reload();
  }
  render() {
    console.log(this.props.data);
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
    console.log(quote);
    return (
      <div className='page'>
        <ul className='container'>
          {quote}

          <button className='container__button' onClick={this.refreshPage}>
            ¿quieres otra?
          </button>
        </ul>
      </div>
    );
  }
}

export default Quote;
