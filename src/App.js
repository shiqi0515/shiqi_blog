import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import theme from './styles/theme';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detail/:type/:id" element={<DetailPage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;