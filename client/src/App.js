
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {current} from './Redux/Action/authAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import Home from './Component/Home.js';
import Apropos from './Component/apropos';
import Signup from './Component/singn';
import Dashboard from './Page/Dashboard/dashboard';
import { Switch} from 'react-router-dom';
import PrivateRoute from './Page/Router/privateRoute';
import './App.css';
import Phyto from './Page/phyto/phyto';
import Beaute from './Page/beauté/beauté';
import Maladie from './Page/maladie/maladie';
import PageBeaute from './Page/beauté/pageBeaute';
import PageMaladie from './Page/maladie/pageMaladies';




function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(current());
	});
  return (
    <div className="App">
   
      <Switch>
      <Route exact path="/" component={Home}/>
     <Route path="/phyto" component={Phyto}/>
     <Route path="/beauté" component={Beaute}/>
     <Route path="/maladies" component={Maladie}/>
    
      <Route path="/apropos" component={Apropos}/>
      <Route path="/sign" component={Signup}/>
     
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>

      <Route exact path="/pageBeaute" component={PageBeaute}/>
      <Route exact path="/pageMaladies" component={PageMaladie}/>
      
      </Switch>
  
    </div>
  );
}

export default App;
