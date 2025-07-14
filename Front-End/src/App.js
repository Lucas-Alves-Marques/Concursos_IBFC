import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.module.css';
import Login from './Pages/Login/Login';
import Menu from './Pages/Menu/Menu';
import Conteiner from './Layout/Conteiner/Conteiner';
import Contests from './Pages/Contests/Contests';
import Inscriptions from './Pages/Inscriptions/Inscriptions';
import ContestManag from './Pages/ManagementContests/ContestManag';
import FormContest from './Pages/ManagementContests/Form/Form';

function App() {

  return (

    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Login />} />

        <Route element={<Conteiner />}>

          <Route path="/menu" element={<Menu />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/inscription" element={<Inscriptions />} />
          <Route path="/management/Contests" element={<ContestManag />} />
          <Route path="/management/Contests/form" element={<FormContest />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;
