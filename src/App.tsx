
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import Pharmacy from "./pages/Pharmacy";
import LabTests from "./pages/LabTests";
import HealthRecords from "./pages/HealthRecords";
import Insurance from "./pages/Insurance";
import Careers from "./pages/Careers";
import BloodBank from "./pages/BloodBank";
import Emergency from "./pages/Emergency";
import BookAppointment from "./pages/BookAppointment";
import Profile from "./pages/Profile";
import DoctorProfile from "./pages/DoctorProfile";
import Cart from "./pages/Cart";
import AddToCart from "./pages/AddToCart";
import BookTest from "./pages/BookTest";
import ApplyJob from "./pages/ApplyJob";
import ComparePlans from "./pages/ComparePlans";
import GetQuote from "./pages/GetQuote";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/book-test" element={<BookTest />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route path="/compare-plans" element={<ComparePlans />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/lab-tests" element={<LabTests />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blood-bank" element={<BloodBank />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
