import './Button.sass'

interface ButtonProps{
    text: string,
    colorful: boolean,
    onClick?: () => void
}

export default function Button({text, colorful, onClick}: ButtonProps){
    return(
        <div className='button-container'>
            {colorful ? <div onClick={onClick} className='button-container-colorful'><span>{text}</span></div>
                : <div onClick={onClick} className='button-container-not-colorful'><span>{text}</span></div> }
        </div>
    )
}