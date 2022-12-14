import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import Footer from '../Footer/Footer';
import ProtectedRouteAdmin from '../ProtectedRoute/ProtectedRouteAdmin';
import ProtectedRouteUser from '../ProtectedRoute/ProtectedRouteUser';
import AboutPage from '../AboutPage/AboutPage';
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
import Thanks from '../Thanks/Thanks';
import ViewStudent from '../ViewStudent/ViewStudent';

function App() {
  
  const dispatch = useDispatch();

  // get the user info from user store
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (

    <Router>
      <div>  
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows the about page at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* Protected routes for admins */}
          <ProtectedRouteAdmin
            // logged in shows TeacherHome page else shows LoginPage
            exact
            path="/teacherhome"
          >
            <TeacherHome />
          </ProtectedRouteAdmin>

          <ProtectedRouteAdmin
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRouteAdmin>

          <ProtectedRouteAdmin
            // logged in shows Registration page else shows LoginPage
            exact
            path="/registration"
          >
            <RegisterPage />
          </ProtectedRouteAdmin>

          <ProtectedRouteAdmin
            // logged in shows Edit page else shows LoginPage
            exact
            path="/edit"
          >
            <EditForm />
          </ProtectedRouteAdmin>

          <ProtectedRouteAdmin
            // logged in shows Edit page else shows LoginPage
            exact
            path="/viewstudent"
          >
            <ViewStudent />
          </ProtectedRouteAdmin>

           {/* Protected routes for users */}
          <ProtectedRouteUser
            // logged in shows StudentLanding page else shows LoginPage
            exact
            path="/studentlanding"
          >
            <StudentLanding />
          </ProtectedRouteUser>

          <ProtectedRouteUser
            // logged in shows Breathing page else shows LoginPage
            exact
            path="/breathing"
          >
            <Breathing />
          </ProtectedRouteUser>

          <ProtectedRouteUser
            // logged in shows Emotions page else shows LoginPage
            exact
            path="/emotions"
          >
            <EmotionsView />
          </ProtectedRouteUser>

          <ProtectedRouteUser
            // logged in shows Sensations page else shows LoginPage
            exact
            path="/sensations"
          >
            <SensationsView />
          </ProtectedRouteUser>

          <ProtectedRouteUser
            // logged in shows Review page else shows LoginPage
            exact
            path="/review"
          >
            <Review />
          </ProtectedRouteUser>

          <ProtectedRouteUser
            // logged in shows Thanks page else shows LoginPage
            exact
            path="/thanks"
          >
            <Thanks />
          </ProtectedRouteUser>
          

          <Route
            exact
            path="/login"
          >
            {/* Redirects admins to admin homepage */}
            {user.access_level === 1 &&
            <Redirect to="/teacherhome" />}

            {/* Redirects users to user homepage */}
            {user.access_level === 2 &&
            <Redirect to="/studentlanding" />}

            <LoginPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
};

export default App;

