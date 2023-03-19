import './Button.sass'

interface ButtonProps{
    text: string,
    colorful: boolean,
}

export default function Button({text, colorful}: ButtonProps){
    return(
        <div className='button-container'>
            {colorful ? <div className='button-container-colorful'><span>{text}</span></div>
                : <div className='button-container-not-colorful'><span>{text}</span></div> }
        </div>
    )
}