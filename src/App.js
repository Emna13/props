import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  const profileList =[
    {
      name:'Emna Mezni',
      bio: 'Hello everyone ! This is my Card. Feel free to share it with your contacts.',
      profession:'Développeur',
    }
  ]
 
    
    
  return (
    <div >
      <Profile profileList={profileList}/>
    </div>
  );
}

export default App;
