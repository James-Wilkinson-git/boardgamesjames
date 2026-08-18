import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BrainGeekPage } from "./pages/BrainGeekPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ConsultingPage } from "./pages/ConsultingPage";
import { HomePage } from "./pages/HomePage";
import { MartyPage } from "./pages/MartyPage";
import { MediaPage } from "./pages/MediaPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="consulting" element={<ConsultingPage />} />
        <Route path="marty" element={<MartyPage />} />
        <Route path="brain-geek-guide" element={<BrainGeekPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
