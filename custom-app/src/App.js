import logo from './logo.svg';
import './App.css';
import UserRegisterPage from './UserLog/UserRegisterPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserDataTable from './UserLog/UserDataTable';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
 <Route path='/' element={<UserRegisterPage/>}></Route>
 <Route path='/UserDataTable' element={<UserDataTable/>}></Route>


</Routes>

</BrowserRouter>
    </>
  );
}

export default App;
