import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      buttonValidate } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            name="name"
            id="name"
            data-testid="name-input"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            id="description"
            data-testid="description-input"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          />
        </label>

        <label htmlFor="rare">
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="rare"
            id="rare"
            onKeyUp={ buttonValidate }
            onClick={ buttonValidate }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          {hasTrunfo === false ? <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            name="trunfo"
            id="trunfo"
            data-testid="trunfo-input"
          /> : <p> Você já tem um Super Trunfo em seu baralho</p>}
        </label>

        <button
          value={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  buttonValidate: PropTypes.func.isRequired,
};

export default Form;
