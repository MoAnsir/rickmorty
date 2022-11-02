import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Characters from "./components/Characters";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center my-4">Rick & Morty</h1>
        <Characters />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
