import { Provider } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import { Outlet } from "react-router-dom";
import appStore from "../utilities/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <div className=" z-40 sticky top-0 shadow-lg">
          <Nav />
        </div>
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
