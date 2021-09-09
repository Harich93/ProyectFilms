import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routers/AppRouters"
import { store } from "./store/store";


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
