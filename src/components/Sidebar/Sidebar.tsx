import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="category-menu__container">
      <div className="category-menu">
        <h3 className="category-menu__title">Category menu</h3>
        <ul className="category-list">
          <li className="category-menu__item">Bakery</li>
          <li className="category-menu__item">Fruit and vegetables</li>
          <li className="category-menu__item">Meat and fish</li>
          <li className="category-menu__item">Drinks</li>
          <li className="category-menu__item">Kitchen</li>
        </ul>
        <div className="category-text">
          More categories{" "}
          <span>
            <img src="/src/assets/svg/ic-right.png" alt="" />
          </span>
        </div>
      </div>
      <div className="banner">
        <h3 className="banner-text">Banner</h3>
        <button className="category-menu__btn">Read recepies</button>
      </div>
      <div className="banner">
        <h3 className="banner-text">Banner</h3>
        <button className="category-menu__btn">Read recepies</button>
      </div>
    </div>
  );
};

export default Sidebar;
