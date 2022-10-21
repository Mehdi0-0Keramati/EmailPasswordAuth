import ApiContext from "../context/context";
import { useContext } from "react";
import "../index.css"
const Home = () => {
    const context = useContext(ApiContext)
    return (
        <>
            <h2>Register</h2>
            <input value={context.registerEmail} onChange={(e) => context.setregisterEmail(e.currentTarget.value)} name="emailRegister" type="email" placeholder="email" />
            <br />
            <input value={context.registerPassword} onChange={(e) => context.setregisterPassword(e.currentTarget.value)} name="passwordRegister" type="password" placeholder="password" />
            <br />

            <button
                className={context.loading === true ? "linkbutton loading" : "linkbutton"} onClick={context.register}
            >
                Register
            </button>

            <br />

            <h2 style={{ marginTop: '2rem' }}>Login</h2>
            <input value={context.loginEmail} onChange={(e) => context.setLoginEmail(e.currentTarget.value)} type="email" placeholder="email" />
            <br />
            <input value={context.loginPassword} onChange={(e) => context.setLoginPassword(e.currentTarget.value)} type="password" placeholder="password" />
            <br />
            <button
                className={context.loading === true ? "linkbutton loading" : "linkbutton"} onClick={context.login}
            >
                Login
            </button>


            <h3>
                {
                    context.error === true ? " something went wrong " : ""
                }
            </h3>

        </>
    )

}
export default Home