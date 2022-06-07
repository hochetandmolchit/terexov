import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../App';

function Header() {
    const {headerValue, setHeaderValue} = React.useContext(HeaderContext);
  
  return (
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top"
    style={{backgroundColor: "white"}}
    >
      <Link onClick={()=>setHeaderValue(0)} to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Simple header</span>
      </Link>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link onClick={()=>setHeaderValue(0)} to="/" class={headerValue==0?"nav-link active":"nav-link "} aria-current="page">К анкете</Link></li>
        <li class="nav-item"><Link onClick={()=>setHeaderValue(1)} to="/coll" class={headerValue==1?"nav-link active":"nav-link "}>Колледжи</Link></li>
        <li class="nav-item"><Link onClick={()=>setHeaderValue(2)} to="/spec" class={headerValue==2?"nav-link active":"nav-link "}>Специальности</Link></li>
       
      </ul>
    </header>
  </div>
  )
}

export default Header