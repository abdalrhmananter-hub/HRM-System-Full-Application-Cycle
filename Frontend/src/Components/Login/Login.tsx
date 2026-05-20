import { Link } from 'react-router-dom'
import background from '../../assets/BackGround3.png'
import styles from './Login.module.css'
import { useForm } from 'react-hook-form'

export default function Login() {

  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Data was sent.....")
  }
  return (
    <div className={`${styles.bgColor} grid grid-cols-2 h-screen bg-no-repeat bg-cover bg-center `} style={{ backgroundImage: `url(${background})` }}>
      <div className={` flex justify-center items-center  `}>
        <div className='p-12 px-20 border-white/50 bg-white/20 backdrop-blur-md border rounded-xl flex flex-col gap-4'>

          <form className=' flex flex-col gap-10 ' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center items-center gap-3'>
              <h2 className='text-3xl font-semibold'>Welcome Back</h2>
              <p className='text-xl'>Sign in to continue to HRM Portal</p>
            </div>
            <div>
              <div className='flex items-center gap-4 grow border border-white/50 bg-white/20 border rounded-md p-3 mb-2'>
                <i className="fa-regular fa-user text-stone-600"></i>
                <input className='grow focus:outline-none' type='email' placeholder='Email' {...register("email", { required: "The email is required", minLength: { value: 6, message: "Min length is 6" } })} />
              </div>
              {errors.email && <span className={`text-red-600`}>{errors.email.message}</span>}
            </div>

            <div>
              <div className='flex items-center gap-4 grow border border-white/50 bg-white/20 rounded-md p-3 mb-2'>
                <i className="fa-solid fa-lock text-stone-600"></i>
                <input className='grow focus:outline-none' type="password" placeholder='Password' {...register("password", { required: "This feild is required", minLength: { value: 6, message: "Min length is 6" } })} />
                <i className="fa-solid fa-eye-slash text-stone-600"></i>

              </div>
              {errors.password && <span className='text-red-500 mb-6'>{errors.password.message}</span>}
            </div>



            <div className='flex ps-1 gap-2  '>
              <input className=' hover:cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400' type='checkbox' id='checkbox hover:cursor-pointer' />
              <label className='text-sm hover:cursor-pointer' htmlFor="checkbox">Keep me logged in for 30 days</label>
            </div>

            <div className='flex border-white/20 rounded-md  p-2 bg-blue-900 '>
              <button type='submit' className='flex items-center justify-center text-white text-center gap-2 grow cursor-pointer hover:font-bold'>Login <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>

          </form>

          <div className='flex justify-center transition-all hover:'>
            <Link className='text-blue-700' to={""}>Forgot Password?</Link>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className='flex items-center justify-center '>

        <div className='flex flex-col gap-7 mb-60 border border-white/30 bg-white/10 rounded-xl p-10 '>
          <div className='flex items-center gap-3'>
            <i className="fa-solid fa-user-group text-9xl text-blue-900"></i>
            <div className='flex flex-col'>
              <p className={` ${styles.textColor} text-5xl font-medium `}>HRM Portal</p>
              <p className={` ${styles.textColor} text-2xl`}>Enterprise Suite</p>
            </div>

          </div>

          <div >
            <p className={` ${styles.textColor} text-1xl `}>Empowring your workfoce with prceision and clarity</p>
          </div>
        </div>



      </div>
    </div>
  )
}
