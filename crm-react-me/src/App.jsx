import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


//Components
import Layout from './layout/Layout';
import NewClient from "./pages/NewClient";
import EditClinet from "./pages/EditClinet";
import InformationClient from "./pages/InformationClient";
import Panel from './pages/Panel';
function App() {

  return (
    <Router>
      <Routes>
        <Route path={"/clients"} element={<Layout />}>
          <Route index element={<Panel />} />
          <Route index path={"newClient"} element={<NewClient />} />
          <Route index path={"editClient/:id"} element={<EditClinet />} />
          <Route index path={"informationClient/:id"} element={<InformationClient />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
