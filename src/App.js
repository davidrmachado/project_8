import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardDeck: [],
    };
  }

    handleSaveButton = () => {
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare,
      } = this.state;
      const attr1 = Number(cardAttr1);
      const attr2 = Number(cardAttr2);
      const attr3 = Number(cardAttr3);
      const totalAttr = attr1 + attr2 + attr3;
      const attrLimit = 90;
      const totalAttrLimit = 210;

      if (cardName.length > 0
         && cardDescription.length > 0
         && cardImage.length > 0
         && cardRare.length > 0
         && attr1 >= 0 && attr1 <= attrLimit
         && attr2 >= 0 && attr2 <= attrLimit
         && attr3 >= 0 && attr3 <= attrLimit
         && totalAttr <= totalAttrLimit
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    }

    handleChange = ({ target }) => {
      const { name, type } = target;
      const value = type !== 'checkbox' ? target.value : target.checked;
      this.setState({
        [name]: value,
      }, this.handleSaveButton);
    }

    clearFrom = () => {
      this.setState(() => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }));
    }

     onSaveButtonClick = (event) => {
       event.preventDefault();
       const { cardName, cardDescription, cardAttr1,
         cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
       } = this.state;
       const newCard = { cardName,
         cardDescription,
         cardAttr1,
         cardAttr2,
         cardAttr3,
         cardImage,
         cardRare,
         cardTrunfo,
       };
       if (newCard.cardTrunfo === true) {
         this.setState(() => ({
           hasTrunfo: true,
         }));
       }
       this.setState((prevState) => ({
         cardDeck: [newCard, ...prevState.cardDeck],
       }), this.clearFrom);
     }

     trunfoCheck = () => {
       const { trunfo } = this.state;
       if (trunfo === true) {
         this.setState({ hasTrunfo: true });
       }
     }

     render() {
       const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
         cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
       } = this.state;

       return (
         <main>
           <h1>Tryunfo</h1>
           <div className="mainCards">
             <Form
               cardName={ cardName }
               cardDescription={ cardDescription }
               cardAttr1={ cardAttr1 }
               cardAttr2={ cardAttr2 }
               cardAttr3={ cardAttr3 }
               cardImage={ cardImage }
               cardRare={ cardRare }
               cardTrunfo={ cardTrunfo }
               hasTrunfo={ hasTrunfo }
               onInputChange={ this.handleChange }
               isSaveButtonDisabled={ isSaveButtonDisabled }
               onSaveButtonClick={ this.onSaveButtonClick }
             />
             <Card
               cardName={ cardName }
               cardDescription={ cardDescription }
               cardAttr1={ cardAttr1 }
               cardAttr2={ cardAttr2 }
               cardAttr3={ cardAttr3 }
               cardImage={ cardImage }
               cardRare={ cardRare }
               cardTrunfo={ cardTrunfo }
             />
           </div>
         </main>
       );
     }
}

export default App;
