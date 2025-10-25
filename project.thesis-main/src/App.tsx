import { Suspense } from "react";
import { useRoutes, Routes, Route, Router } from "react-router-dom";
import Home from "./components/home";
import AttractionsPage from "./pages/AttractionsPage";
import HotelsPage from "./pages/HotelsPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import MapPage from "./pages/MapPage";
import CalendarPage from "./pages/CalendarPage";
import ViewCalendarPage from "./pages/ViewCalendarPage";
import AboutPage from "./pages/AboutPage";
import routes from "tempo-routes";
import DestinationListPage from "./pages/DestinationListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SafetyPage from "./pages/SafetyPage";
import AttractionsDetailsPage from "./components/attractions/AttractionsDetailsPage";
import Recommended from "./pages/Recommended";
import Itineraries from "./pages/Itineraries";
import Saved from "./pages/Saved";
import SavedTouristSpotsList from "./pages/saved/SavedTouristSpotsList";
import SavedRestaurantsList from "./pages/saved/SavedRestaurantsList";
import TourismActivitiesPage from "./pages/TourismActivitiesPage";
import TouristSpotListPage from "./components/tourists-spots/TouristSpotListPage";
import TouristSpotDetailsPage from "./components/tourists-spots/TouristSpotDetailsPage";
import HotelsDetailsPage from "./pages/hotels/HotelsDetailsPage";
import RestaurantsDetailsPage from "./components/dining/RestaurantsDetailsPage";
import EventsPage from "./components/events/EventsPage";
import EventsDetailsPage from "./components/events/EventsDetailsPage";
import CreateYourItinerary from "./pages/itineraries/CreateYourItenerary";
import RecommendedIteneraries from "./pages/itineraries/RecommendedItenearies";
import SavedIteneraries from "./pages/itineraries/SavedIteneraries";
import ViewItenerary from "./pages/itineraries/ViewItenerary";
import TourismActivityDetailsPage from "./components/tourism-activities/TourismActivityDetailsPage";
import DestinationDetailPage from "./components/destinations/DestinationDetailPage";
import Notifications from "./components/notifications/Notifications";
import { events } from "./components/events/eventsData";

import UnifiedMapPage from "./components/map/UnifiedMapPage";









function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
       <Notifications events={events} />
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
          
          <Route path="/unified-map" element={<UnifiedMapPage />} />

          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventsDetailsPage />} />
          

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
          <Route path="/itineraries/:id" element={<Itineraries />} />
          <Route path="/itineraries/recommended" element={<RecommendedIteneraries />} />
          <Route path="/itineraries/create" element={<CreateYourItinerary />} />
          <Route path="/saved-itineraries" element={<SavedIteneraries />} />
          <Route path="/itinerary/:id" element={<ViewItenerary />} />
          
        
          


          <Route path="/tourism-activities" element={<TourismActivitiesPage />} />
          <Route path="/tourism-activities/:id" element={<TourismActivityDetailsPage />} />
          <Route path="/tourism-activities/:id" element={<TourismActivitiesPage />} />



          <Route path="/saved" element={<Saved />} />
          <Route path="/saved/tourist-spots" element={<SavedTouristSpotsList />} />
          <Route path="/saved/restaurants" element={<SavedRestaurantsList  />} />


          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          

        
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;