import React from 'react'
import { HeaderContext } from '../App';
import Header from '../components/header'
import { Link } from 'react-router-dom'
import Footer from '../components/footer';

function Main() {

    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
    setHeaderValue(4)


  return (<>
      <Header/>
      <body class="d-flex h-100 text-black pt-6">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column pt-6">
      <main class="px-3">
        <div className="col-6 offset-3 text-left">
        <h1 className='text-center pb-5'>Как это работает</h1>
        <p class="lead">1. Заполнение анкеты абитуриента</p>
        <p class="lead">2. Выбор колледжа</p>
        <p class="lead">3. Выбор специальности</p>
        <p class="lead">4. Скачать готовое заявление</p>
        </div>
        <p class="lead text-center pt-5">
          <Link to="/anketa" class="btn btn-lg  fw-bold border-black btn-primary text-center ">Начать</Link>
        </p>
      </main>
        </div>
    </body>
 <Footer/>
      </>)
}

export default Main