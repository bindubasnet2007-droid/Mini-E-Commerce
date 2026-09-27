import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>Mini E-Commerce</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  )
}

export default Navbar