import React from 'react';

function Product(props) {
  return (
    <>
        <p>Title: {props.title}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
        <hr />
    </>
  )
}

export default Product