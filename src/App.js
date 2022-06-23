import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import BasicTable from './components/BasicTable';
import BasicCard from './components/BasicCard';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <BasicCard name = "New York" date="3:10" xs={12} sm={6} lg={4} xl={3}/>
      <BasicCard name = "Sydney" xs={12} sm={6} lg={4} xl={3}/>
      <BasicCard name = "London" xs={12} sm={6} lg={4} xl={3}/>
      <BasicTable/>
    </div>
  );
}

export default App;
