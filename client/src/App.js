
import './App.css';
import Footer from './Shared/footer';
import Navbar from './Shared/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import Home from './Component/Home.js';
import Apropos from './Component/apropos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/apropos" component={Apropos}/>
      {/* <main style={{minHeight:"12vh"}}></main> */}
   <Footer/>
    </div>
  );
}

export default App;
