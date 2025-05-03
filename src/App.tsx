
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MusicPlayer from "./components/MusicPlayer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import LoveLetter from "./pages/LoveLetter";
import Favorites from "./pages/Favorites";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/letter" element={<LoveLetter />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MusicPlayer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
