import React from 'react'
import { Card, Flex} from 'antd';

const { Meta } = Card;
function Product(props) {
  return (
    <>
   
    <div style={{ padding: '30px' }}>
   <Card
    hoverable
    style={{
      width: '270px',
      background: '#ECECEC',
      
      
    }}
    cover={props.image}
  >
    <h2>{props.title}</h2>
    <p>{props.discription}</p>
    <p>{props.btn}</p>
   
  </Card>
  </div>
 

    </>
  )
}

export default Product
