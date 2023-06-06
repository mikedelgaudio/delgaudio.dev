import { Route, Router } from 'preact-router';
import Header from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Profile from './routes/profile';

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
      </Router>
    </main>
  </div>
);

export default App;
