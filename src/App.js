import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './view/home/Home';
import SignIn from './view/signin/SignIn';
import SignUp from './view/signup/SignUp';
import Profile from './view/profile/Profile';
import Descendants from './view/descendants/Descendants';
import History from './view/sendPoints/History'
import EditProfile from './view/editProfile/EditProfile';
import AboutUs from './view/aboutUs/AboutUs';
import Privacydata from './view/privacydata/Privacydata';
import Terms from './view/terms/Terms';
import Regulation from './view/regulation/Regulation';
import Team from './view/team/Team';
import Sell from './view/sell/Sell';
import Buy from './view/buy/Buy';
import Benefits from './view/benefits/Benefits';
import Joinus from './view/joinus/Joinus';
import Category from './view/category/Category';
import Credit from './view/credit/Credit';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Descendants' element={<Descendants />}/>
        <Route path='/History' element={<History />}/>
        <Route path='/EditProfile' element={<EditProfile />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/Privacydata' element={<Privacydata />}/>
        <Route path='/Terms' element={<Terms />}/>
        <Route path='/Regulation' element={<Regulation />}/>
        <Route path='/Team' element={<Team />}/>
        <Route path='/Sell' element={<Sell />}/>
        <Route path='/Buy' element={<Buy />}/>
        <Route path='/Benefits' element={<Benefits />}/>
        <Route path='/Joinus' element={<Joinus />}/>
        <Route path='/Credit' element={<Credit />}/>
        <Route path='/:name/:id' element={<Category />}/>
        

        

      </Routes>
    </div>
  );
}

export default App;


