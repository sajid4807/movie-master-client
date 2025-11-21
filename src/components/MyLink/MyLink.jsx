import { NavLink } from "react-router";

const MyLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "smooth-border-underline active"
          : 'smooth-underline'
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;