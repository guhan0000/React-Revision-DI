import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./UseReducer-with-UseContext/AuthContext";
import Login from "./UseReducer-with-UseContext/Login";
import Profile from "./UseReducer-with-UseContext/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
