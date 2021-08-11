
import './App.css';
import Footer from './Shared/footer';
import Navbar from './Shared/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import Home from './Component/Home.js';
import Apropos from './Component/apropos';
import Signup from './Component/singn';
import Dashboard from './Page/Admin/dashboard';
import { Switch} from 'react-router-dom';
//import PrivateRoute from './Page/Router/privateRoute';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/apropos" component={Apropos}/>
      <Route path="/sign" component={Signup}/>
     
      <Route path="/dashboard" component={Dashboard}/>
      {/* <main style={{minHeight:"12vh"}}></main> */}
      </Switch>
   <Footer/>
    </div>
  );
}

export default App;
