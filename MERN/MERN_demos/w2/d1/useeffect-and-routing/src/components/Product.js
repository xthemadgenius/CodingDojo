import React, { useEffect, useState } from "react";

const Product = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (product && product.soldCount === 10) {
      alert(`THIS PRODUCT IS HOT, BUY NOW!!!`);
    }

    // never set the state that your useEffect is listening for changes to, otherwise you will cause an infinite loop
    // setProduct({ ...product });
  }, [product]);

  const fetchProductData = () => {
    // simulate some delay from calling an API, you don't know how long it will take
    setTimeout(() => {
      setProduct({
        name: "Bread Gloves",
        brand: "Leaven Life",
        soldCount: 0,
        imgUrl:
          "https://external-preview.redd.it/9Ibs6tuJH8lg_GPQ2iMzYbtVfMHomSKlsmXnkTt3E88.jpg?auto=webp&s=610bb7f652f17072f2d4ad15bf390f8095d29eb8",
      });
    }, 2000);
  };

  const buy = (event) => {
    console.log(`BOUGHT ${product.name}!`);
    // must pass in a NEW object for it to update
    // create new object, spread all existing key value pairs into it, then overwrite one key with a new value
    setProduct({ ...product, soldCount: product.soldCount + 1 });

    // long-form of above
    // const updatedProduct = {...product};
    // updatedProduct.soldCount += 1;
    // setProduct(updatedProduct);
  };

  if (product === null) {
    return (
      <div>
        <img
          height="500"
          src="https://media.giphy.com/media/w9yg6QsZJ3JC/giphy.gif"
          alt="Loading"
        />
      </div>
    );
  }

  return (
    <div>
      <h2>Product: {product.name}</h2>
      <h3>Brand: {product.brand}</h3>
      <img src={product.imgUrl} alt="Product" />
      <br />
      <button onClick={buy}>BUY NOW ({product.soldCount} sold!)</button>
    </div>
  );
};

export default Product;
