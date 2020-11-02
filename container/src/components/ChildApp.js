import React from "react";

const { loadApp } = window;

const loadComponent = (name) => {
  const componentList = loadApp(name) ? loadApp(name).component : null;
  console.log("componentList", componentList);
  return componentList;
};

const ChildApp = (props) => {
  console.log("props.appName", props.appName);
  const component = loadComponent(props.appName);
  const ChildAppComponent = component == null ? null : component.app;
  console.log("ChildAppComponent", ChildAppComponent);
  if (ChildAppComponent === null) {
    return (
      <div>
        <strong>App does not exist</strong>
      </div>
    );
  }
  return <ChildAppComponent />;
};

export default ChildApp;
