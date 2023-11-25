import React, { useState } from 'react';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Assume you have an array of items and each item has a category property
  const items = [
    { name: 'Item 1', category: 'Category A' },
    { name: 'Item 2', category: 'Category B' },
    { name: 'Item 3', category: 'Category A' },
    // ...more items
  ];

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        {/* Add more options for categories */}
      </select>
      <ul>
        {filteredItems.map((item) => (
          <item key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;