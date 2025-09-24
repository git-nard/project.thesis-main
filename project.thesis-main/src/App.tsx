import { Suspense } from "react";
import { useRoutes, Routes, Route, Router } from "react-router-dom";
import Home from "./components/home";
import AttractionsPage from "./pages/AttractionsPage";
import HotelsPage from "./pages/HotelsPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import MapPage from "./pages/MapPage";
import EventsPage from "./pages/EventsPage";
import CalendarPage from "./pages/CalendarPage";
import ViewCalendarPage from "./pages/ViewCalendarPage";
import AboutPage from "./pages/AboutPage";
import routes from "tempo-routes";
import Destinations from "./pages/Destinations";
import LoginPage from "./pages/LoginPage";
import TouristSpotPage from "./pages/TouristSpotPage";




function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/view-calendar" element={<ViewCalendarPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Destinations />} />

          <Route path="/tourist-spots" element={<TouristSpotPage />} />
          <Route path="/tourist-spots/:id" element={<TouristSpotPage />} />



          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;