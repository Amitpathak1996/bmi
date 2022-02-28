import React,{useState} from 'react';
import './App.css';

export default function App() {
  const[info,setinfo]=useState('')
  const [weight,setweight]=useState();
  const [height,sethieght]=useState();
  const [val,setval]=useState()
  function Cal(){
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setval(val)
    if(val<18.5){
      setinfo("Under Weight")
    }
   else if(val > 18.5 && val <= 24.9){
     setinfo("Healthy")
   }
   else if(val > 24.9 && val < 30){
     setinfo("OverWeight")
   }
   else{
     setinfo("Obese")
   }


  }
  return (
    <div className="App">
      <h1 id="heading">BMI Calculator</h1>
      
    Weight  <input type="text" placeholder="Enter Your Weight in KG" value={weight} onChange={(e)=>{setweight(e.target.value)}}/>
    <br/>
    <br/>
    Height <input type="text" placeholder="Enter Your Height in CM" value={height} onChange={(e)=>{sethieght(e.target.value)}} />
    <br/>
    <br/>
    <button type="submit" id="btn" onClick={Cal}>Calculate</button>
    <p>Your BMI is: {val}</p>
    <p>{info}</p>
    </div>
  );
}


