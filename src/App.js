import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    // <Router>
    //   <Header/>
    //   <main className="py-3">
    //     <Container>
    //       <Route path='/login' component={LoginScreen} /> 
    //     </Container>
    //   </main>
    //   <Footer/>
    // </Router>
    <div>
      <Header/>
      My App
      <Footer/>
    </div>
  );
}

export default App;
