import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// !https://the-react-quiz-swart.vercel.app/ **DEMO

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
function App() {
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Header />
  </QueryClientProvider>;
}

export default App;
