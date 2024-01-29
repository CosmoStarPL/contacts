import { createBrowserRouter } from "react-router-dom";
import Root from "../root";
import Error from "../pages/Error";
import Contacts from "../pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{
      path: '/:name',
      element: <Contacts/>,
    }]
  }
]);

export default router;
