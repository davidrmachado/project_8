import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (

      <form>

        Nome
        <input data-testid="name-input" type="text" />

        Descrição
        <input data-testid="description-input" type="textarea" />

        Atributo 1
        <input data-testid="attr1-input" type="number" />

        Atributo 2
        <input data-testid="attr2-input" type="number" />

        Atributo 3
        <input data-testid="attr3-input" type="number" />

        Imagem
        <input data-testid="image-input" type="text" />

        Raridade
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        Super Trunfo
        <input data-testid="trunfo-input" type="checkbox" />

        <input data-testid="save-button" type="submit" />

      </form>

    );
  }
}

export default Form;
