import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/home.component';
import Navigation from './routes/navigations/navigation.component';
import About from './components/About_Page/about.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route index element={<About/>}/>
      </Route>   
    </Routes>
  );
}

export default App;
