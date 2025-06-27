
// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { Leaf } from 'lucide-react';

// // // const Navbar = ({ user, setUser }) => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token');
// // //     setUser(null);
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <nav className="bg-white shadow-md px-6 md:px-12 py-5 flex justify-between items-center border-b border-gray-200 relative">
// // //       <div className="flex items-center space-x-2">
// // //         <Leaf className="h-6 w-6 text-green-500" />
// // //         <Link to="/" className="text-2xl font-bold text-green-600">EcoTrack</Link>
// // //       </div>

// // //       <div className="hidden md:flex space-x-6 font-semibold items-center">
// // //         <Link to="/" className="text-gray-700 hover:text-green-500">Home</Link>
// // //         <Link to="/calculator" className="text-gray-700 hover:text-green-500">Calculator</Link>
// // //         <Link to="/plants" className="text-gray-700 hover:text-green-500">Top CO₂ Plants</Link>
// // //         <Link to="/greenhouse-gases" className="text-gray-700 hover:text-green-500">Gas Slide</Link>
// // //         <Link to="/dashboard" className="text-gray-700 hover:text-green-500">Dashboard</Link>
// // //       <li>
// // //   <Link to="/global-warming" className="hover:text-green-600">
// // //     Global Warming
// // //   </Link>
// // // </li>

// // //         {user ? (
// // //           <>
// // //             <span className="text-green-700 font-bold">Welcome, {user.name}</span>
// // //             <button
// // //               onClick={handleLogout}
// // //               className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600"
// // //             >
// // //               Logout
// // //             </button>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <Link to="/login" className="text-green-600 hover:text-green-700 border px-4 py-1 border-green-500 rounded-md">Login</Link>
// // //             <Link to="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md">Sign Up</Link>
// // //           </>
// // //         )}
// // //       </div>

// // //       {/* Mobile Toggle */}
// // //       <div className="md:hidden">
// // //         <button onClick={() => setIsOpen(!isOpen)} className="text-green-600 font-bold text-lg">
// // //           ☰
// // //         </button>
// // //       </div>

// // //       {/* Mobile Nav */}
// // //       {isOpen && (
// // //         <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-10">
// // //           <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
// // //           <Link to="/calculator" onClick={() => setIsOpen(false)}>Calculator</Link>
// // //           <Link to="/plants" onClick={() => setIsOpen(false)}>Top CO₂ Plants</Link>
// // //           <Link to="/greenhouse-gases" onClick={() => setIsOpen(false)}>Global Warming</Link>
// // //           <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
// // //           {user ? (
// // //             <>
// // //               <span className="text-green-700">Hi, {user.name}</span>
// // //               <button onClick={handleLogout} className="text-red-600 px-4 py-1 border border-red-500 rounded-md">Logout</button>
// // //             </>
// // //           ) : (
// // //             <>
// // //               <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
// // //               <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
// // //             </>
// // //           )}
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { Leaf, Menu, X } from "lucide-react";

// // const Navbar = ({ user, setUser }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     setUser(null);
// //     navigate("/login");
// //   };

// //   const links = [
// //     { path: "/", name: "Home" },
// //     { path: "/calculator", name: "Calculator" },
// //     { path: "/plants", name: "Top CO₂ Plants" },
// //     { path: "/greenhouse-gases", name: "Gas Slide" },
// //     { path: "/global-warming", name: "Global Warming" },
// //     { path: "/dashboard", name: "Dashboard" },
// //   ];

// //   return (
// //     <nav className="bg-white sticky top-0 z-50 shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="flex items-center space-x-2">
// //           <Leaf className="h-6 w-6 text-green-600" />
// //           <Link to="/" className="text-2xl font-bold text-green-700">
// //             EcoTrack
// //           </Link>
// //         </div>

// //         {/* Desktop Nav */}
// //         <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
// //           {links.map((link, idx) => (
// //             <Link
// //               key={idx}
// //               to={link.path}
// //               className="hover:text-green-600 transition duration-150"
// //             >
// //               {link.name}
// //             </Link>
// //           ))}

// //           {user ? (
// //             <>
// //               <span className="text-green-700 font-semibold">
// //                 👋 Hi, {user.name}
// //               </span>
// //               <button
// //                 onClick={handleLogout}
// //                 className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <Link
// //                 to="/login"
// //                 className="text-green-700 border border-green-500 px-4 py-1 rounded hover:bg-green-50"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/signup"
// //                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded transition"
// //               >
// //                 Sign Up
// //               </Link>
// //             </>
// //           )}
// //         </div>

// //         {/* Mobile Toggle */}
// //         <div className="md:hidden">
// //           <button onClick={() => setIsOpen(!isOpen)}>
// //             {isOpen ? (
// //               <X className="h-6 w-6 text-green-600" />
// //             ) : (
// //               <Menu className="h-6 w-6 text-green-600" />
// //             )}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Nav */}
// //       {isOpen && (
// //         <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 space-y-4">
// //           {links.map((link, idx) => (
// //             <Link
// //               key={idx}
// //               to={link.path}
// //               onClick={() => setIsOpen(false)}
// //               className="block text-gray-700 font-medium hover:text-green-600"
// //             >
// //               {link.name}
// //             </Link>
// //           ))}

// //           {user ? (
// //             <>
// //               <span className="block text-green-700">Hi, {user.name}</span>
// //               <button
// //                 onClick={handleLogout}
// //                 className="w-full text-red-600 border border-red-500 px-4 py-1 rounded-md mt-2"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <Link
// //                 to="/login"
// //                 onClick={() => setIsOpen(false)}
// //                 className="block text-green-700"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/signup"
// //                 onClick={() => setIsOpen(false)}
// //                 className="block text-green-700"
// //               >
// //                 Sign Up
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Leaf,
//   Menu,
//   X,
//   Bell,
//   Sun,
//   Moon,
//   ChevronDown,
// } from "lucide-react";

// const Navbar = ({ user, setUser }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(2); // Sample

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   const toggleDarkMode = () => {
//     setDarkMode((prev) => !prev);
//     document.documentElement.classList.toggle("dark");
//   };

//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     if (prefersDark) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   return (
//     <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white sticky top-0 z-50 shadow-md transition-colors">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
//           <Link to="/" className="text-2xl font-bold text-green-700 dark:text-green-300">
//             EcoTrack
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-6 font-medium">
//           <Link to="/" className="hover:text-green-600 dark:hover:text-green-300">Home</Link>

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center space-x-1 hover:text-green-600 dark:hover:text-green-300"
//             >
//               <span>Features</span>
//               <ChevronDown className="h-4 w-4" />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-44 z-20">
//                 <Link to="/calculator" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Calculator</Link>
//                 <Link to="/plants" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Top CO₂ Plants</Link>
//                 <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
//                 <Link to="/greenhouse-gases" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Gas Slide</Link>
//                 <Link to="/global-warming" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Global Warming</Link>
//               </div>
//             )}
//           </div>

//           {/* Notifications */}
//           <div className="relative cursor-pointer">
//             <Bell className="h-5 w-5 hover:text-green-600 dark:hover:text-green-300" />
//             {notifications > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                 {notifications}
//               </span>
//             )}
//           </div>

//           {/* Dark Mode */}
//           <button onClick={toggleDarkMode}>
//             {darkMode ? (
//               <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-500" />
//             ) : (
//               <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
//             )}
//           </button>

//           {/* Auth */}
//           {user ? (
//             <>
//               <span className="text-green-700 dark:text-green-400 font-semibold">
//                 👋 {user.name}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-green-700 dark:text-green-300 border border-green-500 px-4 py-1 rounded hover:bg-green-50 dark:hover:bg-green-800"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <X className="h-6 w-6 text-green-600 dark:text-green-400" />
//             ) : (
//               <Menu className="h-6 w-6 text-green-600 dark:text-green-400" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
//           <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/calculator" onClick={() => setIsOpen(false)}>Calculator</Link>
//           <Link to="/plants" onClick={() => setIsOpen(false)}>Top CO₂ Plants</Link>
//           <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
//           <Link to="/greenhouse-gases" onClick={() => setIsOpen(false)}>Gas Slide</Link>
//           <Link to="/global-warming" onClick={() => setIsOpen(false)}>Global Warming</Link>
//           {user ? (
//             <>
//               <span className="text-green-700 dark:text-green-300">Hi, {user.name}</span>
//               <button onClick={handleLogout} className="w-full text-red-600 border border-red-500 px-4 py-1 rounded-md">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
//               <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
//             </>
//           )}
//           <div className="flex items-center space-x-3 pt-2">
//             <Bell className="h-5 w-5" />
//             <span>{notifications} new alerts</span>
//             <button onClick={toggleDarkMode} className="ml-auto">
//               {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  ChevronDown,
  UserCircle,
  Leaf,
} from "lucide-react";

const Navbar = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications] = useState(3);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
          <span className="text-2xl font-bold text-green-700 dark:text-green-300">EcoTrack</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-green-600 dark:hover:text-green-300">Home</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-green-600 dark:hover:text-green-300"
            >
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow rounded-md w-48 py-2 z-20">
                <Link to="/calculator" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Calculator</Link>
                <Link to="/plants" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Top CO₂ Plants</Link>
                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
                <Link to="/greenhouse-gases" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Gas Slide</Link>
                <Link to="/global-warming" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Global Warming</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <Bell className="h-5 w-5 hover:text-green-600 dark:hover:text-green-300" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {notifications}
              </span>
            )}
          </div>
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
            )}
          </button>
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <UserCircle className="h-5 w-5 text-green-700 dark:text-green-300" />
                <span>{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-green-700 dark:text-green-300 border border-green-500 px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
          <Link to="/plants" onClick={() => setMenuOpen(false)}>Top CO₂ Plants</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/greenhouse-gases" onClick={() => setMenuOpen(false)}>Gas Slide</Link>
          <Link to="/global-warming" onClick={() => setMenuOpen(false)}>Global Warming</Link>
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <div className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {notifications}
                </span>
              )}
            </div>
          </div>
          <button onClick={toggleDarkMode} className="flex items-center space-x-2">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
          {user ? (
            <>
              <span className="text-green-700 dark:text-green-300">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="w-full text-red-600 border border-red-500 px-4 py-1 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
