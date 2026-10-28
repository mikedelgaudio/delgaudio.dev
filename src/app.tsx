import { Route, Router } from 'preact-router';

import Footer from './components/footer';
import NavigationBar from './components/navigationBar';
import { ThemeProvider } from './contexts/theme.context';
import Home from './routes/home/Home';
import NotFound from './routes/notfound';
import Projects from './routes/projects';

function App({ url }: { url?: string }) {
  return (
    <ThemeProvider>
      <div class="isolate min-h-[100dvh] overflow-x-clip bg-surface text-ink">
        {/* One centered reading column for the nav, page and footer */}
        <div class="mx-auto w-full max-w-[744px] px-6 sm:px-8">
          <NavigationBar />
          <main id="main-content" tabIndex={-1} class="focus:outline-none">
            <Router url={url}>
              <Route path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route default component={NotFound} />
            </Router>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
