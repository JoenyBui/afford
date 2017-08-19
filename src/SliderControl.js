/**
 * Created by joeny on 8/18/17.
 */
import React, {Component} from 'react';
import Slider from 'material-ui/Slider'

import './SliderControl.css';

class SliderControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    //  This binding is necessary to make 'this' work in the callback
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange = (event, value) => {
    this.setState({value: value})
  };

  render() {
    return (
      <div>
        <p>
          <span>{this.props.name}</span>
          <span>{': '}</span>
          <span>{this.props.prefix}</span>
          <span>{this.state.value}</span>
          <span>{this.props.suffix}</span>
        </p>
        <Slider value={this.state.value}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                onChange={this.handleSliderChange}/>
      </div>
    )
  }
}

export default SliderControl;