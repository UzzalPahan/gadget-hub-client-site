
import Footer from '../Footer/Footer'
import Home from '../Layout/Home/Home'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Home></Home>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root