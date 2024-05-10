import React from 'react'
import { Col, Row } from 'antd';
import { useState } from 'react';
import {  Modal } from 'antd';




function Grid() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const [isModal, setIsModal] = useState(false);
    const show = () => {
      setIsModal(true);
    };
     const handlOk = () => {
      setIsModal(false);
    };
    const handlCancel = () => {
      setIsModal(false);
    };

    
    const [isModa, setIsModa] = useState(false);
    const showModa = () => {
      setIsModa(true);
    };
     const handOk = () => {
      setIsModa(false);
    };
    const handCancel = () => {
      setIsModa(false);
    };


  return (


   <>



<div>
    <center>
    <h1 style={{color:"red" }}>Welcome to Our Gallery</h1></center>
</div>


<center>
<div><h2>Restaurant's Interior</h2></div></center>

    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         
         <img style={{marginLeft:"-25px", marginTop:"-20px" , borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="522px" />
<br />
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio itaque corrupti eveniet enim ipsa saepe eius sunt iste quisquam, molestias temporibus sint dolores eligendi. Ratione, magnam? Architecto, aut animi!</p>      
      
       </Modal>
      
   
      
   <Row  style={{paddingLeft:"26px"}}>
      <Col onClick={showModal} span={6}><img style={{borderRadius:"10px"}} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px"  /></Col>
      <Col onClick={showModal}  span={6}><img style={{borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" /></Col>
      <Col onClick={showModal}  span={6}><img style={{borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" /></Col>
      <Col onClick={showModal}  span={6}><img style={{borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" /></Col>
    </Row><br />
        
   <Row  style={{paddingLeft:"26px"}}>
      <Col onClick={showModal} span={6}><img style={{borderRadius:"10px"}} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px"  /></Col>
      <Col onClick={showModal}  span={6}><img style={{borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" /></Col>
      <Col onClick={showModal}  span={6}><img style={{borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" /></Col>
      <Col onClick={showModal}  span={6}><img style={{borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px" /></Col>
    </Row>
    <br />



<center>

    <div><h2>Restaurant's Foods</h2></div></center>

    <Modal open={isModal} onOk={handlOk} onCancel={handlCancel}>
         
         <img style={{marginLeft:"-25px", marginTop:"-20px" , borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="522px" />
<br />
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio itaque corrupti eveniet enim ipsa saepe eius sunt iste quisquam, molestias temporibus sint dolores eligendi. Ratione, magnam? Architecto, aut animi!</p>      
      
       </Modal>
        
   <Row  style={{paddingLeft:"26px"}}>
      <Col onClick={show} span={6}><img style={{borderRadius:"10px"}} src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px"  /></Col>
      <Col onClick={show}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px" /></Col>
      <Col onClick={show}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px" /></Col>
      <Col onClick={show}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px" /></Col>
    </Row>
    <br />
    <Row  style={{paddingLeft:"26px"}}>
      <Col onClick={show} span={6}><img style={{borderRadius:"10px"}} src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px"  /></Col>
      <Col onClick={show}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px" /></Col>
      <Col onClick={show}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px" /></Col>
      <Col onClick={show}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" width="300px" /></Col>
    </Row>
        <br />

<center>
        <div><h2>Restaurant's Ambiance</h2></div></center>


        <Modal open={isModa} onOk={handOk} onCancel={handCancel}>
         
         <img style={{marginLeft:"-25px", marginTop:"-20px" , borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="522px" />
<br />
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio itaque corrupti eveniet enim ipsa saepe eius sunt iste quisquam, molestias temporibus sint dolores eligendi. Ratione, magnam? Architecto, aut animi!</p>      
      
       </Modal>


   <Row  style={{paddingLeft:"26px"}}>
      <Col onClick={showModa} span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px"  /></Col>
      <Col onClick={showModa}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px" /></Col>
      <Col onClick={showModa}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px" /></Col>
      <Col onClick={showModa}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px" /></Col>
    </Row>
    <br />
    <Row  style={{paddingLeft:"26px"}}>
      <Col onClick={showModa} span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px"  /></Col>
      <Col onClick={showModa}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px" /></Col>
      <Col onClick={showModa}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px" /></Col>
      <Col onClick={showModa}  span={6}><img style={{borderRadius:"10px"}}  src="https://media.gettyimages.com/id/1280423441/photo/ambiance-in-paris-streets-after-france-will-impose-curfew-in-major-cities.jpg?s=612x612&w=gi&k=20&c=9WMHjUHc4R1mp8a2DmJ61j2BcmTIrdhCfmr6xBKSNdo=" width="300px" /></Col>
    </Row>
   </>
  )
}

export default Grid
