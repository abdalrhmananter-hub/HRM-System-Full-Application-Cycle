import { useState } from 'react'
import CardStatus from '../../UI/CardStatus/CardStatus'

export default function EmpHome() {

  const [user, setUser] = useState('Ahmed');
  const date = new Date().toLocaleDateString('en-UE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <div>
      <h1>Welcome back, {user}</h1>
      <p>Today is {date}</p>
      <div>
        <div className='flex gap-5'>
          <CardStatus />
          <CardStatus />
          <CardStatus />
        </div>

      </div>
    </div>
  )
}
