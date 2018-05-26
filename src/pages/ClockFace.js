import React, { Component, version } from 'react'
import { render } from 'react-dom'
import { Page, Toolbar, Button, Tab, Tabbar, BottomToolbar, Switch, BackButton } from 'react-onsenui'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import FirstPage from './FirstPage'

export default connect({
    someState: state`settings.someState`,
    toggleSomeState: signal`settings.toggleSomeState`,
    clickButtonOnPageOne: signal`navigation.clickButtonOnPageOne`,
    clickPush: signal`navigation.clickPush`,
    clickPop: signal`navigation.clickPop`
  }, class ClockFace extends Component {

    componentWillMount() {


      if (this.vnode) {
        this.props = this.vnode.props
      }
    }
    componentDidMount() {

      const secondHand = document.querySelector('.second-hand');
      const minsHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');

      function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      }

      setInterval(setDate, 1000);

      setDate();
    }

    render() {
      return (
        <Page>
          <div className="clock">
            <div className="outer-clock-face">
              <div className="marking marking-one"></div>
              <div className="marking marking-two"></div>
              <div className="marking marking-three"></div>
              <div className="marking marking-four"></div>
              <div className="inner-clock-face">
                <div className="hand hour-hand"></div>
                <div className="hand min-hand"></div>
                <div className="hand second-hand"></div>
              </div>
            </div>
          </div>
        </Page>
      )
    }
  }
)
