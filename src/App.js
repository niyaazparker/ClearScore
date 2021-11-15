import React from 'react';
import './App.scss';
import Users from './components/cards'



function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="header_prime">Insights</h1>
        <Users></Users>
      </div>
    </div>
  );
}

/*   
function App() {
  return (
   <Card
    track_status="Off track"
    impact_status="Medium impact"
    header="Header"
    description="Body text"
   />
  );
}

function Card(props){
  return (
    <div className="card">
      <div className="cardheader">
        <div className="trackstatus">{props.track_status}</div>
        <div className="impactstatus">{props.impact_status}</div>
      </div>
      <div className="cardbody">
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
*/
export default App;
