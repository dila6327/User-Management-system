
import { Link } from 'react-router-dom'

const EmptyList = () => {
  return (
    <>
    <div className='text-2xl text-zinc-50' >There is no user</div>
    <Link to='/' className='border rounded-xl bg-red-500  w-1/6 self-center mt-16'><button >Add some</button></Link>
    </>
  )
}

export default EmptyList