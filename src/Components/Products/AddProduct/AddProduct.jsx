import { useEffect, useState } from "react";
import swal from "sweetalert";

const AddProduct = () => {
    const [categorys, setCategory] = useState();
    const [categoryValue, setCategoryValue] = useState();

  useEffect(()=>{

    fetch('https://backend-73cdq6wim-uzzalpahan.vercel.app/category')
    .then(res => res.json())
    .then(data =>{
      console.log('fetch data', data);
      setCategory(data)
    })
  },[])

    const addCategory = event =>{
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const image = form.imageUrl.value;
        const addCategorys = {category, image}

        console.log(addCategorys);

        fetch('https://backend-73cdq6wim-uzzalpahan.vercel.app/category',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCategorys)
        })
        .then(res => console.log(res))
        .then(error =>{
            console.log(error);
        })
    }
    const addProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const image = form.imageUrl.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        
        const addProduct = {image, name, brand, categoryValue, price, description, rating}

        console.log(addProduct);

        fetch('https://backend-73cdq6wim-uzzalpahan.vercel.app/products',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => {
            console.log(res)
            swal("Good job!", "Prodcut Added Successfully!", "success");
            
        })
        .then(error =>{
            console.log(error);
        })
    }

    const selectedCategory = event =>{
        setCategoryValue(event.target.value)
    }



  return (
    <div className="py-10">
        <h2 className="text-4xl text-center">Add Product</h2>
        <form onSubmit={addProduct} className="w-[40vw] mx-auto">

            <div className="form-control">
            <label className="label">
                <span className="label-text">Image URL</span>
            </label>
            <input type="text" placeholder="image url" name="imageUrl" className="input input-bordered" required />
            </div>
            <br />
            
            <div className="form-control">
            <label className="label">
                <span className="label-text">Product Name</span>
            </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
            </div>

            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Brand Name</span>
            </label>
                <input type="text" name="brand" placeholder="brand name" className="input input-bordered" required/>
            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Select Category</span>
            </label>
            <select className="input input-bordered" onChange={selectedCategory}>
                <option value="">Choose a Category:</option>
                {categorys?.map(category =><option key={category._id}>
                    {category.category}
                </option>)} 
            </select>
            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Product Price</span>
            </label>
                <input type="text" name="price" placeholder="price" className="input input-bordered" required/>

            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Product Description</span>
            </label>
            <input type="text" name="description" placeholder="short description" className="input input-bordered" required/>
            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" placeholder="rating" className="input input-bordered" required/>
            </div>
            <br />
            <div className="form-control">

            <input className="btn btn-primary" type="submit" value="Add Product" />
            </div>
        </form>


        <h2 className="text-4xl text-center py-5">Add Category</h2>
        <form onSubmit={addCategory} className="w-[40vw] mx-auto">
            <div className="form-control">
            <label className="label">
                <span className="label-text">New Category Name</span>
            </label>
            <input type="text" name="category" placeholder="category name" className="input input-bordered" required/>
            </div>
            <br />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Image URL</span>
            </label>
            <input type="text" name="imageUrl" placeholder="image url" className="input input-bordered" required/>
            </div>
            <br />
            <div className="form-control">

            <input className="btn btn-primary" type="submit" value="Add Category" />
            </div>
        </form>
    </div>
  )
}

export default AddProduct