import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css'
import { useState } from 'react';
import { isInputElement } from 'react-router-dom/dist/dom';

function App() {
  
const[principle,setPrinciple]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[interest,setInterest]=useState(0)
const[isPrinciple,setIsPrinciple]=useState(true)
const[isRate,setIsRate]=useState(true)
const[isYear,setIsYear]=useState(true)
const Validate=(e)=>{
  const name = e. target.name
  const value = e.target.value

   

 /*  console.log(name,value);
  console.log(value.match('/^[0-9]*$/'));
 */
 if(value.match('/^[0-9]*$/')){
  if(name=='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
  }
  else if (name=='rate'){
    setRate(value)
    setIsRate(true)
  }
  else{
    setYear(value)
    setIsYear(true)
  }
 }
 else{
  if(name=='principle'){
    setPrinciple(value)
    setIsPrinciple(false)
  }
  else if(name=='rate'){
    setRate(value)
    setIsRate(false)
  }
  else{
    setYear(value)
    setIsYear(false)
  }
 }
 
 }

 const handlereset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
 }

 const handleCalculate=(e)=>{
  e.preventDefault(){
    if(principle="" || rate="" || year=""){
      alert("please fill the form completely ")

    }
    else{
      setInterest((principle*rate*year)/100)
    }
  }
 }
  



  return (
    <>
      <div style={{backgroundColor:'black',height:'190vh'}} className='d-flex justify-content-center align-item-center '>
        <div style={{backgroundColor:'white',width:'500px',height:'115vh'}} className='p-5 rounded mt-4'>
          <h1>Simple Interest App</h1>
         <p> calculate Your Simple Interest Easily</p>
        
          <div  style={{height:'150px', backgroundColor:'orange'}} className='p-3 mt-5 rounded shadow d-flex justify-content-center align-item-center flex-column'>
            <h1 className='fw-bold text-center'>₹ {interest}</h1>
           
            <p className='text-center'>Total Simple Interest</p>
              
          </div>
          <form className='mt-4' onSubmit={handleCalculate}>
            <div className="mb-3">
            <TextField id="outlined-basic" label="₹ Principal amount"  value={principle || ""}    variant="outlined" className='w-100' onChange={()=>Validate(e)} name='principle' />
              {!isPrinciple &&
              <p className='text-danger'>Invalid input</p>
              }
            </div>
            <div className="mb-3">
            <TextField id="outlined-basic" label="Rate of interest (p.a)%" value={rate || ""} variant="outlined"className='w-100' onChange={()=>Validate(e)} name='rate' />
              {!isRate &&
            <p className='text-danger'>Invalid input</p>
            }
            </div>
            <div className="mb-3">
            <TextField id="outlined-basic" label="year(Yr)" value={year || ""}   variant="outlined" className='w-100' onChange={()=>Validate(e)} name='year' />
              {!isYear &&
            <p className='text-danger'>Invalid input</p>
            }
            </div>
            <div className="mb-3 d-flex justify-content-between">
            <Button variant="contained" color='success' style={{width:'190px',padding:'15px'}} disabled={isPrinciple && isRate && isYear?'false' :'true'} type='submit' >Calculate</Button>
            <Button variant="outlined"color='primary'  style={{width:'190px',padding:'15px'}} onClick={handlereset}  >Reset</Button>
            
            </div>
              
          </form>
        </div>

      </div>

             
     </>     
  )
}

export default App
