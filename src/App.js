
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Card1 from './Component/Card1';
import Details2 from './Component/Details2';
import Form3 from './Component/Form3';
import Checkout4 from './Component/Checkout4';

function App() {
  return (
    <div>
    <Router>
   <Navbar/>
<Routes>
<Route path='/' element={<Card1 />} />
<Route path='/Details2/:id' element={<Details2 />} />
<Route path='/Form3/:id' element={<Form3 />} />
<Route path='/Checkout4/:id' element={<Checkout4 />} />
</Routes>

    </Router>
   </div>
  );
}

export default App;
