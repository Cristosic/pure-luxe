import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage/CreateNewPasswordPage";
import EmailSentPage from "./pages/EmailSentPage/EmailSentPage";
import ForgotPaswordPage from "./pages/ForgotPaswordPage/ForgotPaswordPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import MyAddressesPage from "./pages/MyAddressesPage/MyAddressesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/TermsAndConditionsPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import WishListPage from "./pages/WishListPage/WishListPage";
import PrivacyAndPolicyPage from "./pages/PrivacyAndPolicyPage/PrivacyAndPolicyPage";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
  return (
    <div>
      <NavMenu />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/forgot-password" element={<ForgotPaswordPage />} />
          <Route path="/email-sent" element={<EmailSentPage />} />
          <Route
            path="/ceate-new-paswort"
            element={<CreateNewPasswordPage />}
          />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/adress" element={<MyAddressesPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/product/:carCode" element={<PrivacyAndPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
