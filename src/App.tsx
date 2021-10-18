import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./Routers/AppRouters"
import { store } from "./Store/store";


const App = () => {
  return (
    <Provider store={ store} >
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
