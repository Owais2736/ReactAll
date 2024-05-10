import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <>
    <div className='banner'>
      <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="" srcset="" />
    </div>
    <div className='relative'>
        <h2>Welcome to VIP Food Center</h2>
        <h1>BEST HEALTHY FOODS AND DISHES</h1><br />
        <p>"At VIP Food Center, delight in gourmet dishes
         meticulously prepared to tantalize <br />your taste buds. 
            Indulge in a culinary journey where every meal is an experience of luxury."</p>
        <br />
        <button className='button'>Order Now</button>
    </div>

    </>
  )
}

export default Banner
