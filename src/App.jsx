import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CartProvider } from "../src/features/products/store/cart.jsx";
import { AppRouterProvider } from "./routes/provider"
import { ToastContainer } from "react-toastify"

function App() {
  const queryClient =  new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AppRouterProvider />
        <ToastContainer />
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
