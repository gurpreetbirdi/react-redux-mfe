import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import {
  decrementCounter,
  incrementCounter,
} from "../actions/local/local.actions";
import { Counter } from "./Counter";

// const AppCounter = () => {
//   const dispatch = useDispatch();
//   const { count } = useSelector((state) => state.counter);

//   return (
//     <div>
//       <Counter
//         count={count}
//         header="Counter"
//         increment={() => dispatch(incrementCounter())}
//         decrement={() => dispatch(decrementCounter())}
//       ></Counter>
//     </div>
//   );
// };

class AppCounter extends React.Component {
  render() {
    return (
      <div>
        <Counter
          count={this.props.count}
          header="Counter"
          increment={() => {}}
          decrement={() => {}}
        ></Counter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ count: state.counter.count });

export default connect(mapStateToProps)(AppCounter);
