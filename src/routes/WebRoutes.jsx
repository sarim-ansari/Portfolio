import { createBrowserRouter} from "react-router-dom";
    
import Homepage from '../pages/Home'
// import About from '../pages/About'
const WebRoutes = createBrowserRouter([
    {
      path: "/",
      element:    <Homepage />,
    },
    // {
    //   path: "/about",
    //   element:    <About />,
    // },
  ]);
  

export default WebRoutes;
