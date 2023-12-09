import { Link } from "react-router-dom"


const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
        <h2 className="text-6xl">404 Page Not Found!</h2>
        <Link className="text-4xl underline text-red-400" to={'/'}>Go Home</Link>
    </div>
  )
}

export default Error