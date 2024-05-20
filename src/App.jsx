import { Route, Routes } from "react-router-dom"
import Layout from "./layoutt/Layout"
import Home from "./pages/Home"
import Musics from "./pages/Musics"
import Likes from "./pages/Likes"
import { useEffect } from "react"
import { getToken } from "./components/utils"
import { useDispatch } from "react-redux"
import { create } from "./redux/authSlice"

function App() {
    const dispatch = useDispatch()
  useEffect(() => {
    
    getToken()
      .then(res => {  
        dispatch(create(res))
      })
      .catch(err => {
        console.log(err);
      })
  
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home></Home></Layout>}></Route>
        <Route path="/likes" element={<Layout><Likes></Likes></Layout>}></Route>
        <Route path="/playlist/:id" element={<Layout><Musics></Musics></Layout>}></Route>
      </Routes>
    </>
  )
}

export default App