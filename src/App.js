import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useContext } from "react";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";

import ConditionalRoute from "./components/Router/ConditionalRoute";

import Countdown from "./pages/Countdown";
import Enroll from "./pages/Enroll";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";

import EventInfoContext, {
  EventInfoProvider,
} from "./contexts/EventInfoContext";
import UserContext, { UserProvider } from "./contexts/UserContext";
import { HotelProvider } from "./contexts/HotelContext";
import { PictureProvider } from "./contexts/PictureContext";
import { BookingProvider } from "./contexts/BookingContext";
import { HotelReservationProvider } from "./contexts/HotelReservationContext";

export default function App() {
  return (
    <>
      <ToastContainer />
      <EventInfoProvider>
        <HotelReservationProvider>
          <UserProvider>
            <HotelProvider>
              <Router>
                <Switch>
                  <ConditionalRoute
                    check={ensureCountdownOngoing}
                    path="/"
                    exact
                  >
                    <Countdown />
                  </ConditionalRoute>

                  <ConditionalRoute
                    check={ensureCountdownOver}
                    path="/enroll"
                    exact
                  >
                    <Enroll />
                  </ConditionalRoute>

                  <ConditionalRoute
                    check={ensureCountdownOver}
                    path="/sign-in"
                    exact
                  >
                    <SignIn />
                  </ConditionalRoute>
                  <ConditionalRoute
                    check={ensureCountdownOver}
                    path="/reset-password"
                  >
                    <ResetPassword />
                  </ConditionalRoute>
                  <PictureProvider>
                    <BookingProvider>
                      <ConditionalRoute
                        check={ensureAuthenticated}
                        path="/dashboard"
                      >
                        <Dashboard />
                      </ConditionalRoute>
                    </BookingProvider>
                  </PictureProvider>
                </Switch>
              </Router>
            </HotelProvider>
          </UserProvider>
        </HotelReservationProvider>
      </EventInfoProvider>
    </>
  );
}

function ensureCountdownOngoing() {
  const { eventInfo } = useContext(EventInfoContext);
  const { userData } = useContext(UserContext);

  return [
    { to: "/dashboard", check: () => !userData.token },
    {
      to: "/enroll",
      check: () => dayjs().isBefore(dayjs(eventInfo.startDate)),
    },
  ];
}

function ensureCountdownOver() {
  const { eventInfo } = useContext(EventInfoContext);
  const { userData } = useContext(UserContext);

  return [
    { to: "/dashboard", check: () => !userData.token },
    {
      to: "/",
      check: () => dayjs().isAfter(dayjs(eventInfo.startDate)),
      message: "As inscrições não foram liberadas ainda!",
    },
  ];
}

function ensureAuthenticated() {
  const { userData } = useContext(UserContext);

  return [
    {
      to: "/sign-in",
      check: () => !!userData.token,
      message: "Por favor, faça login!",
    },
  ];
}

// eslint-disable-next-line no-unused-vars
function ensureEventIsFinished() {
  const { eventInfo } = useContext(EventInfoContext);

  return [
    {
      to: "/",
      check: () => dayjs().isAfter(dayjs(eventInfo.endDate)),
      message: "Os certificados não foram liberados ainda!",
    },
  ];
}
