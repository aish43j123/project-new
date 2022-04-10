import React from 'react';
import {HashRouter,Routes,Route,Link} from 'react-router-dom';
import HrOne from './hr1.js';
import HrTwo from './hr2.js';
import HrThree from './hr3.js';
import HrFour from './hr4.js';
import SrOne from './sr.js';
import HrSix from './hr6.js';





function App(){
  return(
    <HashRouter>
    <ul id="topnav">
      <li><Link to="/" className='menu'>Home</Link></li>
      <li><Link to="/hr2" className='menu'>ID</Link></li>
      <li><Link to="/hr3" className='menu'>IID</Link></li>
      <li><Link to="/hr4" className='menu'>MD</Link></li>
      <li><Link to="/sr" className='menu'>MD1</Link></li>
      <li><Link to="/hr6" className='menu'>MD2</Link></li>
     
      </ul>
      <Routes>
            <Route exact path="/" element={ <HrOne/> }/>
            <Route exact path="/hr2" element={ <HrTwo/> }/>
            <Route exact path="/hr3" element={ <HrThree/> }/>
            <Route exact path="/hr4" element={ <HrFour/> }/>
            <Route exact path="/sr" element={ <SrOne/> }/>
            <Route exact path="/hr6" element={ <HrSix/> }/>
           
            </Routes>

     </HashRouter>
  );
}
export default App;