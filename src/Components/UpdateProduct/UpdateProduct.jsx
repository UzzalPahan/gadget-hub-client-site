import { useEffect, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateProduct = () => {
    const [categorys, setCategory] = useState();
    const [categoryValue, setCategoryValue] = useState();
    const productData = useLoaderData();

    console.log(productData, 'product data');

    useEffect(()=>{

        fetch('https://backend-73cdq6wim-uzzalpahan.vercel.app/category')
        .then(res => res.json())
        .then(data =>{
          console.log('fetch data', data);
          setCategory(data)
        })
      },[])

    const selectedCategory = event =>{
        setCategoryValue(event.target.value)
    }    

    const updateProduct = e =>{
        e.preventDefault();
        const form = e.target;

        const image = form.imageUrl.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        
        const updateProducts = {image, name, brand, categoryValue, price, description, rating}

        fetch(`https://backend-73cdq6wim-uzzalpahan.vercel.app/update/${productData._id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
        .then(res => {
            console.log(res);
            swal("Good job!", "Update Successfully!", "success");
        })
        .then(err => {
            console.log(err);
        })
    }

  return (
    <div className="my-10">
        <h2 className="text-4xl text-center">UpdateProduct {productData.length}</h2>
        <form onSubmit={updateProduct} className="w-[40vw] mx-auto">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Product Image URL</span>
            </label>
            <input type="text" name="imageUrl" defaultValue={productData?.image} placeholder="image url" className="input input-bordered" /><br />

            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Product Name</span>
            </label>
            <input type="text" name="name" defaultValue={productData?.name} placeholder="name" className="input input-bordered"/><br />

            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Brand</span>
            </label>
            <input type="text" name="brand" defaultValue={productData?.brand} placeholder="brand name" className="input input-bordered" /><br />

            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Select Category: </span>
            </label>
            <select className="input input-bordered" onChange={selectedCategory}><br />
                <option defaultValue={productData?.categoryValue}>{productData?.categoryValue}</option>
                <option value="">Choose a Category:</option>
                {categorys?.map(category =><option key={category._id}>
                    {category.category}
                    </option>)} 
            </select>

            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" defaultValue={productData?.price} placeholder="price" className="input input-bordered"/><br />
            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <input type="text" name="description" defaultValue={productData?.description} placeholder="short description" className="input input-bordered"/>

            </div>
            <br /><br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" defaultValue={productData.rating} placeholder="rating" className="input input-bordered"/><br />

            </div>
            <br />
            <input className="btn btn-primary" type="submit" value="Update" />
        </form>
    </div>
  )
}

export default UpdateProduct