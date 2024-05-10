import React from 'react'
import Product from '../Card/Product'

function Review() {
  return (
    <div>
         <center>
      <h2 style={{fontSize: "45px"}}>Customer Reviews</h2></center>
      <div style={{display:'Flex' , marginLeft:'120px' , gap:"60px" }}>
<div>
      <Product image = {<img src='https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg ' height={200} />}
      title='Alexendiar John'
      discription = "VIP Food Center exceeds expectations with their exceptional quality and diverse selection. From gourmet delights to everyday essentials, it's a one-stop haven for culinary bliss."
      btn = {<button className='button'>Read More</button>}
      />
      </div>
      <div>
      <Product image = {<img src='https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg ' height={200}  />}
      title='Alexendiar John'
      discription = "VIP Food Center exceeds expectations with their exceptional quality and diverse selection. From gourmet delights to everyday essentials, it's a one-stop haven for culinary bliss."
      
      btn = {<button className='button'>Read More</button>}/>
      </div>
      <div>
        <Product image = {<img src='https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg ' height={200} />}
      title='Alexendiar John'
      discription = "VIP Food Center exceeds expectations with their exceptional quality and diverse selection. From gourmet delights to everyday essentials, it's a one-stop haven for culinary bliss."
   
      btn = {<button className='button'>Read More</button>}
      />
      </div>

    </div>
    </div>
  )
}

export default Review
