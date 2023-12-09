import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import StarRatings from "react-star-ratings";

const ProductDetails = () => {
    const productDetail = useLoaderData();
    const [rating, setRating] = useState(0); // Initial rating value

  const changeRating = (newRating, name) => {
    setRating(newRating);
  }

    const handleBuy = e =>{
        e.preventDefault();

        const productName = productDetail.name;
        const productPrice = productDetail.price;
        const productBrand = productDetail.brand;
        const productImage = productDetail.image;
        
        const sendToCart = {productName, productPrice, productBrand, productImage}

        console.log(sendToCart);

        fetch("https://backend-73cdq6wim-uzzalpahan.vercel.app/carts",{
            method: "POST",
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(sendToCart)
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <>
    <div className="w-[90vw] mx-auto my-10">
        <div className="">
            <div className="detail flex flex-col md:flex-row lg:flex-row">
                <img src={productDetail.image} className="w-[40vw] h-[60vh]" alt="" />
                <div>
                <h2 className="text-2xl">{productDetail.name}</h2>
                
                <h2 className="text-2xl">{productDetail.price}</h2>

                <StarRatings 
                    rating={rating}
                    starRatedColor="blue"
                    changeRating={changeRating}
                    numberOfStars={5}
                    defaultValue ={parseInt(productDetail?.rating)}
                    starDimension="30px"
                    name='rating'
                    />

                <h2 className="text-2xl">{productDetail.brand}</h2>
        <button onClick={handleBuy} className="mt-10 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Add to Cart</button>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default ProductDetails