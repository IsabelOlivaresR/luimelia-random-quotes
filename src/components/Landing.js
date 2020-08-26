import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main__title'>
          ¿Qué frase de Luisita o Amelia eres en...?
        </h1>
        <div className='button__container'>
          <Link to={'/amarquote'} title='quote'>
            <button className='main__button'></button>
          </Link>
          <Link to={'/luimeliaquote'} title='lquote'>
            <button className='luimelia__button'></button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
