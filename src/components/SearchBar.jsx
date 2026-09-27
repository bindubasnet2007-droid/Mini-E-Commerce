function SearchBar({ searchTerm, onSearch, category, onCategoryChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search for products..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  )
}

export default SearchBar