import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import BlogsPage, { BlogDetailPage } from "./pages/BlogsPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import EventPage from "./pages/EventPage.tsx";
import GetQuotePage from "./pages/GetQuotePage.tsx";
import DefinitionsPage from "./pages/DefinitionsPage.tsx";
import PartnerSignupPage from "./pages/PartnerSignupPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/definitions" element={<DefinitionsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/events/:slug" element={<EventPage />} />
          <Route path="/get-quote" element={<GetQuotePage />} />
          <Route path="/partners/:type" element={<PartnerSignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
