import { Container } from 'react-bootstrap';

// components
import Header from './components/Header';
import SearchInput from './components/SearchInput';

// styles
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <Container>
        <SearchInput />
      </Container>
    </>
  );
}

export default App;
