import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main__title'>
          ¿Qué frase de Luimelia en "Amar es para siempre" eres hoy?
        </h1>
        <Link to={'/quote'} title='quote'>
          <button className='main__button'>Pulsa aquí</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
