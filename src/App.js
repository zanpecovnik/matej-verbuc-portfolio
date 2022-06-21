import { Container } from "@mui/material";
import CustomMasonry from "./components/CustomMasonry/CustomMasonry";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <CustomMasonry />
      </Container>
    </div>
  );
}

export default App;
