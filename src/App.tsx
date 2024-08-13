import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

interface AppState {
  currentScreen: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentScreen: 'home'
    };
  }

  handleNavigation = (screen: string) => {
    this.setState({ currentScreen: screen });
  }

  render() {
    const { currentScreen } = this.state;

    return (
      <div className="App">
        <Header onNavigate={this.handleNavigation} />
        {currentScreen === 'home' && <Dashboard />}
        {currentScreen === 'downloads' && <div>Downloads Screen (To be implemented)</div>}
      </div>
    );
  }
}

export default App;
