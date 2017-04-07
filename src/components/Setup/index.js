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
        console.log('hiiiii');
        this.setState({status: 'login-button loading'});
      }else{
        console.log('hooooo');
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
       <Title>
       </Title>


       <div className="verifyScreenWarning">
        Please verify the Setup screen on your picasso.
       </div>
       <Button text="Begin Setup" className={this.state.status} handleClick={this.handleClick}></Button>
       <div>
        Don't see the Setup screen?
       </div>
       <div>
        Cancel
       </div>
      </div>
    );
  }
}

export default Setup;