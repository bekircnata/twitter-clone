import "./App.scss"
import RouterConfig from "./RouterConfig";

import Menu from "./components/menu/Menu";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
    <div className='grid'>
      <div className='lg:col-3'>
        <Menu />
      </div>
      <div className='lg:col-5' style={{color: "#fff"}}>
        <RouterConfig />
      </div>
      <div className='lg:col-4' style={{color: "#fff"}}>
        <Sidebar />
      </div>
    </div>
  </div>
  );
}

export default App;
