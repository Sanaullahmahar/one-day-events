import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { IndexPage } from "./pages/home";
import { NotFoundPage } from "./pages/errors";
import { AboutUsPage } from "./pages/company";
import { BlogsPage, BlogDetailPage, DefinitionsPage, FaqPage } from "./pages/resources";
import { PrivacyPage } from "./pages/legal";
import { GetQuotePage } from "./pages/quote";
import { ContactPage } from "./pages/support";
import { LoginPage } from "./pages/auth";
import {
  BarMitzvahsPage,
  BirthdayPartyPage,
  ConcertsPage,
  ConferencesPage,
  DancesPage,
  DjPage,
  FestivalCoverPage,
  FestivalInsurancePage,
  FundraiserPage,
  HipHopRapPage,
  PhotographersPage,
  PoliticalEventPage,
  QuinceaneraPage,
  RetreatsPage,
  SportingPage,
  TheaterEventsPage,
  TradeShowsPage,
  VendorsPage,
  VideoShootPage,
  WalksRunsPage,
  WeddingPage,
} from "./pages/events";
import {
  EventPlannersPage,
  InsuranceAgentsPage,
  OtherPartnersPage,
  VenuePartnersPage,
} from "./pages/partners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/definitions" element={<DefinitionsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/events/wedding" element={<WeddingPage />} />
          <Route path="/events/birthday-party" element={<BirthdayPartyPage />} />
          <Route path="/events/concerts" element={<ConcertsPage />} />
          <Route path="/events/vendors" element={<VendorsPage />} />
          <Route path="/events/barmitzvahs" element={<BarMitzvahsPage />} />
          <Route path="/events/dances" element={<DancesPage />} />
          <Route path="/events/festival-insurance" element={<FestivalInsurancePage />} />
          <Route path="/events/fundraiser" element={<FundraiserPage />} />
          <Route path="/events/photographers" element={<PhotographersPage />} />
          <Route path="/events/quinceanera" element={<QuinceaneraPage />} />
          <Route path="/events/sporting" element={<SportingPage />} />
          <Route path="/events/trade-shows" element={<TradeShowsPage />} />
          <Route path="/events/video-shoot" element={<VideoShootPage />} />
          <Route path="/events/conferences" element={<ConferencesPage />} />
          <Route path="/events/dj" element={<DjPage />} />
          <Route path="/events/hip-hop-rap" element={<HipHopRapPage />} />
          <Route path="/events/political-event" element={<PoliticalEventPage />} />
          <Route path="/events/retreats" element={<RetreatsPage />} />
          <Route path="/events/theater-events" element={<TheaterEventsPage />} />
          <Route path="/events/walks-runs" element={<WalksRunsPage />} />
          <Route path="/events/festival-cover" element={<FestivalCoverPage />} />
          <Route path="/get-quote" element={<GetQuotePage />} />
          <Route path="/partners/insurance-agents" element={<InsuranceAgentsPage />} />
          <Route path="/partners/event-planners" element={<EventPlannersPage />} />
          <Route path="/partners/venue-partners" element={<VenuePartnersPage />} />
          <Route path="/partners/other" element={<OtherPartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
