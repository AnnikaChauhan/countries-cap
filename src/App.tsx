import Layout from "./components/layout"
import Home from "./pages/home"
import { Routes, Route, Outlet } from "react-router-dom"
import Profile from "./pages/profile"
import Country from "./pages/country"

const App = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Country />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
