import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <AppRoutes />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}
