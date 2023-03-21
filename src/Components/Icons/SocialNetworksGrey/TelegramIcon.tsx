import {useState} from "react";
import {IconPropsType} from "./VKIcon";
import {useAppDispatch} from "../../../store/dispatchHook";
import {addPlatform, removePlatform} from "../../../store/slices/messageSlice";

export default function TelegramIcon({iconType}: IconPropsType) {
    const dispatch = useAppDispatch()
    const [clicked, setClicked] = useState<boolean>(false)
    return (
        <>
            {
                iconType === 'filter' ?
                    <>
                        {clicked ?
                            <svg onClick={() => {
                                setClicked(!clicked)
                                dispatch(removePlatform("tg"))
                            }} width="28" height="28" viewBox="0 0 28 28"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="12.25" fill="url(#paint0_linear_20_167098)"/>
                                <path
                                    d="M20.1132 8.93269C20.2223 8.2279 19.5522 7.67161 18.9256 7.94675L6.44422 13.4267C5.99482 13.624 6.0277 14.3047 6.49378 14.4532L9.06775 15.2728C9.55901 15.4293 10.091 15.3484 10.5199 15.052L16.3231 11.0427C16.4981 10.9218 16.6888 11.1707 16.5393 11.3248L12.3621 15.6316C11.9569 16.0493 12.0373 16.7573 12.5247 17.0629L17.2016 19.9958C17.7261 20.3247 18.401 19.9942 18.4991 19.3604L20.1132 8.93269Z"
                                    fill="white"/>
                                <defs>
                                    <linearGradient id="paint0_linear_20_167098" x1="14" y1="1.75" x2="14" y2="26.25"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#37BBFE"/>
                                        <stop offset="1" stopColor="#007DBB"/>
                                    </linearGradient>
                                </defs>
                            </svg> :

                            <svg onClick={() => {
                                setClicked(!clicked)
                                dispatch(addPlatform("tg"))
                            }} width="28" height="28" viewBox="0 0 28 28"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="12.25" fill="#A8B4BD"/>
                                <path
                                    d="M20.1132 8.93269C20.2223 8.2279 19.5522 7.67161 18.9256 7.94675L6.44422 13.4267C5.99482 13.624 6.0277 14.3047 6.49378 14.4532L9.06775 15.2728C9.55901 15.4293 10.091 15.3484 10.5199 15.052L16.3231 11.0427C16.4981 10.9218 16.6888 11.1707 16.5393 11.3248L12.3621 15.6316C11.9569 16.0493 12.0373 16.7573 12.5247 17.0629L17.2016 19.9958C17.7261 20.3247 18.401 19.9942 18.4991 19.3604L20.1132 8.93269Z"
                                    fill="white"/>
                            </svg>}
                    </> :
                    <svg onClick={() => setClicked(!clicked)} width="28" height="28" viewBox="0 0 28 28" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="12.25" fill="url(#paint0_linear_20_167098)"/>
                        <path
                            d="M20.1132 8.93269C20.2223 8.2279 19.5522 7.67161 18.9256 7.94675L6.44422 13.4267C5.99482 13.624 6.0277 14.3047 6.49378 14.4532L9.06775 15.2728C9.55901 15.4293 10.091 15.3484 10.5199 15.052L16.3231 11.0427C16.4981 10.9218 16.6888 11.1707 16.5393 11.3248L12.3621 15.6316C11.9569 16.0493 12.0373 16.7573 12.5247 17.0629L17.2016 19.9958C17.7261 20.3247 18.401 19.9942 18.4991 19.3604L20.1132 8.93269Z"
                            fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_20_167098" x1="14" y1="1.75" x2="14" y2="26.25"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#37BBFE"/>
                                <stop offset="1" stopColor="#007DBB"/>
                            </linearGradient>
                        </defs>
                    </svg>
            }
        </>
    )

}