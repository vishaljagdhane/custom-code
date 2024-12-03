import logo from './logo.svg';
import './App.css';
import UserRegisterPage from './UserLog/UserRegisterPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserDataTable from './UserLog/UserDataTable';
import Applications_Dashbaord from './Custom-Dashboard/Applications_Dashbaord';

function App() {
  return (
    <>
    <BrowserRouter>
<Applications_Dashbaord/>
</BrowserRouter>

    </>
  );
}

export default App;
