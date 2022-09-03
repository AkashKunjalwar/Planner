import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Planner from "./Components/Planner/Planner";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/createplanner/:id" element={<Planner />} />
            <Route path="/updateplanner/:id" element={<Planner />} />
          </Routes>
        </BrowserRouter>
      </Provider>

      <Footer />
    </div>
  );
}

export default App;
