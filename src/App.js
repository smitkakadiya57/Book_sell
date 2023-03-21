import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import SearchBar from "./components/SearchBar";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import EditProduct from "./pages/EditProduct";

import "./css/style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <BreadCrumb/>
      {/* <Registration /> */}
      {/* <Login/> */}
      <EditProduct/>
      <Footer/>
    </div>
  );
};

export default App;
