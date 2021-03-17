import './App.css';
import ReactPlayer from 'react-player'
import Student, { BlockText } from './components/Student'
import Container from './components/Container'
import { Checkbox } from 'antd';

function App() {
  const onPause = () => {
    console.log('Hola me he parado')
  }

  const onChange = (e) => {
    console.log(e.target.checked)
  }

  return (
    <div className="App">
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls onPause={onPause} />

      <Student name="Mario" gender="Male" ironhacker>
        <p>Hola que tal</p>
      </Student>

      <Student name="Carlos" gender="Male" />

      <Student />

      <BlockText field="Prueba" value="prueba" />

      <Checkbox onChange={onChange}>Checkbox</Checkbox>

      <Container color="#123456" />
      <Container />
    </div>
  );
}

export default App;
