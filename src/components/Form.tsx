import { useDispatch } from 'react-redux';
import { adData } from '../assets/slices/User';
import { FormEvent } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
type UserDatasProps = {
  desireUI: number;
  setdesireUI: React.Dispatch<React.SetStateAction<number>>;
};
const Form: React.FC<UserDatasProps> = ({setdesireUI}) => {
    const[count,setCount]=useState<number>(0)
  
  const dispatch = useDispatch();
  const NameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    setCount((prev)=>prev+1)

    e.preventDefault();
    if (NameInput.current?.value && emailInput.current?.value) {
      setdesireUI((prev:number)=>prev+1)
      dispatch(adData({ name: NameInput.current.value, email: emailInput.current.value,id:count,deleted:false }));
      NameInput.current.value = '';
      emailInput.current.value = '';
      alert('Added to list')
   
    }
    else{
        alert('You did not add anything')
    }
  };



return (
    <div  className=' mt-28 w-3/4 self-center'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-start '>
        <div >
          <label htmlFor="name" className='text-2xl text-green-600 font-semibold'>Name:</label>
          <input type="text" placeholder="Enter name:" id="name" ref={NameInput} className='text-xl ml-4 inline-block rounded bg-slate-400 p-2'/>
        </div>
        <div>
          <label htmlFor="email" className='text-2xl  text-green-600 font-semibold'>Email:</label>
          <input type="email" placeholder="Enter email" id="email" ref={emailInput} className='text-xl ml-4 inline-block mt-2 rounded bg-slate-400 p-2'/>
        </div>
        <div >
        <button className=' inline-block w-24 mr-28 mt-10 h-9 bg-red-400 rounded-xl'>Add to list</button>
        </div>
      </form>
     <Link to='/data' className=' inline-block mt-10 mr-28 h-9 w-24  bg-red-400 rounded-xl'> <button>Go to</button></Link>
    </div>
  );
};

export default Form;
