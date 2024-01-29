import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import NavigationBar from './components/navigationBar';
import { ThemeProvider } from './contexts/theme.context';
import Home from './routes/home';
import Projects from './routes/projects';

function App() {
  return (
    <div class="text-black bg-white dark:text-white dark:bg-cod-gray-950 min-w-fit min-h-[100dvh]">
      <div class="antialiased flex justify-center p-8">
        <div class="flex flex-col max-w-2xl w-full">
          <ThemeProvider>
            <NavigationBar />
          </ThemeProvider>
          <main>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/projects" component={Projects} />
            </Router>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
