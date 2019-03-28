import React from 'react';
// import {render} from 'react-dom';

const styles = {
  light: {
    padding: 20,
    backgroundColor: "white",
    color: "black"
  },
  dark: {
    padding: 20,
    backgroundColor: "black",
    color: "white"
  }
};

const withContext = Context => WrappedComponent => {
  class Connected extends React.PureComponent {
    render() {
      return (
        <Context.Consumer>
          {context => <WrappedComponent {...this.props} context={context} />}
        </Context.Consumer>
      )
    }
  }

  Connected.WrappedComponent = WrappedComponent;
  const wrappedCompName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  const consumerName = Context.Consumer.displayName || Context.Consumer.name || "ContextConsumer";
  Connected.displayName = `${wrappedCompName}(${consumerName})`;

  return Connected;
}

const ThemeContext = React.createContext('light');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme = () => {
    this.setState(({ theme }) => {
      theme: theme === "light" ? "dark" : 'light'
    });
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <AppBody onClick={this.toggleTheme} />
        </ThemeContext.Provider>
        <NestedPanel />
      </div>
    );
  }
}

let NestedPanel = ({ context: theme }) => {
  return <div style={styles[theme]}>theme</div>;
}

NestedPanel = withContext(ThemeContext)(NestedPanel);

class AppBody extends React.Component {
  render() {
    console.log("AppBody rendered");

    const { onClick } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <button style={styles[theme]} onClick={onClick}>

          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
