import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardList } = this.props;

    return (
      <span>
        {
          cardList.map((card, index) => (
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />))
        }
      </span>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf.isRequired,
};

export default CardList;
