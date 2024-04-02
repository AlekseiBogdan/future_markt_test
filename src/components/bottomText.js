import '../styles/bottomText.css'


function BottomText({data, text}) {
    return (
        <div className='bottomInfo'>
            <h2>{data}</h2>
            <span className='description'>{text}</span>
        </div>
    )
}

export default BottomText


