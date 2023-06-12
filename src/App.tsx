import { Route } from 'wouter'

import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <>
      <header>
        
      </header>
      <main>
        <Route path="/">
          <HomeScreen />
        </Route>
      </main>
      <footer>

      </footer>
    </>
  );
}