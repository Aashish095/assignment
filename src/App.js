import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'

import LoginScreen from './screens/LoginScreen'
// import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import RegisterScreen from './screens/RegisterScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/productlist' component={ProductListScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
