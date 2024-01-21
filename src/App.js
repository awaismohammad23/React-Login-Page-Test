import './App.css';
import {Hotels, LoginPage} from './components'
import { Sidebar } from './components/Sidebar/Sidebar';

//calling the components.
function App() {
  return (
    <>
      <LoginPage/> 
      <Sidebar/>
    </>
  );
}

export default App;
