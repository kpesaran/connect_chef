import { Outlet } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'


export default function Layout() {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className='mt-5'>
                <Outlet/>
            </div>
        </>
    )
}