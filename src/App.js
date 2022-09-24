import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BannersPage from "./pages/Banners";
import CardapioPage from "./pages/Cardapio/CardapioPage";
import CategoriasPage from "./pages/Categorias";
import RestaurantesPage from "./pages/Restaurantes";

const themeCustom = createTheme({
  palette: {
    primary: {
      main: "#ED6E27",
      light: "#f56b4f",
      dark: "#a51f04",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
    h5: {
      fontWeight: 600,
    }
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeCustom}>
        <Header />
        <Routes>
          <Route path="/" element={<BannersPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/restaurantes/:id" element={<RestaurantesPage />} />
          <Route path="/detalhes/:id" element={<CardapioPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
