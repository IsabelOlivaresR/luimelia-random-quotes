import React from 'react';
import Landing from './Landing';
import AmarQuote from './AmarQuote';
import LuimeliaQuote from './LuimeliaQuote';
import AmarData from '../data/data.json';
import LuimeliaData from '../data/dataLuimelia.json';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AmarData: AmarData,
      LuimeliaData: LuimeliaData,
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/amarquote'>
            <AmarQuote data={this.state.AmarData} />
          </Route>
          <Route path='/luimeliaquote'>
            <LuimeliaQuote data={this.state.LuimeliaData} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
