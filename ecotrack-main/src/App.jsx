

// import { Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import HomePage from './components/HomePage';
// import EmissionCalculator from './components/EmissionCalculator';
// import PlantsList from './components/PlantsList';
// import GasSlides from './components/GasSlides';
// import Dashboard from './components/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.get('http://localhost:5000/api/auth/me', {
//         headers: { Authorization: `Bearer ${token}` }
//       }).then(res => setUser(res.data)).catch(() => setUser(null));
//     }
//   }, []);

//   return (
//     <>
//       <Navbar user={user} setUser={setUser} />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/signup" element={<Signup setUser={setUser} />} />
 
//         <Route
//           path="/calculator"
//           element={
//             <ProtectedRoute>
//               <EmissionCalculator />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="/plants" element={<PlantsList />} />
//         <Route path="/greenhouse-gases" element={<GasSlides />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import TopCO2Plants from './components/TopCO2Plants';
import AdminPanel from './components/AdminPanel';
import GlobalWarming from "./components/GlobalWarming";

import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import EmissionCalculator from './components/EmissionCalculator';
import PlantsList from './components/PlantsList';
import GasSlides from './components/GasSlides';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <>
      {/* 🔔 Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* 🧭 Navigation Bar */}
      <Navbar user={user} setUser={setUser} />

      {/* 🔁 Application Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />

        <Route
          path="/calculator"
          element={
            <ProtectedRoute>
              <EmissionCalculator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
<Route path="/admin/plants" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />

<Route path="/global-warming" element={<GlobalWarming />} />
<Route path="/plants" element={<TopCO2Plants />} />
        <Route path="/plants" element={<PlantsList />} />
        <Route path="/greenhouse-gases" element={<GasSlides />} />
      </Routes>
    </>
  );
}

export default App;
