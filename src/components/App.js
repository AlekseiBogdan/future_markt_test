import '../styles/App.css';

import {useState} from 'react'
import MediaQuery from 'react-responsive';

import mentor from '../images/mentor.png';

import Nav from './navigation.js';
import TextContent from './textContent.js';
import Button from './Button.js';
import BottomText from './bottomText.js';
import ConsultMenu from './consultMenu.js'


//simple fetchAPI async function to get GBP value
const getGBP = async () => {
  const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  const json = await res.json()
  return json
}

let GBP = await getGBP()
GBP = GBP['Valute']['GBP']['Value']

const dateSum = () => {
  const curDate = new Date()
  let year = curDate.getFullYear()
  let month = (curDate.getMonth() + 1).toString().split('').map(Number) //Months are being returned in range 0-11
  let day = (curDate.getDate()).toString().split('').map(Number)
  let sum = year.toString().split('').map(Number)
  sum.push(...month);
  sum.push(...day);
  return sum.reduce((num, curNum) => num+curNum, 0)
}

const date = dateSum()

function App() {
  const [popup, setPopup] = useState(false)

  function showPopup() {
    setPopup(true);
  }

  return (
    <div id='wrapper'>
      <Nav />
      <section id='mainContent'>
        <h1 id='mainHeader'>Создаю условия для вашего успеха</h1>
        <MediaQuery minWidth={1024}>
          <TextContent text='Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий'/>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <TextContent text='Ваш успех зависит от ваших действий'/>
        </MediaQuery>
      </section>
      <div id='buttons'>
        <MediaQuery maxWidth={1023}>
          <Button text='Записаться' color='white' device='mobile' svgFill="#0B3461" onClick={ showPopup }/>
          <Button text='Заказать звонок' color='transparent' device='mobile' svgFill='#FFF' onClick={ showPopup }/>
        </MediaQuery>
        <MediaQuery minWidth={1024} maxWidth={1439}>
          <Button text='Получить консультацию' color='white' svgFill="#0B3461" onClick={ showPopup }/>
          <Button text='Бесплатная консультация' color='transparent' svgFill='#FFF' onClick={ showPopup }/>
        </MediaQuery>
        <MediaQuery minWidth={1440}>
          <Button text='Записаться на консультацию' color='white' svgFill="#0B3461" onClick={ showPopup }/>
          <Button text='Бесплатная консультация' color='transparent' svgFill='#FFF' onClick={ showPopup }/>
        </MediaQuery>
      </div>
      <div id='bottomInfo'>
        <MediaQuery maxWidth={1023}>
          <BottomText data={date} text='техники'/>
          <BottomText data={Math.round(GBP)} text='продуктивности'/>
        </MediaQuery>
        <MediaQuery minWidth={1024}>
          <BottomText data={date} text='техник для достижения целей'/>
          <BottomText data={Math.round(GBP)} text='увеличение личной продуктивности'/>
        </MediaQuery>
      </div>
      <ConsultMenu trigger={popup} setTrigger={setPopup}/>
      <img id='mentor' src={ mentor } alt='mentor'/>
    </div>
  );
}

export default App;
