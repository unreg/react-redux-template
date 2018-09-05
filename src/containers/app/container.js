import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../store'
import { setAppCurrentTime } from './actions';


class App extends Component {

  componentDidMount = () => {
    this.timer = setInterval(() => {
      store.dispatch(setAppCurrentTime(new Date()))
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  render() {
    const { currentTime } = this.props.data;

    return (
      <div>{`${currentTime}`}</div>
    );
  }
}

const mapStateProps = store => ({
  data: store.AppState.AppData
});


export default connect(mapStateProps)(App);
