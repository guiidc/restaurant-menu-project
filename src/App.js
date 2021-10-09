import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterCategories = (category) => {
    if (category === 'All') return setMenuItems(items);
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterCategories={ filterCategories }/>
        <Menu items={ menuItems }/>
      </section>
    </main>
  );
}

export default App;
