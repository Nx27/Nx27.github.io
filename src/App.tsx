import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/RoutesNxbime";
import "./.css/Body.css";
import "./.css/Header.css";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
