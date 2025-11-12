import DefaultLayout from "./layouts/default-layout";
import { LandingPage } from "./pages";
import { Toaster } from "sonner";

function App() {
  return (
    <DefaultLayout>
      <Toaster />
      <LandingPage />
    </DefaultLayout>
  );
}

export default App;
