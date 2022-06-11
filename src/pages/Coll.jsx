import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import { AnketContext, CollContext, HeaderContext } from '../App';
import Footer from '../components/footer';
function Coll() {
   
    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
    setHeaderValue(1)
    const {collValue, setCollValue} = React.useContext(CollContext);
    const {anketValue, setAnketValue} = React.useContext(AnketContext);
    let [CollItem, SetCollItem]  = React.useState([]);
    React.useEffect( ()=> {
        fetch("https://81e5-178-176-231-161.eu.ngrok.io/College/GetAll",{
        

        }).then((res)=>{
          return res.json();
         }).then( (json)=>{
            SetCollItem(json)
         });
     },[])
     function qwe() {
        console.log(collValue)
       
    }
   const zxc = false;
   
    const handleChange = e => {
       
        if (e.target.checked === true) {
            setCollValue([...collValue, Number(e.target.value)]);
           
            console.log(zxc)
        } else {
          
            console.log(zxc)
          const selectedAcc = collValue.filter(a => {
            if (a === Number(e.target.value)) return false;
            return true;
          });
          setCollValue([...selectedAcc]);
        }
      };



  return (
    
    <><Header/>
    
    <div className="container pt-6">
        <div className="row">
    {CollItem.map((obj)=>(<>
    <div className="col-4 pt-6">
    <div class={zxc==true?"card mb-3  border-primary":"card mb-3"} >
    <div class="card" >
  <img class="card-img-top" source={obj.photo} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Название: {obj.name}</h5>
    <p class="card-text">Описание: {obj.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item">Почта: {obj.email}</li>
    <li class="list-group-item">Телефон: {obj.phone}</li>
    <li class="list-group-item">Сайт: {obj.webSite}</li>
    <li class="list-group-item">Директор: {obj.directorName}</li>
    <li class="list-group-item">Общетие:  {obj.hasSocialBehavior==true?"Да":"Нет"}</li>
   
  </ul>
  <div class="card-body">
  <div class="form-check mb-3"> 
            
          
  <input
         id="collId"
         name="collId"
         type="checkbox"
         onChange={e =>handleChange(e)}
         value={obj.id}
                checked={
                  collValue.lastIndexOf(Number(obj.id)) >= 0 ? true : false
                }
        //  onChange={formik.handleChange}
        //  value={()=>formik.values.collId(id)}
         class="form-check-input"
         placeholder=''
             />
       <label 
            className='form-check-label'
            for="isFirstEducation"
            >
                Выбрать колледж </label >
  </div>
  </div>
</div>
</div>
  
 
    
    </div>
    </> ))}
    </div>
    </div>
    <div className="container pt-2">
<Link to="/spec"><button onClick={qwe} type="submit" class="btn btn-primary btn-block mb-4 col-2">Далее</button> </Link>
</div>
<Footer/>
    </>
  )
}

export default Coll