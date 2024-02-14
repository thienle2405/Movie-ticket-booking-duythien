import { Layout } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const HeaderDefault = () => {
  const isActived = (e) => {
    console.log(e);
    return e.isActive ? "text-yellow-300 text-base" : "";
  };

  return (
    <>
      <Header className="header bg-black bg-opacity-50 text-white fixed w-full z-10 sticky top-0">
        <div className="container flex justify-between h-16">
          <a className="flex" href="#">
            <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Cong-Nghe-Buu-Chinh-Vien-Thong-PTIT.png" className="align-center"></img>
          </a>
          <ul className="flex">
            <li className="mx-3">
              <NavLink to="/" className={isActived}>
                Home
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/contact" className={isActived}>
                Contact
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/news" className={isActived}>
                News
              </NavLink>
            </li>
          </ul>
          <ul className="flex">
            <li className="mx-3">
              <NavLink to="/login" className={isActived}>
                Login
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/register" className={isActived}>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </Header>
    </>
  );
};

export default HeaderDefault;
