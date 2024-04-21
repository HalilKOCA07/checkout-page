import { Navigate, Outlet } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"

const PrivateRouter = () => {
   
    const {loginIn} = useLoginContext()

    return loginIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter