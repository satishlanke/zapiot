import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import DedicatedTeam from '../pages/DedicatedTeam';
import MainPage from '../pages/MainPage';
import QualityAssurance from '../pages/QualityAssurance';
import ServicesPage from '../pages/ServicesPage';
import DevopsEngineer from '../pages/DevopsEngineer';
import ProductEngineering from '../pages/ProductEngineering';
import PlatformPage from '../pages/PlatformPage';
import Careers from '../pages/Careers';
import IndustriesPage from '../pages/IndustriesPage';
import Bench from '../pages/Bench';
import ApplyBench from '../pages/ApplyBench';
// import Login from '../pages/Login';
import Login from '../pages/Login'
import Register from '../pages/Register';
import {useState,createContext} from 'react';
import DetailJob from '../pages/DetailJob';




export const store = createContext();
const CompRouter = (props) => {
    const [token,setToken] = useState(null);
    
        return (
          
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/services" component={ServicesPage} />
                        <Route exact path="/dedicatedteam" component={DedicatedTeam} />
                        <Route exact path="/services/quality-assurance" component={QualityAssurance} />
                        <Route exact path="/services/devops" component={DevopsEngineer} />
                        <Route exact path="/services/product-engineering" component={ProductEngineering} />
                        <Route exact path="/platform" component={PlatformPage} />
                        <Route exact path="/careers" component={Careers} />
                        <Route exact path="/industries" component={IndustriesPage} />
                       
                        <Route exact path="/FillJob" component={ApplyBench}/>
                        
                        <store.Provider value={[token,setToken]}>
                        <Route exact path="/bench" component={Bench} />
                        <Route exact path="/bench/:id" component={DetailJob} />
                        <Route exact path="/login" component={Login} /> 
                        <Route exact path="/register" component={Register} />
                        
                        </store.Provider>
                       











                        
                    </Switch>
                </Router>
                
            </div>
        );
    
}
export default CompRouter;
