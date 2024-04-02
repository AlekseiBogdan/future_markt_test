import { useState } from 'react'

import '../styles/consultMenu.css'
import Button from './Button'

function ConsultMenu(props) {
    const [validation, setValidation] = useState(true)

    const validate = () => {
        const localNames = ['name', 'number', 'policy']
        const inputs = document.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'text' && !inputs[i].value) {
                setValidation(false)
            }
            else if (inputs[i].type === 'checkbox' && !inputs[i].checked) {
                setValidation(false)
            }
            else {
                setValidation(true)
                localStorage.setItem(localNames[i], inputs[i].value); 
            }
        }
    }

    return (props.trigger) ? (
        <div className='popup'>
            <div id='feedback'>
                <button className='closeBtn' onClick={() => props.setTrigger(false)}>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.70711" y1="1.69853" x2="32.1127" y2="32.1041" stroke="white" strokeOpacity="0.8" strokeWidth="2"/>
                        <line x1="1.29289" y1="31.6984" x2="31.6985" y2="1.29282" stroke="white" strokeOpacity="0.8" strokeWidth="2"/>
                    </svg>
                </button>
                <h2 id='popupHeader'>Закажите обратный звонок</h2>
                <div id='formWrapper'>
                    <form>
                        <input type='text' placeholder='ИМЯ' />
                        <input type='tel' placeholder='ТЕЛЕФОН'/>
                        <label id='checkbox'>
                            <input type='checkbox' />
                            <span id='customCheckbox'>
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L10.75 20L22 1" stroke="white"/> 
                                </svg>
                            </span>
                            <span>Согласен на сохранение и обработку персональных данных</span>
                        </label>
                    </form>
                    <Button text='Заказать обратный звонок' color='transparent' svgFill='#FFF' onClick={validate}/>
                    <span id='warning'>{validation ? '' : 'Заполните все поля, чтобы продолжить'}</span>
                </div>
            </div>
        </div>
    ) : "";
}

export default ConsultMenu