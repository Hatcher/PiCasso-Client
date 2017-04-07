import React, {Component} from 'react';
import styles from './styles.css';

class Title extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    //const { className, ...props } = this.props;
    return (
    	<div className="title">
    		<h1 className="titleText">PiCasso</h1>
    	</div>
    )
  }
}

export default Title;