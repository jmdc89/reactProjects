import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center-m'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item-m'>
            <img src={img} alt={title} className='photo-m' />
            <div className='item-info-m'>
              <header>
                <h4>{title}</h4>
                <h4 className='price-m'>${price}</h4>
              </header>
              <p className='item-text-m'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};


export default Menu;
