import React from 'react'
import { Descriptions } from 'antd';

function CheifInfo() {

    const items = [
        {
          key: '1',
          label: 'CheifName',
          children: 'Sufiyan Malik',
        },
        {
          key: '2',
          label: 'Telephone',
          children: '0322*********',
        },
        {
          key: '3',
          label: 'Live',
          children: 'Karachi, Pakistan',
        },
        {
          key: '4',
          label: 'Remark',
          children: 'Excellent',
        },
        {
          key: '5',
          label: 'Address',
          children: 'No. 18, Karachi,Pakistan',
        },
       
      ];
  return (
    <>


    
        
 


    <div >
    <div style={{display:"flex" , width:"60%" , marginLeft:"140px" }}>
    
    <dfn> <dt><h2>About us</h2></dt><dd>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem architecto ullam, ipsam praesentium tempore eos neque deleniti debitis earum veniam rerum vero suscipit odio non aperiam molestias animi nesciunt vel. Optio sunt esse nostrum dignissimos autem ullam enim rerum. Illum excepturi possimus porro laudantium a reiciendis tenetur est officia? Iure, illo placeat et delectus non in aperiam asperiores nam omnis officiis voluptatibus quos veritatis dolore laborum nesciunt
           deleniti aspernatur neque eligendi. Ducimus quae ipsa recusandae commodi excepturi placeat neque harum maxime nemo blanditiis eligendi ex nulla iure, perferendis, obcaecati 
           quisquam! Dolorem libero velit perferendis a laudantium ad quaerat voluptate?</dd></dfn>
   <div style={{width:"50%" }}>
    <img style={{borderRadius:"10px", marginTop:"50px"}} src="https://getsling.com/wp-content/uploads/2020/03/pasted-image-0-1.png"height={300} width={650} alt="" srcset="" />

    </div>
   </div>
   </div>
   
   <br />
<center>
    <h1>Cheif Info</h1></center>
<div style={{backgroundColor:"rgb(241 245 249)"}}>
   <Descriptions title = "INFO No1:" items={items} />
   
   <Descriptions title = "INFO No2:" items={items} />
   <Descriptions title = "INFO No3:"  items={items} />
   </div>
<center>
   <h1>Resturant Mission</h1>
   </center>
   <br />

<div >
    <div style={{display:"flex" , width:"60%" , marginLeft:"140px" }}>
    
    <dfn> 
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem architecto ullam, ipsam praesentium tempore eos neque deleniti debitis earum veniam rerum vero suscipit odio non aperiam molestias animi nesciunt vel. Optio sunt esse nostrum dignissimos autem ullam enim rerum. Illum excepturi possimus porro laudantium a reiciendis tenetur est officia? Iure, illo placeat et delectus non in aperiam asperiores nam omnis officiis voluptatibus quos veritatis dolore laborum nesciunt
           deleniti aspernatur neque eligendi. Ducimus quae ipsa recusandae commodi excepturi placeat neque harum maxime nemo blanditiis eligendi ex nulla iure, perferendis, obcaecati 
           quisquam! Dolorem libero velit perferendis a laudantium ad quaerat voluptate?</dfn>
   <div style={{width:"50%" }}>
    <img style={{borderRadius:"10px"}} src="https://www.touchbistro.com/wp-content/uploads/2020/11/restaurant-mission-statement-inset-1.jpg"height={300} width={650} alt="" srcset="" />

    </div>
   </div>
   </div>
    </>
  )
}

export default CheifInfo
