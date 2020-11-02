import React from "react";
import { connect } from "react-redux";

// const ChildApp = (props) => {
//   const { loadApp } = window;

//   const loadComponent = (name) => {
//     const componentList = loadApp(name) ? loadApp(name).component : null;
//     console.log("componentList", componentList);
//     return componentList;
//   };

//   console.log("props.appName", props.appName);
//   const ChildAppComponent = loadComponent(props.appName);

//   if (!ChildAppComponent) {
//     return (
//       <div>
//         <strong>App does not exist</strong>
//       </div>
//     );
//   }
//   return <ChildAppComponent />;
// };

class ChildApp extends React.Component {
  constructor(props) {
    super(props);
    this.loadComponent = this.loadComponent.bind(this);
  }

  loadComponent(name) {
    const componentList = loadApp(name) ? loadApp(name).component : null;
    return componentList;
  }

  render() {
    const component = this.loadComponent(this.props.appName);
    const ChildAppRootComponent = component == null ? null : component;
    if (ChildAppRootComponent === null) {
      return (
        <div>
          <strong>App does not exist</strong>
        </div>
      );
    }
    return <ChildAppRootComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ count: state.counter.count });

export default connect(mapStateToProps)(ChildApp);
