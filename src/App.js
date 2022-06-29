import { Container } from "@mui/material";
import CustomMasonry from "./components/CustomMasonry/CustomMasonry";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Container maxWidth="xl">
        <CustomMasonry />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
