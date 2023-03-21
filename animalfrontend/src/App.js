import './App.css';
import styled from 'styled-components'
import Inpurdrop from './components/Inpurdrop';
import Outputdrop from './components/Outputdrop';
function App() {

  return (
    <Appcontainer>
      <Maincontainer>
        <Inpurdrop />
        <Outputdrop />
      </Maincontainer>
    </Appcontainer>
  );
}
const Appcontainer=styled.div`
width: 100%;
`
const Maincontainer=styled.div`
width: 100%;
height: 50vh;
padding: 2rem;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export default App;
