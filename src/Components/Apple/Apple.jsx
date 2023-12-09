import { Link, useLoaderData } from "react-router-dom"


const Apple = () => {
    const appleDevice = useLoaderData();

    


  return (
        <>
        <div>
            <h2>Apple {appleDevice.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appleDevice?.map(categorys =>
        <div key={categorys._id} className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={categorys.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{categorys.name}</h2>
    <h2 className="card-title text-4xl">{categorys.categoryValue}</h2>
    <h2 className="card-title">{categorys.brand}</h2>
    <h2 className="card-title">{categorys.price}</h2>
    <h2 className="card-title">{categorys.rating}</h2>
    <div className="card-actions w-full">
      <Link className="w-full" to={`/apple/${categorys.categoryValue}`}>
        <button className="btn btn-primary">Details</button>
      </Link>
      <Link to={`/update/${categorys._id}`}>
        <button className="btn btn-primary w-full">Update</button>
      </Link>
    </div>
  </div>
</div>


)}
    </div>
        </div>

        </>
    )
}

export default Apple