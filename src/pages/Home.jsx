import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([])
  
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesCategory =
      category === 'all' || product.category === category

    return matchesSearch && matchesCategory
  })

  if (loading) {
    return <h2>Loading products...</h2>
  }

  return (
    <div>
      <h1>Our Products</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        category={category}
        onCategoryChange={setCategory}
      />

      <ProductList
        products={filteredProducts}
        onAddToCart={onAddToCart}
      />
    </div>
  )
}

export default Home