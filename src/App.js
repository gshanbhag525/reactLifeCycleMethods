import logo from './logo.svg';
import './App.css';
import React from 'react';
import Lifecycles from './Components/LifeCycles/lifecycles.component'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showChild: true,
      text: ''
    };
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <button onClick={() => 
            this.setState(state => ({
              showChild: !state.showChild 
            }))
          }
          >
            Toggle Lifecycles
          </button>
  
          <button onClick= {() => 
            this.setState(
              state => ({
                text: state.text  + '_hello' 
              })
            )}          
          >update text
          </button>
          <button onClick= {() => 
            this.setState(
              state => ({
                text: '' 
              })
            )}
            >Clear text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text}/> : null}
        </header>
      </div>
    );
  }
}

export default App;
