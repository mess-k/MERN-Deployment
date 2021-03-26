import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Main from "./show/Main"
import {Router} from "@reach/router"
import Create from "./show/Create"
import Edit from "./show/Edit"
import Show from "./show/Show"


function App() {
  return (
    
    <div className="App">
      <h1>Pet shelter</h1>
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Edit path="/edit/:id"/>
        <Show path="pets/:id"/>
      </Router>
    </div>
  );
}

export default App;
