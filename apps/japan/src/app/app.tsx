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


const App = () => {
  let routes = useRoutes([
    { path: "/subject-area-editing", element: <SubjectArea /> },
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
