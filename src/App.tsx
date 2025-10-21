import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/appRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
