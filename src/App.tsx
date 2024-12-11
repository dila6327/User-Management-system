import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserDatas from './components/UserDatas'
import Form from './components/Form'
import { useState } from 'react';
function App() {
  const [desireUI,setdesireUI]=useState<number>(0)
return (
    <div className=' flex flex-col align-center '>
   <Router>
    <Routes>
      <Route element={<Form setdesireUI={setdesireUI} desireUI={desireUI}/>} path='/'/>
      <Route element={<UserDatas setdesireUI={setdesireUI} desireUI={desireUI}/>} path='/data'/>
    </Routes>
   </Router>
    </div>
  )
}
export default App
