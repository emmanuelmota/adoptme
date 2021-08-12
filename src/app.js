
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Pet from './Pet.js'

  // const App = () => {
  //   return React.createElement (
  //     "div",
  //     {},
  //     [
  //       React.createElement("h1", {}, "Adopt Me!"),
  //       React.createElement(Pet),
  //       React.createElement(Pet),
  //       React.createElement(Pet),
  //     ]
  //   );
  // };
  const App = () => {
    return (
            <div>
              <h1>Adopt Me!</h1>
              <Pet name="Luna" animal = "Dog" breed = "Bird" />
              <Pet name="Pepper" animal = "Bird" breed = "Havanese" />
              <Pet name="Nachito" animal = "Dog" breed = "Havanese" />
          </div>
    )
  };

  ReactDOM.render(React.createElement(App), document.getElementById('root'));
