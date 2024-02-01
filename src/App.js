import "./App.css";
import Sidebar from "./components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
/*import {
    AboutUs,
    OurAim,
    OurVision,
} from "./pages/AboutUs";*/
/*import {
    Services,
    ServicesOne,
} from "./pages/Services";
import {
    Events,
    EventsOne,
    EventsTwo,
} from "./pages/Events";*/
import Add from "./pages/Add";
import Play from "./pages/Play";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                
                <Route
                    path="/Play"
                    element={<Play />}
                />
                <Route
                    path="/Add"
                    element={<Add />}
                />
               
            </Routes>
        </Router>
    );
}
 
export default App;