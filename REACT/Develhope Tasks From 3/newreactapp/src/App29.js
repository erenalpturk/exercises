import React, { Component, createContext } from 'react';

// Step 1: Create a LanguageContext
const LanguageContext = createContext();

class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(value) => (
          <div>
            <h2>Display Language:</h2>
            <p>{value.language}</p>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'English', // Default language
    };
  }

  handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    this.setState({ selectedLanguage });
  };

  render() {
    return (
      <div>
        <h1>Language Selector</h1>
        {/* Step 2: Wrap DisplayLanguage with LanguageContext.Provider */}
        <LanguageContext.Provider value={{ language: this.state.selectedLanguage }}>
          <DisplayLanguage />
        </LanguageContext.Provider>

        {/* Step 3: Add a select tag to change the language */}
        <select value={this.state.selectedLanguage} onChange={this.handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    );
  }
}

export default App;
