import { Suspense } from "react";
import { useRoutes, Routes, Route, Router } from "react-router-dom";
import Home from "./components/home";
import AttractionsPage from "./pages/AttractionsPage";
import HotelsPage from "./pages/HotelsPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import MapPage from "./pages/MapPage";
import EventsPage from "./pages/EventsPage";
import EventsDetalilsPage from "./pages/EventsDetailsPage";
import CalendarPage from "./pages/CalendarPage";
import ViewCalendarPage from "./pages/ViewCalendarPage";
import AboutPage from "./pages/AboutPage";
import routes from "tempo-routes";
import DestinationListPage from "./pages/DestinationListPage";
import DestinationDetailPage from "./pages/destinations/DestinationDetailPage";
import LoginPage from "./pages/LoginPage";
import SafetyPage from "./pages/SafetyPage";
import AttractionsDetailsPage from "./components/attractions/AttractionsDetailsPage";
import Recommended from "./pages/Recommended";
import Itineraries from "./pages/Itineraries";
import UpcomingItinerary from "./pages/itineraries/UpcomingItinerary";
import Saved from "./pages/Saved";
import SavedTouristSpotsList from "./pages/saved/SavedTouristSpotsList";
import SavedRestaurantsList from "./pages/saved/SavedRestaurantsList";
import TourismActivitiesPage from "./pages/TourismActivitiesPage";
import DayPlanner from "./pages/itineraries/DayPlanner";
import PastTrips from "./pages/itineraries/PastTrips";
import TouristSpotListPage from "./components/tourists-spots/TouristSpotListPage";
import TouristSpotDetailsPage from "./components/tourists-spots/TouristSpotDetailsPage";
import HotelsDetailsPage from "./pages/hotels/HotelsDetailsPage";
import RestaurantsDetailsPage from "./pages/restaurants/RestaurantsDetailsPage";






function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/attractions/:id" element={<AttractionsDetailsPage />} />

          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<HotelsDetailsPage />} />

          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/:id" element={<RestaurantsDetailsPage />} />


          <Route path="/experiences" element={<ExperiencesPage />} />

          <Route path="/map" element={<MapPage />} />

          <Route path="/events" element={<EventsPage />} /> 
          <Route path="/events/:id" element={<EventsDetalilsPage event={undefined} />} />

          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/view-calendar" element={<ViewCalendarPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/destinations" element={<DestinationListPage />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage />} />

          <Route path="/tourist-spots" element={<TouristSpotListPage />} />
          <Route path="/tourist-spots/:id" element={<TouristSpotDetailsPage />} />


          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/recommended" element={<Recommended />} />


          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itineraries/upcoming" element={<UpcomingItinerary />} />
          <Route path="/itineraries/day-planner" element={<DayPlanner />} />
          <Route path="/itineraries/past-trips" element={<PastTrips />} />
        
          


          <Route path="/tourism-activities" element={<TourismActivitiesPage />} />
          <Route path="/tourism-activities/:id" element={<TourismActivitiesPage />} />



          <Route path="/saved" element={<Saved />} />
          <Route path="/saved/tourist-spots" element={<SavedTouristSpotsList />} />
          <Route path="/saved/restaurants" element={<SavedRestaurantsList  />} />


          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;