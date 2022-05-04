import {useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button} from "reactstrap";
import Dice from "./components/Dice"

function App() {
  const [size, setSize] = useState(6);
  const [dice1, setDice1] = useState(6);
  return (
    <Container>
      <Dice size={size} rollHandler={(val) => setDice1(val)}/>
      <Dice size={size} />
      <Dice size={size} />
      <Dice size={size} />
      <Button onClick={() => {setSize(20)}}>20</Button>
      <Button onClick={() => {setSize(10)}}>10</Button>
      <p>{dice1}</p>
    </Container>
  );
}

export default App;
