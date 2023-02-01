import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Darrel',
          id: '23rrgq34g',
        },
        {
          name: 'Levi',
          id: 'wergq34',
        },
        {
          name: 'Tilly',
          id: 'aureghvq35',
        },
        {
          name: 'Sam',
          id: 'afgbvhujq39it5',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
