import React from 'react'
import { AnketContext, CollContext, HeaderContext, SpecContext } from '../App';
import Header from '../components/header'
import Specs from '../components/specs'

function Spec() {
    const {anketValue, setAnketValue} = React.useContext(AnketContext);
    const {collValue, setCollValue} = React.useContext(CollContext);
    const {specValue, setSpecValue} = React.useContext(SpecContext);
    
    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
    setHeaderValue(2)
    
    let [specsItem, SetSpecsItem]  = React.useState([]);
    function qwe() {
       console.log(collValue[0])
       console.log(collValue[1])
      
        console.log("Колледжи "+collValue)
        console.log("Почта "+anketValue.email)
        console.log("Специальности "+specValue)

      
    }
  
   
    React.useEffect( ()=> {
        SetSpecsItem([{"id": 1, "collegeId": 1,"name": "Lorem.","localId": "null"},{"id": 2, "collegeId": 2,"name": "null","localId": "null"},{"id": 2, "collegeId": 2,"name": "qqwe","localId": "null"}])
        fetch("GetByColleges/GetByCollegesId?ids="+"["+collValue+"]").then((res)=>{
          return res.json();
         }).then( (json)=>{
            SetSpecsItem(json)
         });
     },[])
    

     const handleChange = e => {

        if (e.target.checked === true) {
            setSpecValue([...specValue, Number(e.target.value)]);
        } else {
          const selectedAcc = specValue.filter(a => {
            if (a === Number(e.target.value)) return false;
            return true;
          });
          setSpecValue([...selectedAcc]);
        }
      };

  return (
  
  <div class="pt-6">
 
     
    
     {
     
     specsItem.map((obj)=>(<>
   
    <div className="col-12 pt-2 " key={obj.id}>
    
   
    <div class="card" >
    <div class="card-body">
        <div className="row" style={{alignItems:"center"}}>
  <label class="custom-control-label col-6" for="customCheck1">{obj.name}</label>
  <div class="form-check mb-1 col-5"> 
    <input
         class="custom-control-input col-2"
         id="collId"
         name="collId"
         type="checkbox"
         onChange={e =>handleChange(e)}
         value={obj.id}
                checked={
                    specValue.lastIndexOf(Number(obj.id)) >= 0 ? true : false
                }
        //  onChange={formik.handleChange}
        //  value={()=>formik.values.collId(id)}
        
         placeholder=''
             />
       <label  
            className='form-check-label col-10'
            for="isFirstEducation"
            >
                Выбрать специальность </label >
        </div>
        </div>
</div>  </div>
        
   
    
 
    
    </div>
    </> ))
    
    }

    <div className="container pt-4">
<button onClick={qwe} type="submit" class="btn btn-primary btn-block mb-4 col-4 offset-4">Сформировать заявление</button> 
</div>
    
    </div>)
}

export default Spec

