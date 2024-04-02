import '../styles/App.css';

import {useState} from 'react'
import mentor from '../images/mentor.png';
import Nav from './navigation.js';
import TextContent from './textContent.js';
import Button from './Button.js';
import BottomText from './bottomText.js';
import ConsultMenu from './consultMenu.js'

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
  let month = curDate.getMonth() + 1 //Months are being returned in range 0-11
  let day = curDate.getDate()
  let sum = year.toString().split('').map(Number)
  sum.push(month, day)
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
        <TextContent text='Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий'/>
      </section>
      <div id='buttons'>
        <Button text='Записаться на консультацию' color='white' svgFill="#0B3461" onClick={showPopup}/>
        <Button text='Бесплатная консультация' color='transparent' svgFill='#FFF' onClick={showPopup}/>
      </div>
      <div id='bottomInfo'>
        <BottomText data={date} text='техник для достижения целей'/>
        <BottomText data={Math.round(GBP)} text='увеличение личной продуктивности'/>
      </div>
      <ConsultMenu trigger={popup} setTrigger={setPopup}/>
      <img id='mentor' src={ mentor } alt='mentor'/>
    </div>
  );
}

export default App;
