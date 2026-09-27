import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    )
  }

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemove={removeFromCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App