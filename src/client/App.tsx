import * as React from "react";
import SimpleComponent from "./components/SimpleComponent";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <label>This is your app!</label>
        <SimpleComponent />
      </div>
    );
  }
}
