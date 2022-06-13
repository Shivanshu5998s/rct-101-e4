// import React from "react";

// const Navbar = () => {
//   return (
//     <div data-cy="navbar">
//       <div>
//         {/* TODO: Use Link instead of anchor tag. */}
//         <a data-cy="navbar-home-link"></a>
//       </div>
//       <div>
//         <div data-cy="navbar-cart-items-count"></div>
//         <button data-cy="navbar-login-logout-button"></button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/auth.actions";

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state) => state.auth.data.isAuthenticated
  );

  const dispatch = useDispatch();

  const cartItemsCount = useSelector((state) => state.cart.data.length);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // login screen
    if (isAuthenticated) {
      dispatch(logout());
      navigate("/login");
      // he wants to logout
    }
    else {
      // he wants to login
      navigate("/login");
    }
  };

  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <div data-cy="navbar-cart-items-count">
          Cart: {cartItemsCount && `(${cartItemsCount})`}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;