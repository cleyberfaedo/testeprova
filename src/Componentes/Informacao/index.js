import React, { Component } from 'react';
import '../Informacao/styles.css'

class Informacao extends Component {
  render() {
    return (
        <div class="conteudo">
            <h1>PROVA DICERTATIVA SOBRE REACT</h1>
            <p>{this.props.prova}</p>
        </div>
    );
  }
}

export default Informacao;