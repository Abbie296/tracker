import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/About">About</Link> </li>
          <li> <Link to="/Account">Account</Link> </li>
          <li> <Link to="/AddFood">Add Food</Link> </li>
          <li> <Link to="/BadFoods">Bad Foods</Link> </li>
          <li> <Link to="/FoodList">Food List</Link> </li>
          <li> <Link to="/Login">Login</Link> </li>
          <li> <Link to="/Signup">Signup</Link> </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;