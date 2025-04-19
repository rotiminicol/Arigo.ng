import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/home/HomePage";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import EmailVerification from "./components/Verification";
import ProfilePage from "./pages/MyAccount";
import Phones from "./pages/Phones";
import Laptops from "./pages/Laptops";
import Gamers from "./pages/Gamers";
import BuyOnCredit from "./pages/BuyOnCredit";
import BuySellSwap from "./pages/BuySellSwap";
import InvestmentsPage from "./pages/Investment";
import Giveaway from "./pages/Giveaway";
import MyAccount from "./pages/MyAccount";
import Settings from "./pages/Setting";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { Tablets } from "lucide-react";

import Like from "./components/Like";
import Brand from "./components/Brand";
import Deals from "./components/Deals";
import About from "./components/About";
import Cart from "./components/Cart";
import SearchResults from "./components/Search";


// Placeholder pages for dynamic routes
const CategoryPage = () => <div>Category Page</div>;
const ProductPage = () => <div>Product Page</div>;
const BrandPage = () => <div>Brand Page</div>;

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-y-auto">
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={authUser ? <Navigate to="/dashboard" /> : <LandingPage />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/verify"
          element={!authUser ? <EmailVerification /> : <Navigate to="/dashboard" />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/brands"
          element={authUser ? <Brand /> : <Navigate to="/login" />}
        />
        <Route
          path="/deals"
          element={authUser ? <Deals /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={authUser ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/like"
          element={authUser ? <Like /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={authUser ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/search"
          element={authUser ? <SearchResults /> : <Navigate to="/login" />}
        />
        <Route
          path="/category/:category/:subcategory"
          element={authUser ? <CategoryPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:id"
          element={authUser ? <ProductPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/brand/:brand"
          element={authUser ? <BrandPage /> : <Navigate to="/login" />}
        />

        {/* More Authenticated Routes */}
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/phones"
          element={authUser ? <Phones /> : <Navigate to="/login" />}
        />
        <Route
          path="/laptops"
          element={authUser ? <Laptops /> : <Navigate to="/login" />}
        />
        <Route
          path="/tablets"
          element={authUser ? <Tablets /> : <Navigate to="/login" />}
        />
        <Route
          path="/gamers"
          element={authUser ? <Gamers /> : <Navigate to="/login" />}
        />
        <Route
          path="/buy-on-credit"
          element={authUser ? <BuyOnCredit /> : <Navigate to="/login" />}
        />
        <Route
          path="/buy-sell-swap"
          element={authUser ? <BuySellSwap /> : <Navigate to="/login" />}
        />
        <Route
          path="/investments"
          element={authUser ? <InvestmentsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/giveaway"
          element={authUser ? <Giveaway /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-account"
          element={authUser ? <MyAccount /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={authUser ? <Settings /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
