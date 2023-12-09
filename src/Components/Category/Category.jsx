import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "../Header2/Header2";


const Category = () => {
  const [categorys, setCategory] = useState();

  useEffect(()=>{

    fetch('https://backend-73cdq6wim-uzzalpahan.vercel.app/category')
    .then(res => res.json())
    .then(data =>{
      console.log('fetch data', data);
      setCategory(data)
    })
  },[])


  return (<>
    <Header2></Header2>
    <div id="category" className="w-11/12 mx-auto my-20">
        <h1 className="text-2xl text-center font-medium py-5">Categories You May Like</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90vw] mx-auto">
        {categorys?.map(categorys =>
        <div key={categorys._id} className="card w-80 bg-base-100 shadow-xl border hover:border hover:border-indigo-500 overflow-hidden hover:text-indigo-500 delay-75">
          <Link to={`/apple/${categorys.category}`}>
    <img src={categorys.image} alt="Shoes" className="w-40 py-10 h-48 mx-auto rounded-t-lg"/>
  <div className="card-body items-center text-center">
    <h2 className="card-title uppercase">{categorys.category}</h2>
  </div>
      </Link>
</div>


)}
    </div>
    </div>

    </>
  )
}

export default Category