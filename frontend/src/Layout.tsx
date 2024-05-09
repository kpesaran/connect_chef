import { Outlet } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'


export default function Layout() {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div>
                {/* renders all the child routes, Outlet will become all are other routes  */}
                <Outlet/>
            </div>
        </>
    )
}