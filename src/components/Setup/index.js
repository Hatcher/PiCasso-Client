import React, {Component} from 'react';
import classnames from 'classnames';

import { Title, Button } from '../Common';
import './style.css';

class Setup extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);
    this.state = {
      status: 'login-button'
    };
    this.handleClick = () => {
      if(this.state.status === 'login-button'){
        this.setState({status: 'login-button loading'});
      }else{
        this.setState(
          {status: 'login-button'}
        )
      }
    }
  }

  handleClick(){

  }

  render() {
    //const { className, ...props } = this.props;
    return (
      <div className="top">
       <Title></Title>
       <div className="verifyScreenWarning">
        Please verify the screen on your PiCasso is similar to the one below.
       </div>
       <div className="expectedScreen">
          <div> Welcome </div>
          <div> to </div>
          <div> PiCasso </div>
      </div>
      <div className="buttonWrapper">
       <Button text="Begin Setup" to="/Setup2" className={this.state.status} handleClick={this.handleClick} ></Button>
       </div>
       <div className="linkWrapper">
        <a href="">Don't see the Setup screen?</a>
       </div>
       <div className="linkWrapper">
        <a href="">Cancel</a>
       </div>
      </div>
    );
  }
}

export default Setup;
