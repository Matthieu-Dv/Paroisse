import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { checkUserStatus } from './firebase';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Sacrements from './pages/Sacrements';
import Actualites from './pages/Actualites';

function PrivateRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />; // ✅ Redirige vers /login en cas de non-auth
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = checkUserStatus(setUser); // ✅ Récupère la fonction unsubscribe

    return () => unsubscribe && unsubscribe(); // ✅ Nettoie l'écouteur à la destruction du composant
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/sacrements" element={<Sacrements />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute user={user}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
