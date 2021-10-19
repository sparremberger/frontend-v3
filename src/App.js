import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import CommentPage from "./pages/CommentPage";

function App() {
    return (
        <Router>
            <Route path='/projects' component={Projects} />
            <Route path='/comments' component={CommentPage} />
            <Route path='/' component={Home} exact />
        </Router>
    );
}

export default App;
