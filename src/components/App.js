import React from 'react';
import Landing from './Landing';
import Quote from './Quote';
import data from '../data/data.json';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/quote'>
            <Quote data={this.state.data} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
