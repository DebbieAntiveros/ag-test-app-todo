import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
function Header() {
  const { loggedUser, logOut } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <nav class="navbar navbar-dark bg-white">
      <form class="container-fluid justify-content-start">
        {loggedUser && (
          <div className="mt-5 bg-white">
            <h3 className="text-black"> Hello, {loggedUser.user_name}</h3>
          </div>
        )}
        <div className="mt-5 justify content-start">
          {loggedUser ? (
            <button
              class="btn btn-sm btn-outline-danger"
              type="button"
              onClick={handleLogout}
            >
              {" "}
              Logout
            </button>
          ) : (
            <>
              <Link to="/sign-up">
                <button class="btn btn-outline-success me-2" type="button">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button class="btn btn-sm btn-outline-secondary" type="button">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </form>
    </nav>
  );
}

export default Header;
