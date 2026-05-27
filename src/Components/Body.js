import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"


const Body = () => {

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login />
    },
    {
        path:"/Browse",
        element:<Browse />
    }

])


    return (<div>
        <Provider >
            <RouterProvider router={appRouter} />
        </Provider>
    </div>)
}

export default Body