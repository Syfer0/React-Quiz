import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserList from "./UserList";
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
      <UserList />
    </QueryClientProvider>
  );
}

export default App;
