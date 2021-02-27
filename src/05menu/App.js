import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './menu.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section-m">
        <div className="title-m">
          <h2>our menu</h2>
          <div className="underline-m"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}  />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;
