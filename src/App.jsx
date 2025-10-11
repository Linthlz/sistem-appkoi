import { BrowserRouter, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppRoutes from "./routes/AppRoutes";
import { AnimatePresence } from "framer-motion";

const AppContent = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <div key={location.pathname}>
        <AppRoutes />
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}
