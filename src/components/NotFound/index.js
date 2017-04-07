import React, {Component} from 'react';

import classnames from 'classnames';

import Title from '../Common/Title/Title';
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
        The Page you are looking for cannot be found.
      </div>
    );
  }
}

export default Setup3;