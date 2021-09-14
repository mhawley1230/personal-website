import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <h1 id="text">Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
