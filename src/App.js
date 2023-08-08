import { Route, Routes } from 'react-router-dom';
import './App.css';
import Active from './Component/Active/Active';
import All from './Component/All/All';
import Completed from './Component/Completed/Completed';
import Navbar from './Component/Navbar/Navbar';
import { useState,useEffect } from 'react';
import Task from './Component/task/Task';
import Addtask from './Component/addTask/Addtask';

function App() {
  
  return (
    <div className="App">
      <h1> #Todo </h1>
    <Navbar/>
     {/* <Addtask/> */}
     <Routes>
       <Route path='/All' index element={<All/>} />
       <Route path='/Active'  element={<Active/>} />
       <Route path='/Completed'  element={<Completed/>} />
     </Routes>
    </div>
  );
}

export default App;
