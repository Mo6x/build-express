import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Books from "./Pages/Books";
import Update from "./Pages/Update";
import Add from "./Pages/Add";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books/>} />
            <Route path="/add" element={<Add/>} />
            <Route path="/update" element={<Update/>} />
          </Routes>
       </BrowserRouter>
     </div>

  );

};  

export default App;
