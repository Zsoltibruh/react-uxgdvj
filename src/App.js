import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://restcountries.com/v3.1/all');
      let data = await response.json();
      this.setState({ countries: data });
    } catch {
      <div>
        <h1>Sajnos az idő megállt</h1>
      </div>;
    }
  }

  render() {
    return (
      <div>
        {this.state.countries.length > 0
          ? this.state.countries.map((country) => {
              return <Country country={country} />;
            })
          : 'Bread 👍'}
      </div>
    );
  }
}

function Country(props) {
  return (
    <div>
      Ország: {props.country.name.official}
      <img src={props.country.flags.png} height="20px" />
    </div>
  );
}
