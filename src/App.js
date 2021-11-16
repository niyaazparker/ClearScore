import React from 'react';
import './App.scss';
import axios from 'axios'

axios.get('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714')
  .then(function(response){
    console.log(response.data); 
  
  let personal = response.data.personal
  let accounts = response.data.accounts
  let user_data = {}
  
  
  if (personal.publicInfo.courtAndInsolvencies.length > 0) {
    user_data.off_track = "Off Track"
    document.getElementById('clear_user_offtrack').innerHTML = user_data.off_track;
    
  } else {
    user_data.off_track = "On Track"
    document.getElementById('clear_user_offtrack').innerHTML = user_data.off_track;
    document.getElementById('elect_offtrack').classList.add("greenpill")
  }
  
  if (personal.electoralRoll.current = true) {
    user_data.off_track = "On Track"
    document.getElementById('elect_offtrack').innerHTML = user_data.off_track;
    document.getElementById('elect_offtrack').classList.add("greenpill")
  } else {
    user_data.off_track = "off Track"
    document.getElementById('elect_offtrack').innerHTML = user_data.off_track 
  }
  
    for (let x = 0; x < accounts.length; x++) {
      console.log(accounts[x].overview.balance)
      console.log(accounts[x].overview.limit)
      // Need to check if overview.limit exists 
      // Need to check if balance exists
      if (accounts[x].overview.limit !== undefined){

        if (accounts[x].overview.balance.amount > accounts[x].overview.limit.amount) {
          user_data.off_track = "On Track"
          
          document.getElementById('credit_offtrack').innerHTML = user_data.off_track;
          document.getElementById('elect_offtrack').classList.add("greenpill")
        } else {
          user_data.off_track = "off Track"
          
          document.getElementById('credit_offtrack').innerHTML = user_data.off_track
        }

      }
      

    
    }
  
    console.log(response.status); // ex.: 200
  });  

  
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="header_prime">Insights</h1>
        
     
        <div id="axios-container" className="row">

          <div className="card" >
                <div className="status_parent">
                    <div id="elect_offtrack" className="pill trackstatus offtrack"></div>
                    <div className="pill impactstatus">Medium Impact</div>
                </div>
                <h2>Electoral roll</h2>
                <p>Being on the electoral roll can improve your score</p>
                <div className="pillfooter"><div className="pill impactstatus impactstatusmobile">Medium Impact</div></div>
            </div>

            <div className="card" >
                <div className="status_parent">
                    <div id="clear_user_offtrack" className="pill trackstatus offtrack" ></div>
                    <div className="pill impactstatus">High Impact</div>
                </div>
                <h2>Public information</h2>
                <p>Bankruptcies and individual voluntary arrangements can damage your score</p>
                <div className="pillfooter"><div className="pill impactstatus impactstatusmobile">High Impact</div></div>
            </div>

            <div className="card" >
                <div className="status_parent">
                    <div id="credit_offtrack" className="pill trackstatus offtrack"></div>
                    <div className="pill impactstatus">High Impact</div>
                </div>
                <h2>Credit utilisation </h2>
                <p>Using more than 50% of your available credit can damage your score</p>
                <div className="pillfooter"><div className="pill impactstatus impactstatusmobile">Medium Impact</div></div>
               
            </div>
        </div>
        
 
   

      </div>
    </div>
  );
}





  



export default App;
