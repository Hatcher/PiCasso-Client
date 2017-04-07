import React, {Component} from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import './style.css';

export default class Button extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props){
    super(props);
    this.state = {status: 'login-button'};
    this.handleClick = () => {
      props.handleClick();
    }
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick} className={this.props.className}>
        <Link to={""+this.props.to}>
        {this.props.text}
        </Link>
        </button>
      </div>
    );
  }
}
