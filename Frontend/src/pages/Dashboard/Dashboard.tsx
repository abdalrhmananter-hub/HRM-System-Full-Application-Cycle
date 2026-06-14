import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar/Navbar'

export default function Dashboard() {
  return (
    <>
        
            <div className='flex bg-primarybg'>
                <div className='w-[260px]'>
                    <Sidebar/>
                </div>
                <div className='flex flex-col w-full'>
                    <div>
                        <Navbar/>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
  )
}
