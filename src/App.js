import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
// Referencia (criar os estados): https://pt-br.reactjs.org/docs/lifting-state-up.html
  constructor() {
    super();
    // criando os estados
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // Para salvar o novo conjunto de cartas
      newCard: [],
    };

    // Permitindo o aceeso da funnção ao objeto this
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.buttonValidate = this.buttonValidate.bind(this);
  }

  // recebendo o valor apontado
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick(event) {
  // Salva ao clicar
    event.preventDefault();
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      newCard,
    } = this.state;

    const trunfoCard = trunfo === true;
    const card = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: '',
      trunfo: false,
      hasTrunfo: trunfoCard,
      isSaveButtonDisabled: true,
      newCard: newCard.concat(card),
    });
  }

  buttonValidate() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
    } = this.state;

    const maxSum = 210;
    const maxNumber = 90;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    const validateArrayComponents = [name, description, rare, image]
      .every((value) => value !== '');
    const validateSum = sum <= maxSum;
    const validateAttr = [Number(attr1), Number(attr2), Number(attr3)]
      .every((value) => value <= maxNumber && value >= 0);
    const validatesTogether = [validateArrayComponents, validateAttr, validateSum];
    const verifyValidatesTogether = validatesTogether
      .every((value) => value === true);

    if (verifyValidatesTogether) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      newCard,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          buttonValidate={ this.buttonValidate }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        {newCard.map((value, index) => (
          <Card
            key={ index }
            cardName={ value.name }
            cardDescription={ value.description }
            cardAttr1={ value.attr1 }
            cardAttr2={ value.attr2 }
            cardAttr3={ value.attr3 }
            cardImage={ value.image }
            cardRare={ value.rare }
            cardTrunfo={ value.trunfo }
          />
        ))}
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
