import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Header from './components/header';
import { useTheme } from './hooks/theme.hook';
import Home from './routes/home';

function App() {
  useTheme();

  return (
    <div class="text-black bg-white dark:text-white dark:bg-cod-gray-950">
      <div class="antialiased flex justify-center p-8">
        <div class="flex flex-col max-w-2xl">
          <Header />
          <main>
            <Router>
              <Route path="/" component={Home} />
            </Router>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
