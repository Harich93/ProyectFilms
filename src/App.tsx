import { Provider } from "react-redux";
import { AppRouters } from "./Routers/AppRouters"
import { store } from "./Store/store";


const App = () => {
  return (
    <Provider store={ store} >
      <AppRouters />
    </Provider>
  );
}

export default App;
