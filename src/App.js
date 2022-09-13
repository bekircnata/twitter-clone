import "./App.scss"
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import RouterConfig from "./RouterConfig";

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
      <div className='lg:col-4' style={{color: "#fff"}}>Right Sidebar</div>
    </div>
  </div>
  );
}

export default App;
