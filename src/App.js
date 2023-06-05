import { Container, ThemeProvider, Typography } from "@mui/material";
import Appbar from "./Components/appbar";
import Banner from "./Components/banner";
import theme from "./styles/theme";
import Promotions from "./Components/Promotions";
import Products from "./Components/Products";
import { Box } from "@mui/system";
import Footer from "./Components/footer";
import AppDrawer from "./styles/Drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./Components/Search";

function App() {
  return (
   <ThemeProvider theme={theme}>
    <Container
    maxWidth = 'xl'
    >
      <UIProvider>
      <Appbar />
      <Banner />
      <Promotions />
      <Box display={'flex'} justifyContent={'center'} sx={{p:4}}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Products />
      <Footer />
      <AppDrawer />
      <SearchBox />
      </UIProvider>
    </Container>
    </ThemeProvider>
  );
}

export default App;
