/**
 * Created by joeny on 8/18/17.
 */
import React, {Component} from 'react';
import Slider from 'material-ui/Slider'


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
        <Slider value={this.state.value}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                onChange={this.handleSliderChange}/>
        <p>
          <span>{this.props.name}</span>
          <span>{': '}</span>
          <span>{this.state.value}</span>
        </p>
      </div>
    )
  }
}

export default SliderControl;