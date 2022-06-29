import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, onInputChange, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (

      <form>

        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            name="name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input
            data-testid="description-input"
            name="descricao"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1
          <input
            data-testid="attr1-input"
            name="attr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            data-testid="attr2-input"
            name="attr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            data-testid="attr3-input"
            name="attr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            name="image"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
            name="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            name="trunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.bool.isRequired,
};

export default Form;
