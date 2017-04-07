import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import classnames from 'classnames';

import Title from '../Common/Title/Title';
import Button from '../Common/Button/Button';
import './style.css';

class Setup3 extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  uploadFile(files){
    console.log('uploadFile: ')
  }

  render() {
    return (
      <div>
        <Title></Title>
        <div className="centerText"> Upload images </div>
        <div className="dropzoneContainer">
        <Dropzone className="imageBox" onDrop={this.uploadFile.bind(this)}>
          <div className="circle">
            <div className="uploadButton">
              <div className="plusSign">
                +
              </div>
            </div>
          </div>
        </Dropzone>
        </div>
        <Button text="Done"></Button>
      </div>
    );
  }
}

export default Setup3;