// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import NxWelcome from './nx-welcome';
import './../../scss/theme.scss';
import SubjectArea from './pages/subject-area';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import ThankYou from './pages/thank-you';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <SubjectArea /> },
    { path: "/subject-area-editing", element: <SubjectArea /> },
    { path: "/subject-area-editing/ask-editor-thank-you", element: <ThankYou /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
