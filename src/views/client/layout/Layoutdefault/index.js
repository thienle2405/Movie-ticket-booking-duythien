import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderDefault from "../../partials/Header/HeaderDefault";
import FooterDefault from "../../partials/Footer/FooterDefault";
import HomeCarousel from "../../partials/Carousel/HomeCarousel";

const { Header, Footer, Content } = Layout;

const LayoutDefault = () => {
  return (
    <>
      <Layout>
        <HeaderDefault />
        <HomeCarousel />
        <Content className="content">
          <Outlet />
        </Content>
        <FooterDefault />
      </Layout>
    </>
  );
};

export default LayoutDefault;
