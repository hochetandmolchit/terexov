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

    function qwe() {
       console.log(collValue)
       
      
        console.log("Колледжи "+collValue)
        console.log("Почта "+[anketValue.email])
        console.log("Специальности "+specValue)
console.log("email"+ anketValue.email,
"firstName"+ anketValue.firstName,
"lastName"+ anketValue.lastName,
"patronymic"+ anketValue.patronymic,
"isVisibleEducation"+ anketValue.isVisibleEducation,
"сertificateSeries"+ anketValue.сertificateSeries,
"сertificateNumber"+ anketValue.сertificateNumber,
"сertificateScore"+ anketValue.сertificateScore,
"foreignLanguage"+ anketValue.foreignLanguage,
"needSocialBehavior"+ anketValue.needSocialBehavior,
"needHelp"+ anketValue.needHelp,
"moreInfo"+ anketValue.moreInfo,
"schoolName"+ anketValue.schoolName,
"schoolEndYear"+ anketValue.schoolEndYear,
"oldEducation"+ anketValue.oldEducation,
"isFirstEducation"+ anketValue.isFirstEducation,
"address"+ anketValue.address,
"birthdayDate"+ anketValue.birthdayDate,
"phone"+ anketValue.phone,
"passportData"+ anketValue.passportData,
"toFreeEducation"+ anketValue.toFreeEducation)
          
            fetch('https://f575-178-178-84-90.eu.ngrok.io/PdfCreator/GetPages', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    "userInfo": {
                        "email": anketValue.email,
                        "firstName": anketValue.firstName,
                        "lastName": anketValue.lastName,
                        "patronymic": anketValue.patronymic,
                        "isVisibleEducation": anketValue.isVisibleEducation,
                        "сertificateSeries": anketValue.сertificateSeries,
                        "сertificateNumber": anketValue.сertificateNumber,
                        "сertificateScore": anketValue.сertificateScore,
                        "foreignLanguage": anketValue.foreignLanguage,
                        "needSocialBehavior": anketValue.needSocialBehavior,
                        "needHelp": anketValue.needHelp,
                        "moreInfo": anketValue.moreInfo,
                        "schoolName": anketValue.schoolName,
                        "schoolEndYear": anketValue.schoolEndYear,
                        "oldEducation": anketValue.oldEducation,
                        "isFirstEducation": anketValue.isFirstEducation,
                        "address": anketValue.address,
                        "birthdayDate": anketValue.birthdayDate,
                        "phone": anketValue.phone,
                        "passportData": anketValue.passportData,
                        "toFreeEducation": anketValue.toFreeEducation
                        },
                    "colleges": [collValue],
                    "specialties": [specValue]
                }),
              });
    }
  
  
    React.useEffect( ()=> {
        var coolegesIds = collValue;
        let requestUrl = "/Speciality/GetByCollegesId?";
        console.log(collValue)
        console.log(collValue.lenght)
        for (let index = 0; index < coolegesIds.length; index++) {
            if(index == 0)
            {
            requestUrl += `collegesId=${coolegesIds[index]}`;
            }
            else{
            requestUrl += `&collegesId=${coolegesIds[index]}`;
            }
            }
            
            console.log(requestUrl);
         //   /Speciality/GetByCollegesId?collegesId=2&collegesId=1
      
        fetch("https://f575-178-178-84-90.eu.ngrok.io"+requestUrl, {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "ContentEncoding": "UTF-8"

        }).then((res)=>{
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
    <div className="container">
    <Footer/>
    </div>
    </>)
    
}

export default Spec

