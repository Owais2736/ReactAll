import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    
    {/* <nav span={6} className='nav'>
        <ul>
          <li className='logo'>VIP FOOD CENTER</li>
            <a href='/'><li>Home</li></a>
            <a href='/menu'><li>Menu</li></a>
            <a href='/about'><li>About</li></a>
            <a href='/gallery'><li>Gallery</li></a>
            <a href='/contact'><li>Contact</li></a>
        </ul>
    </nav> */}

<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" style={{color:"red"}}>VIP FOOD CENTER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/"><li>Home </li><span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/menu"><li >Menu</li></a>
      <a class="nav-item nav-link" href="/about"><li>About</li></a>
      <a class="nav-item nav-link " href="/gallery"><li>Gallery</li></a>
      <a class="nav-item nav-link " href="/contact"><li>Contact</li></a>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar
