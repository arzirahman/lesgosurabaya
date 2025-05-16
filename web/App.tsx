import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Layout from "./components/Layout";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Event = lazy(() => import('./pages/Event'));
const Explore = lazy(() => import('./pages/Explore'));
const ExploreCategory = lazy(() => import('./pages/Explore/ExploreCategory'));
const ExploreDetail = lazy(() => import('./pages/Explore/ExploreDetail'));

const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Profile = lazy(() => import('./pages/Profile'));
const LearnMore = lazy(() => import('./pages/LearnMore'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          } />
          <Route path="/event" element={
            <Suspense fallback={<Loading />}>
              <Event />
            </Suspense>
          } />
          <Route path="/learn-more" element={
            <Suspense fallback={<Loading />}>
              <LearnMore />
            </Suspense>
          } />
          <Route path="/explore" element={
            <Suspense fallback={<Loading />}>
              <Explore />
            </Suspense>
          } />
          <Route path="/explore/:category" element={
            <Suspense fallback={<Loading />}>
              <ExploreCategory />
            </Suspense>
          } />
          <Route path="/explore/detail/:name" element={
            <Suspense fallback={<Loading />}>
              <ExploreDetail />
            </Suspense>
          } />
          <Route path="/sign-up" element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          } />
          <Route path="/sign-in" element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          } />
          <Route path="/profile" element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App