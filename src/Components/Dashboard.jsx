import { useContext } from "react"
import { Link } from "react-router-dom"
import ApiContext from "../context/context"
const Dashboard = () => {

    const context = useContext(ApiContext)

    return (
        <>
            <h3>{context.user.email}</h3>

            <Link to='/' onClick={context.logOut}>
                logOut
            </Link>
        </>
    )

}
export default Dashboard