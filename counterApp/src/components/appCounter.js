import React from "react";
import { GlobalStore } from "redux-micro-frontend";

import { Counter } from "./counter";
import { CounterReducer } from "../reducers/counterReducer";
import {
  IncrementLocalCounter,
  DecrementLocalCounter,
} from "../actions/local/local.actions";
import {
  IncrementGlobalCounter,
  DecrementGlobalCounter,
} from "../actions/global/global.actions";
import { ACTION_TYPES } from "../actions/actionTypes";

export class AppCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      global: 0,
      todo: 0,
    };

    this.incrementLocalCounter = this.incrementLocalCounter.bind(this);
    this.decrementLocalCounter = this.decrementLocalCounter.bind(this);
    this.incrementGlobalCounter = this.incrementGlobalCounter.bind(this);
    this.decrementGlobalCounter = this.decrementGlobalCounter.bind(this);
    this.updateState = this.updateState.bind(this);

    /** get global store */
    this.globalStore = GlobalStore.Get(false);

    this.store = this.globalStore.CreateStore("CounterApp", CounterReducer, []);

    this.globalStore.RegisterGlobalActions("CounterApp", [
      ACTION_TYPES.INCREMENT_GLOBAL,
      ACTION_TYPES.DECREMENT_GLOBAL,
      ACTION_TYPES.ADD_TODO,
      ACTION_TYPES.REMOVE_TODO,
    ]);

    this.globalStore.SubscribeToGlobalState("CounterApp", this.updateState);
  }

  incrementLocalCounter() {
    this.globalStore.DispatchAction("CounterApp", IncrementLocalCounter());
  }

  decrementLocalCounter() {
    this.globalStore.DispatchAction("CounterApp", DecrementLocalCounter());
  }

  incrementGlobalCounter() {
    this.globalStore.DispatchAction("CounterApp", IncrementGlobalCounter());
  }

  decrementGlobalCounter() {
    this.globalStore.DispatchAction("CounterApp", DecrementGlobalCounter());
  }

  updateState(globalState) {
    this.setState({
      local: globalState.CounterApp.local,
      global: globalState.CounterApp.global,
      todo: globalState.CounterApp.todo,
    });
  }

  render() {
    return (
      <div>
        <Counter
          count={this.state.global}
          header="Global Counter"
          increment={this.incrementGlobalCounter}
          decrement={this.decrementGlobalCounter}
        ></Counter>
        <Counter
          count={this.state.local}
          header="Local Counter"
          increment={this.incrementLocalCounter}
          decrement={this.decrementLocalCounter}
        ></Counter>
        <h2>Todo Counter</h2>
        <span>{this.state.todo}</span>
      </div>
    );
  }
}
