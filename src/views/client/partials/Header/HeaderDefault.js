import { Layout } from "antd";

const { Header } = Layout;

const HeaderDefault = () => {
  return (
    <>
      <Header className="header bg-black bg-opacity-40 text-white fixed w-full z-10 sticky top-0">
        <div className="container flex justify-between h-16">
          <div className="header__logo w-14">
            <a className="" href="#">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSlPVanrjLAI4YIdb0eqAFX4R3Z4ZmS-9gw&usqp=CAU"></img>
            </a>
          </div>
          <div className="header-menu">
            <ul className="flex">
              <li className="mx-3">
                <a href="#">Link</a>
              </li>
              <li className="mx-3">
                <a href="#">Link</a>
              </li>
              <li className="mx-3">
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
          <div class="header-account">
            <ul className="flex">
              <li className="mx-3">
                <a>Login</a>
              </li>
              <li className="mx-3">
                <a>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HeaderDefault;
