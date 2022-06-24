import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
