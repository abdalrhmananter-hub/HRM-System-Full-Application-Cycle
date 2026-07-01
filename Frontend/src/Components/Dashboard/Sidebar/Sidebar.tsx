import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom' // استيراد useNavigate للتوجيه
import { useDispatch } from 'react-redux' // استيراد useDispatch لتشغيل الأكشن
import { logout } from '../../../redux/authSlice' // تأكد من صحة مسار ملف الـ slice لديك

export default function Sidebar({ links }) {
  const sideLinks = links;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // دالة التعامل مع تسجيل الخروج
  const handleLogout = () => {
    dispatch(logout()); // مسح التوكن والـ State في Redux
    navigate('/login'); // توجيه المستخدم لصفحة تسجيل الدخول
  };

  return (
    <>
      <div className='bg-sidePrimarybg h-full min-h-screen flex flex-col justify-between border-r border-stone-300' >
        <div className='flex flex-col p-4 gap-10'>
          <div>
            <h2 className='text-titleFont text-[1.5rem] font-semibold'>HRM Portal</h2>
            <p className='text-stone-400 text-[0.8rem]'>Enterprise Suite</p>
          </div>
          <div className='flex flex-col gap-3'>
            {
              sideLinks.map((item, index) => (
                <NavLink 
                  className='flex gap-3 items-center p-1 text-stone-700 rounded hover:bg-sideSecondarybg hover:text-white' 
                  to={item.path} 
                  key={index}
                >
                  <i className={`${item.icone}`}></i>
                  <p className='m-0 '>{item.title}</p>
                </NavLink>
              ))
            }
          </div>
        </div>

        <div className='p-4'>
          <div className='flex flex-col gap-2 border-t border-stone-400 py-3 '>
            <NavLink to={'/help'} className='flex items-center gap-3 text-stone-700 px-1 rounded hover:bg-sideSecondarybg hover:text-white'>
              <i className="fa-regular fa-circle-question"></i>
              <p>Help Center</p>
            </NavLink>

            {/* تم تحويله إلى button ليعمل الـ onClick والـ Logic الخاص بالـ Logout بنجاح */}
            <button 
              onClick={handleLogout} 
              className='flex items-center gap-3 text-stone-700 px-1 py-1 w-full rounded hover:bg-sideSecondarybg hover:text-white transition-colors cursor-pointer'
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p className="m-0">Logout</p>
            </button>
          </div>
        </div>     
      </div>
    </>
  )
}