import '../styles/button.css';

function Button(props) {
    const classes = `${props.color} ${props.device}`
    return (
        <button onClick={props.onClick} className={classes}>
            <span>{props.text}</span>
            <svg id='line' width="2" height="71" viewBox="0 0 2 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="-4.37114e-08" x2="1" y2="71" stroke={props.svgFill} strokeWidth="2"/>
            </svg>
            <svg id='arrow' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke={props.svgFill} strokeWidth="2"/>
            </svg>
        </button>
    )
}

export default Button