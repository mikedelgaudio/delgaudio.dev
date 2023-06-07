import { Route, Router } from 'preact-router';
import Header from './components/header';

// Code-splitting is automated for `routes` directory
import { useTheme } from './hooks/theme.hook';
import Home from './routes/home';
import Profile from './routes/profile';

const App = () => {
  useTheme();

  return (
    <>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/profile/" component={Profile} user="me" />
        </Router>
      </main>
    </>
  );
};

export default App;
