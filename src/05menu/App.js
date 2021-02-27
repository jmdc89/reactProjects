import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './menu.css';

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section-m">
        <div className="title-m">
          <h2>our menu</h2>
          <div className="underline-m"></div>
        </div>
        <Categories categories={categories}  />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;
