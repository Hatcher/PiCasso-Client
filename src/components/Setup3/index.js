import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import classnames from 'classnames';

import { Title, Button } from '../Common';
import './style.css';

class Setup3 extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '', status: 'login-button'};
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

  uploadFile(files){
    console.log('uploadFile: ')
  }

  render() {
    return (
      <div>
        <Title></Title>
        <div className="dropzoneContainer">
        <Dropzone className="imageBox" onDrop={this.uploadFile.bind(this)}>
          <div className="centerText"> Upload images here</div>
          <div className="circle">
            <div className="uploadButton">
              <div className="plusSign">
                +
              </div>
            </div>
          </div>
        </Dropzone>
        </div>
        <div className="buttonWrapper">
        <Button text="Complete Setup" to="/Settings" className={this.state.status} handleClick={this.handleClick} ></Button>
        </div>
    </div>
    );
  }
}

export default Setup3;
