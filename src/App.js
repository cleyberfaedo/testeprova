import React, { Component } from 'react';

import Header from './Componentes/Header/index.js'
import Informacao from './Componentes/Informacao/index.js'
import Resposta from './Componentes/Resposta/index.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Informacao
          prova='Crie um repositório público de código do projeto e cole o link aqui para 
          realizar a entrega. O projeto deve ser um projeto React e a aplicação deve possuir
           um componente na forma de página, que contenha outros 3 componentes menores, de forma 
           que pudessem ser reaproveitados em outras partes do projeto.'
        />
        <Resposta/>


      </div>
    );
  }
}

export default App;
