import React from 'react';
import { Route, Router } from 'wouter';
import { AboutPage } from '../Pages/AboutPage';
import { HomePage } from '../Pages/HomePage';
import { DashboardPage } from '../Pages/Dashboard';
import { ForgotPassword } from '../Pages/ForgotPassword';
import { LoginPage } from '../Pages/LoginPage.tsx';
import { NotFoundPage } from '../Pages/Notfound';

export const Routes: React.FC = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/login" component={LoginPage} />
        <Route path="/*" component={NotFoundPage} />
      </Router>
    </div>
  );
};
