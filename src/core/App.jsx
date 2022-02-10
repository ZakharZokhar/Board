import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyles from '../shared/GlobalStyles';
import AllProjectsContainer from './components/AllProjectsContainer';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <AllProjectsContainer />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
