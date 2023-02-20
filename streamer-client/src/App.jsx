import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Player from './pages/Player';
import TV from './pages/TV'
import Movies from './pages/Movies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TV />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  )
}
