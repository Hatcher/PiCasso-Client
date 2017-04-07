import React, {Component} from 'react';
import classnames from 'classnames';

import Title from '../Common/Title/Title';
import Button from '../Common/Button/Button';
import './style.css';

class Setup2 extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
        <label>Which holidays do you observe? 
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
        </div>

        
        <Button text="Next" value ="Submit" type="Submit"><input type="submit" value="Submit" /></Button>
      </form>
       
      
      </div>
    );
  }
}

export default Setup2;