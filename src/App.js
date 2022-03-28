import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';


function App() {
  

  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
           <Route path='/register' component={RegisterScreen} />
           <Route path='/login' component={LoginScreen} /> 
           <Route path='/profile' component={ProfileScreen} /> 
           <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </Router>

  );
}

export default App;
