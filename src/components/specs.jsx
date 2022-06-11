import React from 'react'
import { useFormik } from 'formik';
import { AnketContext, CollContext, HeaderContext, SpecContext } from '../App';
import { Routes, Route, Link } from 'react-router-dom';
function Specs({id,collegeId,name,localId}) {
    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
    setHeaderValue(2)
    const {specValue, setSpecValue} = React.useContext(SpecContext);

    
  return (
      <>
      
       <div className="container pt-6">
    <h1>{id}</h1>
    <h1>{collegeId}</h1>
    <h1>{name}</h1>
    <h1>{localId}</h1>
    <button onClick={()=>setSpecValue(id)} type="submit" class="btn btn-primary btn-block mb-4">Выбрать специальность</button> 
    </div>
    </>
  )
}

export default Specs


