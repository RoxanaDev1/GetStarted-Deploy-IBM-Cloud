import * as React from "react";
import { CSSProperties } from "react";

export default class SimpleComponent extends React.Component<{}, {}> {
  private simpleComponentStyle: CSSProperties = {
    height: "100vh"
  };

  render() {
    return (
      <div style={this.simpleComponentStyle}>
        <iframe
          src="https://giphy.com/embed/bbSrmJPHG8JbaGRZMZ"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}
