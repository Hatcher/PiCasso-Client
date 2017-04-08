import React, {Component} from 'react';
import classnames from 'classnames';

import { Title, Button } from '../Common';
import './style.css';

class Setup2 extends Component {
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
       <form>
       <div className="inputRow">
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} name="name" placeholder="Name:"/>
        </label>
        </div>
        <div className="inputRow">
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} name="zipCode" placeholder="Zip Code:"/>
        </label>
        </div>
        <div>
        <label>
          <div className="formQuestion">Which holidays do you observe?</div>
          <div className="inputRow">
          <input type="radio" name="Christmas" id="Christmas" value={this.state.value} onChange={this.handleChange}/>
          <label for="Christmas">Christmas</label>
          </div>
          <div className="inputRow">
          <input type="radio" name="Hannukah" value={this.state.value} onChange={this.handleChange} />Hannukah
          </div>
          <div className="inputRow">
          <input type="radio" name="Halloween" value={this.state.value} onChange={this.handleChange} />Halloween
          </div>
          <div className="inputRow">
          <input type="radio" name="Thanksgiving" value={this.state.value} onChange={this.handleChange} />Thanksgiving
          </div>
        </label>
        <label>
          <div className="formQuestion">Do you have another question?</div>
          <div className="inputRow">
          <input type="radio" name="questonHold1" id="questonHold1" value={this.state.value} onChange={this.handleChange}/>
          <label for="questonHold1">No</label>
          </div>
          <div className="inputRow">
          <input type="radio" name="questionHold2" value={this.state.value} onChange={this.handleChange} />questionHold2
          </div>
          <div className="inputRow">
          <input type="radio" name="questionHold3" value={this.state.value} onChange={this.handleChange} />questionHold3
          </div>
        </label>
        </div>


        <Button text="Next" to="/Setup3" className={this.state.status} handleClick={this.handleClick} ><input type="submit" value="Submit" /></Button>
      </form>
      </div>
    );
  }
}

export default Setup2;
