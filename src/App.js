import './App.css';
import NavBar from './componets/NavBar';
import Table from './componets/Table';

function App() {

  
  const texto = "Peliculas IUDigital"

  return (
    <div className="container">
       <NavBar titulo={texto}/>
       <Table/>
    </div>   
  );
}

export default App;
