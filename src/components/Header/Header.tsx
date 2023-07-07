import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="header-info">
          <a href="" className="chat">
            Chat with us
          </a>
          <a href="" className="phone">
            +12345678
          </a>
          <a href="" className="email">
            info@freshnesecom.com
          </a>
        </div>
        <div className="header-links">
          <div className="link">Blog</div>
          <div className="link">Abous Us</div>
          <div className="link">Carrers</div>
        </div>
      </div>
      <div className="header-default">
        <div className="logo">Freshnesecom</div>
        <div className="search">
          <input
            type="text"
            className="header-input"
            placeholder="Search Products, categories ... "
          />
        </div>
        <div className="user-info">
          <div className="user">
            <img src="src/assets/svg/ic-actions-user.png" alt="" />
          </div>
          <div className="cart">
            <img src="src/assets/svg/ic-ecommerce-basket.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
