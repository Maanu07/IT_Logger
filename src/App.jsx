import { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogsModal from "./components/logs/AddLogsModal";
import EditLogsModal from "./components/logs/EditLogsModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // It is used to initialize the js when the applicaton loads
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <EditLogsModal />
        <AddLogsModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
};

export default App;
