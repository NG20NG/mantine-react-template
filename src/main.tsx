import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
//
//
//
const Index = () => {
  return (
    <StrictMode>
      <MantineProvider theme={{}} forceColorScheme="dark">
        <App />
      </MantineProvider>
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Index />);
