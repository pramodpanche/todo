import { Route, Routes } from "react-router-dom";
import Header from "./components/TodoHeader";
import "../src/styles/css/all.css";
import DodoIndex from "./pages/TodoIndex";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DodoIndex />} />
      </Routes>
    </>
  );
}

export default App;
