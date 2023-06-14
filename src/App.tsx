import { Route } from 'wouter'
import ComicsScreen from './screens/ComicsScreen'

export default function App() {
  return (
    <div className="bg-white">
      <header></header>
      <main>
        <Route path="/">
          <ComicsScreen />
        </Route>
        <Route path="/comics/p/:page">
          {(params) => <ComicsScreen page={params.page} />}
        </Route>
      </main>
      <footer></footer>
    </div>
  )
}
