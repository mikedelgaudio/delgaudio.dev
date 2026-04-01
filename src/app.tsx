import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import FooterDroids from './components/footerDroids';
import NavigationBar from './components/navigationBar';
import { ThemeProvider } from './contexts/theme.context';
import Home from './routes/home/Home';
import NotFound from './routes/notfound';
import Projects from './routes/projects';

function App() {
  return (
    <ThemeProvider>
      <div class="text-on-surface bg-surface min-h-[100dvh] relative z-0 overflow-hidden flex flex-col">
        <div class="antialiased flex justify-center p-8 flex-1">
          <div class="flex flex-col max-w-[80ch] w-full">
            <NavigationBar />
            <main>
              <Router>
                <Route path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route default component={NotFound} />
              </Router>
            </main>
          </div>
        </div>
        <FooterDroids />
      </div>
    </ThemeProvider>
  );
}

export default App;
