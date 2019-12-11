import React, { Component } from 'react';
import '../Resposta/styles.css'

class Resposta extends Component {
  render() {
    return (
        <div class="conteudo">
            <form>
                <label>
                    Resposta:
                <input class="form"type="text" name="resposta" />
                </label>
                <input class="button" type="submit" value="Enviar" />
            </form>
        </div>
    );
  }
}

export default Resposta;