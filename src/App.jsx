import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AuthorPage from "./pages/AuthorPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/posts/:slug" element={<PostPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
