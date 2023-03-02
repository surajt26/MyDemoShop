import React from 'react';
import './App.css';
import Product from './Product';

function App() {

  document.title = "My Demo Shop";

  const productItems = [
    {
      title: "Product 1",
      price: 10,
      description: "First product"
    },
    {
      title: "Product 2",
      price: 20,
      description: "Second product"
    }
  ]

  return (
    <>
      {
        productItems.map((item)=>{
          return(
            <Product
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })
      }
    </>
  );
}

export default App;
