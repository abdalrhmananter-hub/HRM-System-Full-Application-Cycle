
import { NavLink } from 'react-router-dom';
import AdminEmployeeDirectoryCards from '../../UI/AdminEmpoyeeDirectoryCards/AdminEmployeeDirectoryCards';
import AdminEmpDirectoryTotalEmps from '../../UI/AdminEmpDirectoryTotalEmps/AdminEmpDirectoryTotalEmps';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminEmployeeDirectory() {

  const [employees, setEmployees] = useState([]);
  const[depratments, setDepartments] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const response = await axios.get('/employees');
      setEmployees(response.data.allUsers);
      setError(null);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError('Try Again later!!');
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      setLoading(true);

      const response = await axios.get('/department/alldepratment');
      console.log(response);
      setDepartments(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError('Try Again later!!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
  }, []);

  if (loading) return <div className="text-center p-6 text-slate-500">Loading...</div>;
  if (error) return <div className="text-center p-6 text-red-500 font-semibold">{error}</div>;

  const data = [
    { icon: "fa-solid fa-user-group", title: "TOTAL STAFF", number: employees?.length },
    { icon: "fa-solid fa-briefcase", title: "DEPARTMENTS", number: depratments?.count },
    { icon: "fa-solid fa-user-check", title: "ACTIVE NOW", number: employees?.length },
    { icon: "fa-solid fa-user-xmark", title: "InActive", number: 0 },
  ];

  return (
    <>
      <div className='flex flex-col p-3 gap-4 md:gap-6 w-full max-w-full overflow-x-hidden'>
        {/* Header Section */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0'>
          <div>
            <h1 className='text-lg md:text-xl font-bold text-slate-800'>Employee Directory</h1>
            <p className='text-xs text-stone-400'>Manage all organizational personnel records in one place.</p>
          </div>
          <div className='w-full sm:w-auto text-right'>
            <NavLink to={"/admin/employeeonboarding"} className="inline-block text-center p-2 text-white bg-blue-700 rounded cursor-pointer hover:bg-blue-900 text-sm w-full sm:w-auto">
              <i className="fa-solid fa-user-plus mr-1"></i> Add New Employee
            </NavLink>
          </div>
        </div>

        {/* Cards Grid - Responsive columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center w-full'>
          {
            data.map((item, index) => (
              <AdminEmployeeDirectoryCards key={index} icon={item.icon} title={item.title} number={item.number} />
            ))
          }
        </div>

        {/* Table Section */}
        <div className='w-full flex justify-center overflow-hidden'>
          <AdminEmpDirectoryTotalEmps employees={employees}/>
        </div>
      </div>
    </>
  )
}