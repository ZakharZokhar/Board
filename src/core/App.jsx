import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

{/*
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from '../shared/GlobalStyles';
const store = configureStore();
*/}


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
{/*<Provider store={store}>
        <GlobalStyles />
        <Header />
        <BrowserRouter>
          <Main>
            <Routes />
          </Main>
        </BrowserRouter>
        <Footer />
      </Provider>*/}