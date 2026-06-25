import { useState } from 'react'
import CardStatus from '../../UI/EmpHomeCards/CardStatus'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../redux/store'
import UpdateCard from '../../UI/EmpHomeCards/UpdateCard';
import MyAttendace from '../../UI/EmpHomeCards/MyAttendace';
import RecentPaySlip from '../../UI/EmpHomeCards/RecentPaySlip';
import { NavLink } from 'react-router-dom';



export default function EmpHome() {

  //handle the name the time
  const userDetails = useSelector((state: RootState) => state.user.value) as any;
  const date = new Date().toLocaleDateString('en-UE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  //handle the cards status cards icons.
  //You need to fetch the data from the back end and add it
  // api call to get the ifno
  const cardStatusDetials = [
    { icon: "fa-solid fa-plane-departure", title: "Annual Leave", info: 14.5 },
    { icon: "fa-solid fa-suitcase-medical", title: "Sick Leave", info: 8 },
    { icon: "fa-solid fa-star-of-life", title: "Emergency", info: 3 }
  ]

  // you need to get the data from the back end and use condition if exists add a field.
  //api call
  //set use state to collect the approved requests,the updatedCard is handled
  const leaveRequests = [];
  //set a use state to collect new pay slips, the updateCard is handled
  //call api
  const newPayRoll = null;
  //Call api and a set useState to handle this point.
  const myAttendace = [];
  //call api set a useState to handle this point
  const myPaySlips = [];
  return (
    <div className='flex flex-col gap-4 ms-4'>
      <div className='flex justify-between items-center me-3'>
        <div >
          <h1 className='text-stone-900 font-bold'>Welcome back, {userDetails?.userName}</h1>
          <p className='text-stone-500'>Today is {date}</p>
        </div>
        <div>
        <NavLink to={""} className='text-white bg-blue-600 rounded p-1 pe-2 hover:bg-blue-800 cursor-pointer'>
          + Submit leave request</NavLink>
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='flex gap-5'>
          {
            cardStatusDetials.map((card, index) => (
              <CardStatus key={index} icon={card.icon} title={card.title}
                info={card.info} />
            ))
          }
        </div>
        <div>
          <UpdateCard leaveRequests={leaveRequests} newPayroll={newPayRoll} />
        </div>

      </div>
      <div className=" flex gap-5">
        <MyAttendace myAttendance={myAttendace} />
        <RecentPaySlip myPaySlips={myPaySlips} />
      </div>
    </div>
  )
}
