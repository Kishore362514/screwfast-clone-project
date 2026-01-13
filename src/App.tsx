import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Products pages
import { HealthcareLeads } from "./pages/products/HealthcareLeads";
import { B2BLeads } from "./pages/products/B2BLeads";
import { ICPTech } from "./pages/products/ICPTech";
import { WhiteLabel } from "./pages/products/WhiteLabel";
// Data pages
import { HealthcareData } from "./pages/data/HealthcareData";
import { TechInstallBase } from "./pages/data/TechInstallBase";
import { B2BCustomData } from "./pages/data/B2BCustomData";
import { IndustryData } from "./pages/data/IndustryData";
import { ProfessionalsData } from "./pages/data/ProfessionalsData";
import { DataEnrichment } from "./pages/data/DataEnrichment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Products routes */}
          <Route path="/healthcare-leads" element={<HealthcareLeads />} />
          <Route path="/b2b-leads" element={<B2BLeads />} />
          <Route path="/icp-tech" element={<ICPTech />} />
          <Route path="/whitelabel" element={<WhiteLabel />} />
          
          {/* Data routes */}
          <Route path="/healthcare-data" element={<HealthcareData />} />
          <Route path="/tech-install-base" element={<TechInstallBase />} />
          <Route path="/b2b-custom-data" element={<B2BCustomData />} />
          <Route path="/industry-data" element={<IndustryData />} />
          <Route path="/professionals-data" element={<ProfessionalsData />} />
          <Route path="/data-enrichment" element={<DataEnrichment />} />
          
          {/* Solutions route */}
          <Route path="/solutions" element={<Services />} />
          
          {/* Resources route */}
          <Route path="/resources" element={<Blog />} />
          
          {/* Company routes */}
          <Route path="/about" element={<Services />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
