import React from 'react'
import { AnketContext, CollContext, HeaderContext, SpecContext } from '../App';
import Footer from '../components/footer';
import Header from '../components/header'
import Specs from '../components/specs'

function Spec() {
    const {anketValue, setAnketValue} = React.useContext(AnketContext);
    const {collValue, setCollValue} = React.useContext(CollContext);
    const {specValue, setSpecValue} = React.useContext(SpecContext);
    
    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
    setHeaderValue(2)
    
    let [specsItem, SetSpecsItem]  = React.useState([]);

    console.log(specsItem)
    function qwe() {
       console.log(collValue[0])
       console.log(collValue[1])
      
        console.log("Колледжи "+collValue)
        console.log("Почта "+anketValue.email)
        console.log("Специальности "+specValue)

          
            fetch('https://81e5-178-176-231-161.eu.ngrok.io/PdfCreator/DownloadFiles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                 
                },
                body: JSON.stringify({
                    "anket":[anketValue],
                    "colleges": [collValue],
                    "specialties": [specValue]
                }),
              });
    }
  
  
    React.useEffect( ()=> {
       
        fetch("https://81e5-178-176-231-161.eu.ngrok.io/GetByColleges/GetByCollegesId?ids="+"["+collValue+"]").then((res)=>{
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

  return (<>
  
 
  
  <div class="pt-6">
  <Header/>
     
    
     {specsItem.map((obj)=>(
   
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
     
       
        
         placeholder=''
             />
       <label  
            className='form-check-label col-10'
            for="isFirstEducation"
            >
                Выбрать специальность </label >
        </div>
        </div>
</div>  

</div>
        
   
    
 
    
    </div>
     ))
    
    }

    <div className="container pt-4">
<button onClick={qwe} type="submit" class="btn btn-primary btn-block mb-4 col-4 offset-4">Сформировать заявление</button> 
</div>
    
    </div>
    <div className="container fixed-bottom">
    <Footer/>
    </div>
    </>)
    
}

export default Spec

