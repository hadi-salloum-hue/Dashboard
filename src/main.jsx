import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Auth from './Pages/Auth.jsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Register from './Pages/Register.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import ListItems from './Pages/ListItems.jsx'
import LogIn from './Pages/LogIn.jsx'
import CreatItem from './Pages/CreatItem.jsx'
import EditItem from './Pages/EditItem.jsx'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <LogIn />
      },
      {
        path: 'regestir',
        element: <Register />
      }
    ]
  }, {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
      path: "list",
      element: <ListItems />
    },
  {
      path: "add",
      element: <CreatItem />
    },
  {
      path: "edit/:id",
      element: <EditItem />
    }]
  }
],
{
  basename:"/Dashboard"
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
