import "./App.css";
import Navbar from "./components/navbar";
import Productlist from "./components/productlist";
import React, { useState } from "react";
import Footer from "./components/footer";
import AddProduct from "./components/addproduct";
function App() {
  const product = [
    {
      price: 1000,
      name: "readmi phone",
      quantity: 0,
    },
    {
      price: 100,
      name: "readmi phone cover",
      quantity: 0,
    },
  ];
  let [productlist, setProductlist] = useState(product);
  let [totalAmount, setTotalAmount] = useState(0);
  const incQuantity = (index) => {
    let newProductlist = [...productlist];
    let newTotalAmount = totalAmount;
    newProductlist[index].quantity++;
    newTotalAmount += newProductlist[index].price;
    
    setProductlist(newProductlist);
    setTotalAmount(newTotalAmount);
  };
  const restdata = () => {
    let newProductlist = [...productlist];
    newProductlist.map((product) => {
    return (product.quantity = 0)
    });
    setTotalAmount(0);
    setProductlist(newProductlist);
  };

  const decQuantity = (index) => {
    let newProductlist = [...productlist];
    let newTotalAmount = totalAmount;
    if (newProductlist[index].quantity > 0) {
      newProductlist[index].quantity--;
      newTotalAmount -= newProductlist[index].price;
    }

    setProductlist(newProductlist);
    setTotalAmount(newTotalAmount);
  };
  const productDelete = (index) => {
    let newProductlist = [...productlist];
    setTotalAmount(
      totalAmount - newProductlist[index].price * newProductlist[index].quantity
    );
    newProductlist.splice(index,1);
    setProductlist(newProductlist);
  };

  const addProduct=(name,price)=>{
    let newProductlist = [...productlist];
    newProductlist.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductlist(newProductlist);

  }

  return (
    <>
      <Navbar />
      <AddProduct addProduct={addProduct} />
      <main className="container mt-4 ">

        <Productlist
          productlist={productlist}
          productDelete={productDelete}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      </main>
     
        <Footer totalAmount={totalAmount} resatdata={restdata} />
    
    </>
  );
}

export default App;
