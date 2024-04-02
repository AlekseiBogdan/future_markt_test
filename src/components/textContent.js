import '../styles/textContent.css'

function TextContent({text}) {
    return (
        <div id='descriptionWrapper'>
          <span className='description'>{text}</span>
        </div>
    )
}

export default TextContent