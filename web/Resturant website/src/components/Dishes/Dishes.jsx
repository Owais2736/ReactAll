import React from 'react'
import Product from '../Card/Product'




function Dishes(props) {
  return (
    <>
    <div>
      <center>
      <h2 style={{fontSize: "50px"}}>Feature Dishes</h2></center>
    </div>
    <div style={{display:'Flex' , flexWrap:'wrap' }}>
    <div>
<Product image = {<img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={200} />} 
title = "Zinger with Fries" 
discription = "Price: Rs.350" 
btn = {<button className='button'>Add to Cart</button>}/>
 </div>
 <div>
<Product image = {<img src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2019-05/jmbaughpixabay.jpg?itok=sKIhr0AB' height={200} />}
title = " Chicken Cheese Roll"
discription = "Price: Rs.400"
btn = {<button className='button'>Add to Cart</button>} />
</div>
<div>
<Product image = {<img src='https://c4.wallpaperflare.com/wallpaper/806/830/571/pizza-piece-cheese-fast-food-wallpaper-preview.jpg' height={200}/>} 
title = "Vegetable Large Pizza"
discription= "Price: Rs.700" 
btn = {<button className='button'>Add to Cart</button>}/>
</div>
<div>
<Product image = {<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmy60BAeB6cI9gdwOo07E8hqvIeMJz4wSpEx3cnVgpj1hbCtvfBmT6_z6Mg5Tj76q7ri8&usqp=CAU' height={200}/>} 
title = "Chicken Chesse Pizza"
discription= "Price: Rs.800"
btn = {<button className='button'>Add to Cart</button>}/>
</div>
<div>
<Product image = {<img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={200} />} 
title = "Zinger with Fries" 
discription = "Price: Rs.350" 
btn = {<button className='button'>Add to Cart</button>}/>
 </div>
 <div>
<Product image = {<img src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2019-05/jmbaughpixabay.jpg?itok=sKIhr0AB' height={200} />}
title = " Chicken Cheese Roll"
discription = "Price: Rs.400"
btn = {<button className='button'>Add to Cart</button>} />
</div>
<div>
<Product image = {<img src='https://c4.wallpaperflare.com/wallpaper/806/830/571/pizza-piece-cheese-fast-food-wallpaper-preview.jpg' height={200}/>} 
title = "Vegetable Large Pizza"
discription= "Price: Rs.700" 
btn = {<button className='button'>Add to Cart</button>}/>
</div>
<div>
<Product image = {<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmy60BAeB6cI9gdwOo07E8hqvIeMJz4wSpEx3cnVgpj1hbCtvfBmT6_z6Mg5Tj76q7ri8&usqp=CAU' height={200}/>} 
title = "Chicken Chesse Pizza"
discription= "Price: Rs.800"
btn = {<button className='button'>Add to Cart</button>}/>
</div>
</div>
    </>
  )
}

export default Dishes
