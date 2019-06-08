import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AchtKeuzeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { huidigAntwoord: "" };
  }
  handleSubmitForm = e => {
    e.preventDefault();
    // Hieronder halen we het antwoord uit de state om deze te versturen.
    const antwoord = this.state.huidigAntwoord;
    console.log(antwoord);
    this.props.history.push({
      pathname: "/projectie",
      antwoord: this.state.huidigAntwoord
    });
  };

  handleRadioChange = e => {
    // Elke keer het antwoord verandert wordt deze aangepast in de state.
    this.setState({
      huidigAntwoord: e.currentTarget.value
    });
  };

  render() {
    return (
      <>
        <p>De gamemaster gaf je 8 opties</p>
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="radio"
            name="naam"
            value="optie 1"
            checked={this.state.huidigAntwoord === "optie 1"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 1"}
          <input
            type="radio"
            name="naam"
            value="optie 2"
            checked={this.state.huidigAntwoord === "optie 2"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 2"}
          <input
            type="radio"
            name="naam"
            value="optie 3"
            checked={this.state.huidigAntwoord === "optie 3"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 3"}
          <input
            type="radio"
            name="naam"
            value="optie 4"
            checked={this.state.huidigAntwoord === "optie 4"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 4"}
          <input
            type="radio"
            name="naam"
            value="optie 5"
            checked={this.state.huidigAntwoord === "optie 5"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 5"}
          <input
            type="radio"
            name="naam"
            value="optie 6"
            checked={this.state.huidigAntwoord === "optie 6"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 6"}
          <input
            type="radio"
            name="naam"
            value="optie 7"
            checked={this.state.huidigAntwoord === "optie 7"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 7"}
          <input
            type="radio"
            name="naam"
            value="optie 8"
            checked={this.state.huidigAntwoord === "optie 8"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 8"}
          <input type="submit" value="Antwoorden" />
        </form>
      </>
    );
  }
}

export default withRouter(AchtKeuzeInput);
