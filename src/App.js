import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import SearchBar from "./components/SearchBar";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/Footer";
import Login from "./pages/Login";
const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <BreadCrumb/>
      {/* <Registration /> */}
      <Login/>
      <Footer/>
    </div>
  );
};

export default App;
