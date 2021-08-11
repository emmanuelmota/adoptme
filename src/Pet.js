import React from 'react';
// const Pet = () => {
//   return React.createElement("div", {}, [
// React.createElement("h2", {}, "Nacho"),
// React.createElement("h3", {}, "Krankers"),
// React.createElement("h3", {}, "Poochi"),
//   ])
// }

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  )
}

export default Pet;