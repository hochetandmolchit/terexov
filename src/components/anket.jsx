
import { useFormik } from 'formik';
import { AnketContext, CollContext, HeaderContext } from '../App';
import { Routes, Route, Link } from 'react-router-dom';
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
function Anket() {
    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
    setHeaderValue(0)
    const {collValue, setCollValue} = React.useContext(CollContext);

    const {anketValue, setAnketValue} = React.useContext(AnketContext);

    const formik = useFormik({
        initialValues: {
          email: null,
          firstName:null,
          lastName:null,
          patronymic: null,
          isVisibleEducation: false,
          сertificateSeries: null,
          сertificateNumber: null,
          сertificateScore: null,
          foreignLanguage: null,
          needSocialBehavior: false,
          needHelp: false,
          moreInfo: null,
          schoolName: null,
          schoolEndYear: null,
          oldEducation: null,
          isFirstEducation: false,
          address: null,
          birthdayDate: null,
          phone: null,
          passportData: null,
          toFreeEducation: false
        },
        onSubmit: values => {
            console.log("message")
            setAnketValue(values);
            /*
            fetch('https://a551-178-178-85-119.eu.ngrok.io/PdfCreator/DownloadFiles', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json;charset=utf-8',
                 
                },
                body: JSON.stringify({
                    values,
                    "colleges": [1],
                    "specialties": [1]
                }),
              });*/
        },
      });

      

  return (
      <div className="container pt-6">
          <div className="col-6 offset-2">
    <form onSubmit={formik.handleSubmit}>
        <div class="input-group mb-3">
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         class="form-control"
         
         placeholder='Введите email'
       />
        </div>
        <div class="input-group mb-3">
       <input
         id="firstName"
         name="firstName"
         type="firstName"
         onChange={formik.handleChange}
         value={formik.values.firstName}
         class="form-control"
         placeholder='Введите имя'
       />
        </div>
        <div class="input-group mb-3">
       <input
         id="lastName"
         name="lastName"
         type="lastName"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         class="form-control"
         placeholder='Введите фамилию'
       />
        </div>
        <div class="input-group mb-3">
       <input
         id="patronymic"
         name="patronymic"
         type="patronymic"
         onChange={formik.handleChange}
         value={formik.values.patronymic}
         class="form-control"
         placeholder='Введите отчество'
       />
        </div>

        <div class="form-check mb-3"> 
            <input
         id="isVisibleEducation"
         name="isVisibleEducation"
         type="checkbox"
         onChange={formik.handleChange}
         value={formik.values.isVisibleEducation}
         class="form-check-input"
         placeholder=''
             />
       <label 
            className='form-check-label'
            for="isVisibleEducation"
            >
                isVisibleEducation </label >
        </div>


        <div class="input-group mb-3">
       <input
         id="сertificateSeries"
         name="сertificateSeries"
         type="сertificateSeries"
         onChange={formik.handleChange}
         value={formik.values.сertificateSeries}
         class="form-control"
         placeholder='Введите сertificateSeries'
       />
        </div>

        <div class="input-group mb-3">
       <input
         id="сertificateNumber"
         name="сertificateNumber"
         type="сertificateNumber"
         onChange={formik.handleChange}
         value={formik.values.сertificateNumber}
         class="form-control"
         placeholder='Введите сertificateNumber'
       />
        </div>

        <div class="input-group mb-3">
       <input
         id="сertificateScore"
         name="сertificateScore"
         type="сertificateScore"
         onChange={formik.handleChange}
         value={formik.values.сertificateScore}
         class="form-control"
         placeholder='Введите сertificateScore'
       />
        </div>

        <div class="input-group mb-3">
       <input
         id="foreignLanguage"
         name="foreignLanguage"
         type="foreignLanguage"
         onChange={formik.handleChange}
         value={formik.values.foreignLanguage}
         class="form-control"
         placeholder='Введите foreignLanguage'
       />
        </div>

        <div class="form-check mb-3"> 
            <input
         id="needSocialBehavior"
         name="needSocialBehavior"
         type="checkbox"
         onChange={formik.handleChange}
         value={formik.values.needSocialBehavior}
         class="form-check-input"
         placeholder=''
             />
       <label 
            className='form-check-label'
            for="needSocialBehavior"
            >
                needSocialBehavior </label >
        </div>
        
        <div class="form-check mb-3"> 
            <input
         id="needHelp"
         name="needHelp"
         type="checkbox"
         onChange={formik.handleChange}
         value={formik.values.needHelp}
         class="form-check-input"
         placeholder=''
             />
       <label 
            className='form-check-label'
            for="needHelp"
            >
                needHelp </label >
        </div>

        <div class="input-group mb-3">
       <input
         id="moreInfo"
         name="moreInfo"
         type="moreInfo"
         onChange={formik.handleChange}
         value={formik.values.moreInfo}
         class="form-control"
         placeholder='Введите moreInfo'
       />
        </div>

        <div class="input-group mb-3">
       <input
         id="schoolName"
         name="schoolName"
         type="schoolName"
         onChange={formik.handleChange}
         value={formik.values.schoolName}
         class="form-control"
         placeholder='Введите schoolName'
       />
        </div>

        <div class="input-group mb-3">
       <input
         id="schoolEndYear"
         name="schoolEndYear"
         type="schoolEndYear"
         onChange={formik.handleChange}
         value={formik.values.schoolEndYear}
         class="form-control"
         placeholder='Введите schoolEndYear'
       />
        </div>
        <div class="input-group mb-3">
       <input
         id="oldEducation"
         name="oldEducation"
         type="oldEducation"
         onChange={formik.handleChange}
         value={formik.values.oldEducation}
         class="form-control"
         placeholder='Введите oldEducation'
       />
        </div>
        <div class="form-check mb-3"> 
            <input
         id="isFirstEducation"
         name="isFirstEducation"
         type="checkbox"
         onChange={formik.handleChange}
         value={formik.values.isFirstEducation}
         class="form-check-input"
         placeholder=''
             />
       <label 
            className='form-check-label'
            for="isFirstEducation"
            >
                isFirstEducation </label >
        </div>

        <div class="input-group mb-3">
       <input
         id="address"
         name="address"
         type="address"
         onChange={formik.handleChange}
         value={formik.values.address}
         class="form-control"
         placeholder='Введите address'
       />
        </div>

        <div class="input-group mb-3">
       <input
         id="birthdayDate"
         name="birthdayDate"
         type="birthdayDate"
         onChange={formik.handleChange}
         value={formik.values.birthdayDate}
         class="form-control"
         placeholder='Введите birthdayDate'
       />
        </div>
        <div class="input-group mb-3">
       <input
         id="phone"
         name="phone"
         type="phone"
         onChange={formik.handleChange}
         value={formik.values.phone}
         class="form-control"
         placeholder='Введите phone'
       />
        </div>
        <div class="input-group mb-3">
       <input
         id="passportData"
         name="passportData"
         type="passportData"
         onChange={formik.handleChange}
        
         value={formik.values.passportData}
         class="form-control"
         placeholder='Введите passportData'
       />
        </div>

     <Link  onClick={formik.submitForm} to="/coll"   ><button type="submit" class="btn btn-primary btn-block mb-4">Далее</button> </Link>
     </form>
     </div>
     </div>
  )
}

export default Anket



// {
//   "userInfo": {
//   "email": null,
//   "firstName": null,
//   "lastName": null,
//   "patronymic": null,
//   "isVisibleEducation": false,
//   "сertificateSeries": null,
//   "сertificateNumber": 0,
//   "сertificateScore": null,
//   "foreignLanguage": null,
//   "needSocialBehavior": false,
//   "needHelp": false,
//   "moreInfo": null,
//   "schoolName": null,
//   "schoolEndYear": 0,
//   "oldEducation": null,
//   "isFirstEducation": false,
//   "address": null,
//   "birthdayDate": null,
//   "phone": null,
//   "passportData": null,
//   "toFreeEducation": false
//   },
//   "colleges": [перечисление id],
//   "specialties": [перечисление id]
//   }