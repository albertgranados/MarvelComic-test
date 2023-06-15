import { Route } from 'wouter'
import ComicsScreen from './screens/ComicsScreen'
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar'
import ComicDetailsScreen from './screens/ComicDetailsScreen'

export default function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Route path="/">
          <ComicsScreen />
        </Route>
        <Route path="/comics">
          <ComicsScreen />
        </Route>
        <Route path="/comics/p/:page">
          {(params) => <ComicsScreen currentPage={parseInt(params.page)} />}
        </Route>
        <Route path="/comics/:id">
          {(params) => <ComicDetailsScreen id={parseInt(params.id)} />}
        </Route>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </>
  )
}
