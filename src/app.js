
  const Pet = () => {
    return React.createElement("div", {}, [
React.createElement("h2", {}, "Nacho"),
React.createElement("h3", {}, "Krankers"),
React.createElement("h3", {}, "Poochi"),
    ])
  }

  const App = () => {
    return React.createElement (
      "div",
      {},
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
      ]
    );
  };
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
