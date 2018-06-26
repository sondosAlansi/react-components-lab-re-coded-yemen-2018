import React from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
class OlderCoaster extends React.Component {

  // this function should return the JSX we want the DOM to render
  render() {
    return (
      <div class="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>
    )
  }

}

class InFrontOfYou extends React.Component {
  // your code here
  render() {
    return(
      <div>
        <p>You shouldn&#x27;t look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}

class ButcherShop extends React.Component {
  // your code here
  render() {
    return(
      <div class="butcher-shop">
        <p>Hello! We have the following products for sale today:</p>
        <ul>
          {BUTCHER_PRODUCTS.map(product => <li>{product}</li>)}
        </ul>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster />
        <InFrontOfYou />
        <ButcherShop />
      </div>
    )
  }
}


//This is where all of our components get rendered to the DOM
ReactDOM.render(<App />, document.getElementById('root'))





// For tests only
export {
  OlderCoaster,
  InFrontOfYou,
  ButcherShop,
  App
}
