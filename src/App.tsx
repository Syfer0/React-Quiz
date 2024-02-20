import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserList from "./UserList";
import ErrorBoundary from "./ErrorBoundary";
// !https://the-react-quiz-swart.vercel.app/ **DEMO

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Header />
      <ErrorBoundary />
      <UserList />
      <ErrorBoundary />
    </QueryClientProvider>
  );
}

export default App;
