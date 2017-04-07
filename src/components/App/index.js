import React, {PropTypes, Component } from 'react';
import classnames from 'classnames';


import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h2>Welcome to PiCasso</h2>
        </div>
        <div>
          <h3> This view will display photos </h3>
        </div>
      </div>
    );
  }
}

export default App;
