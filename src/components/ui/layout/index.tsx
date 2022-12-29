import { Card } from "../styles";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Card margin="100px 0 0">{children}</Card>
      <Footer />
    </>
  );
};

export default Layout;
