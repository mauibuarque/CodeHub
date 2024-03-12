import { Link } from "react-router-dom";
import { Header } from "../../components";

const HomePage = () => {
  return (
    <>
      <Header>
        <Link to="/login">Sair</Link>
      </Header>
    </>
  );
};

export default HomePage;
