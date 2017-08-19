/**
 * Created by joeny on 8/18/17.
 */
import React, {Component} from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';

import {styles} from './ConfigStyles';
import SlideControl from './SliderControl';

// import Line from '/react-chartjs';

import './TabsControl.css';


var LineChart = require("react-chartjs").Line;
var PieChart = require("react-chartjs").Pie;
var BarChart = require("react-chartjs").Bar;


class HomeCalculatorTabsControl extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //  This binding is necessary to make 'this' work in the callback
    this.handleActive = this.handleActive.bind(this);

    this.update = this.update.bind(this);
  }

  update(event, value) {
    console.log('Update at home calculator');

    this.props.update(event, value);
  }

  handleActive(event, value) {

  }

  render() {
    const model = this.props.model;

    return <Tabs>
      <Tab label="About Me">
        <div>
          <h2 style={styles.headline}>What's your financial situation?</h2>

          <SlideControl id='spacing'
                        name='Spacing Available'
                        onChangeRefresh={this.update}
                        min={0}
                        max={100000}
                        step={500}
                        value={model.savings}
                        prefix={'$'}/>

          <SlideControl name={'Gift Money'}
                        min={0}
                        max={40000}
                        step={500}
                        prefix={'$'}
                        value={model.gifts}/>

          <SlideControl name={'Current Monthly Rent'}
                        min={0}
                        max={10000}
                        step={100}
                        value={1000}
                        prefix={'$'}/>

          <SlideControl name={'Monthly Disposable Income'}
                        min={0}
                        max={15000}
                        step={1000}
                        value={100}
                        prefix={'$'}/>
        </div>
      </Tab>

      <Tab label="My Mortgage Plan">
        <div>
          <h2 style={styles.headline}>What kind of mortgage do you want to explore?</h2>

          <SlideControl name={'Mortgage Length'}
                        min={5}
                        max={30}
                        step={5}
                        value={30}
                        suffix={' years'}/>

          <SlideControl name={'Percent Down'}
                        min={5}
                        max={100}
                        step={5}
                        value={5}
                        suffix={'%'}/>

          <SlideControl name={'House Price'}
                        min={50}
                        max={2000}
                        step={5}
                        value={30}
                        suffix={' years'}/>
        </div>
      </Tab>

      <Tab label="Assumptions">
        <div>
          <h2 style={styles.headline}>If you want to get more complicated and advanced, explore these dials.</h2>

          <SlideControl name={'Mortgage Rate'}
                        min={0.25}
                        max={20.0}
                        step={0.25}
                        value={4.25}
                        suffix={'%'}/>

          <SlideControl name={'Closing Cost'}
                        min={0}
                        max={10000}
                        step={500}
                        value={5000}
                        prefix={'$'}/>

          <SlideControl name={'Property Tax Rate'}
                        min={0.0}
                        max={5.0}
                        step={0.2}
                        value={2.0}
                        suffix={'%'}/>

          <SlideControl name={'HOA Monthly'}
                        min={0}
                        max={1500}
                        step={25}
                        value={150}
                        prefix={'$'}/>

          <SlideControl name={'Insurance Annual'}
                        min={0}
                        max={3000}
                        step={50}
                        value={1000}
                        prefix={'$'}/>

          <SlideControl name={'Maintenance Annual'}
                        min={0}
                        max={10000}
                        step={500}
                        value={2500}
                        prefix={'$'}/>
        </div>
      </Tab>

      <Tab
        label="onActive"
        data-route="/home"
        onActive={this.handleActive}>
        <div>
          <h2 style={styles.headline}>Results</h2>
          <p>
            This is a third example tab.
          </p>
          <BarChart data={model.barData} options={model.barOptions}/>
          <PieChart data={model.pieData} options={model.pieOptions} width="600" height="250"/>

          <LineChart data={model.chartData} width="600" height="250"/>
        </div>
      </Tab>
    </Tabs>
  }
}

export default HomeCalculatorTabsControl;
