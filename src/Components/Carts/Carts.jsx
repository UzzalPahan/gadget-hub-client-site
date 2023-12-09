import { useLoaderData } from "react-router-dom"
import swal from "sweetalert"

const Carts = () => {
    const cart = useLoaderData()

    const handleRemove = (_id) =>{
        // console.log(_id, 'clicked id');

        fetch(`https://backend-73cdq6wim-uzzalpahan.vercel.app/carts/${_id}`,{
            method: 'DELETE'
        })
        .then(res => {
            res.json()
            swal("Good job!", "Item Removed Successfully!", "success");
        })
        .then(data => console.log(data))
    }

    const checkoutHandle = () =>{
        swal("Good job!", "Your Order Placed", "success");
        
    }
  return (
    <div>

        <div className="max-w-3xl mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
  <div className="bg-white shadow-md rounded my-6">
    <table className="text-left w-full border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-3 bg-gray-200 font-bold uppercase text-sm text-gray-600 border border-gray-300">Item Name</th>
          <th className="py-2 px-3 bg-gray-200 font-bold uppercase text-sm text-gray-600 border border-gray-300">Operation</th>
          <th className="py-2 px-3 bg-gray-200 font-bold uppercase text-sm text-gray-600 border border-gray-300">Price</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- Repeat the following row for each item in the cart --> */}
        { cart.map(cart =>
        <tr key={cart._id}>
          <td className="py-2 px-3 border border-gray-300 flex">
            <img className="w-40 h-40" src={cart.productImage} alt="" />
            <h2>{cart.productName}</h2>
          </td>
          <td className="py-2 px-3">
            <button onClick={()=>handleRemove(cart._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2">Remove</button>
            </td>
          <td className="py-2 px-3 border border-gray-300">{cart.productPrice}</td>
        </tr>
        )
        }
        {/* <!-- Repeat for other items --> */}
      </tbody>
    </table>
  </div>
  <div className="flex justify-end mt-4">
    <button onClick={checkoutHandle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Checkout
    </button>
  </div>
</div>

    </div>
  )
}

export default Carts