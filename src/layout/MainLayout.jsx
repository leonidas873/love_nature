import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
