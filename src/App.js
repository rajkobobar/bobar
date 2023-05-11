import React, { useState,Component } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";
import logo  from "./logo.jpg";






const allCategories =  ["SVA PONUDA",...new Set(items.map((item) => item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "SVA PONUDA") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return (
   


  
    <main className="raspored">
  
 
      <section className="menu section">
        <div className="title">
        <img src={logo} alt="logo" className="logo" />
          <h2 >PONUDA PIĆA

          </h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu  items={menuItems} />
      </section>
      
    </main>
    
  );
};

export default App;
