import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <style>
        {`
          nav {
            background-color: #333;
            padding: 10px;
          }

          ul {
            list-style-type: none;
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 0;
            padding: 0;
          }

          li {
            font-size: 18px;
          }

          .nav-link {
            text-decoration: none;
            color: white;
            font-weight: bold;
          }

          .nav-link.active {
            color: #4CAF50; /* Active link color */
          }

          .nav-link:hover {
            color: #FFD700; /* Hover effect color */
          }
        `}
      </style>

      <nav>
        <ul>
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/formulaire">
              Formulaire
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/table">
              Table
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/chercher">
              Chercher
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
