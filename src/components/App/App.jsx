import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
//import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import TeacherHome from '../TeacherHome/TeacherHome';
import EditForm from '../EditForm/EditForm';
import StudentLanding from '../StudentLanding/StudentLanding';
import Breathing from '../Breathing/Breathing';
import EmotionsView from '../EmotionsView/EmotionsView';
import SensationsView from '../SensationsView/SensationsView';
import Review from '../Review/Review';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows TeacherHome else shows LoginPage
            exact
            path="/teacherhome"
          >
            <TeacherHome />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/registration"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/edit"
          >
            <EditForm />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows TeacherHome else shows LoginPage
            exact
            path="/studentlanding"
          >
            <StudentLanding />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows TeacherHome else shows LoginPage
            exact
            path="/breathing"
          >
            <Breathing />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/emotions"
          >
            <EmotionsView />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/sensations"
          >
            <SensationsView />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/review"
          >
            <Review />
          </ProtectedRoute>
          

          {/* <Route
            exact
            path="/login"
          >
            {user.access_level === 2 ?
              // If the user is already logged in, 
              // redirect to the /teacher-home page
              <Redirect to="/info" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route> */}


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

