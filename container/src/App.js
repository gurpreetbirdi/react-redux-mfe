import React from "react";

import ChildApp from "./components/ChildApp";

// const App = () => {
//   return (
//     <>
//       <h1>Casa App as container / Stitch apps here</h1>
//       <div id="counter">{/* <ChildApp appName="counter" /> */}</div>
//       {/* <hr />
//       <h1>Customer story / Task App</h1>
//       <div id="todo"></div> */}
//     </>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Casa App as container / Stitch apps here</h1>
        <div id="counter">
          <ChildApp appName="counter" />
        </div>
      </div>
    );
  }
}

export default App;
