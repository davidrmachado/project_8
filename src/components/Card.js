import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="cartão">
        <h2 data-testid="name-card">{ cardName }</h2>
        <p data-testid="rare-card">{ cardRare }</p>
        <p data-testid="description-card">{ cardDescription }</p>
        <div>
          <span data-testid="attr1-card">{ cardAttr1 }</span>
          <span data-testid="attr2-card">{ cardAttr2 }</span>
          <span data-testid="attr3-card">{ cardAttr3 }</span>
        </div>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        <img data-testid="image-card" src={ cardImage } alt={ cardName } id="image" />
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
