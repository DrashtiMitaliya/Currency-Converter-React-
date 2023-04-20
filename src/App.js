
import './App.css';
import FormInput from './Components/FormInput';
import Header from './Components/Header';
import Heading from './Components/Heading';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Heading />
        <FormInput />
      </ChakraProvider>

    </div>
  );
}

export default App;

