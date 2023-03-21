import {useState} from "react";
import {IconPropsType} from "./VKIcon";
import {useAppDispatch} from "../../../store/dispatchHook";
import {addPlatform, removePlatform} from "../../../store/slices/messageSlice";

export default function OKIcon({iconType}: IconPropsType) {
    const dispatch = useAppDispatch()
    const [clicked, setClicked] = useState<boolean>(false)
    return (
        <>
            {
                iconType === "filter" ?
                    <>
                        {clicked ?
                            <svg onClick={() => {
                                setClicked(!clicked)
                                dispatch(removePlatform("ok"))
                            }} width="28" height="28" viewBox="0 0 28 28"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.75 14C1.75 7.23451 7.23451 1.75 14 1.75C20.7655 1.75 26.25 7.23451 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.23451 26.25 1.75 20.7655 1.75 14Z"
                                      fill="#EE8208"/>
                                <path
                                    d="M17.8887 10.6129C17.8887 12.6046 16.1406 14.2248 13.9901 14.2248C11.8401 14.2248 10.0915 12.6046 10.0915 10.6129C10.0915 8.62056 11.8401 7 13.9901 7C16.1406 7 17.8887 8.62056 17.8887 10.6129ZM15.6043 10.6129C15.6043 9.78804 14.8802 9.11729 13.9901 9.11729C13.1007 9.11729 12.3759 9.78804 12.3759 10.6129C12.3759 11.4371 13.1007 12.1083 13.9901 12.1083C14.8802 12.1083 15.6043 11.4371 15.6043 10.6129Z"
                                    fill="white"/>
                                <path
                                    d="M15.5774 17.1735C16.371 17.006 17.1363 16.715 17.8412 16.3048C18.3747 15.993 18.5354 15.3396 18.1993 14.8452C17.8634 14.3498 17.1587 14.2006 16.6243 14.5123C15.0274 15.4429 12.9714 15.4427 11.3754 14.5123C10.841 14.2006 10.136 14.3498 9.80082 14.8452C9.46469 15.34 9.62494 15.993 10.1584 16.3048C10.8633 16.7146 11.6287 17.006 12.4223 17.1735L10.2426 19.1933C9.79709 19.6066 9.79709 20.2767 10.2431 20.69C10.4663 20.8965 10.7584 20.9998 11.0504 20.9998C11.3429 20.9998 11.6355 20.8965 11.8587 20.69L13.9996 18.7052L16.1424 20.69C16.5879 21.1033 17.3108 21.1033 17.7568 20.69C18.2033 20.2767 18.2033 19.6062 17.7568 19.1933L15.5774 17.1735Z"
                                    fill="white"/>
                            </svg> :
                            <svg onClick={() => {
                                setClicked(!clicked)
                                dispatch(addPlatform("ok"))
                            }} width="28" height="28" viewBox="0 0 28 28"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.75 14C1.75 7.23451 7.23451 1.75 14 1.75C20.7655 1.75 26.25 7.23451 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.23451 26.25 1.75 20.7655 1.75 14Z"
                                      fill="#A8B4BD"/>
                                <path
                                    d="M17.8887 10.6129C17.8887 12.6046 16.1406 14.2248 13.9901 14.2248C11.8401 14.2248 10.0915 12.6046 10.0915 10.6129C10.0915 8.62056 11.8401 7 13.9901 7C16.1406 7 17.8887 8.62056 17.8887 10.6129ZM15.6043 10.6129C15.6043 9.78804 14.8802 9.11729 13.9901 9.11729C13.1007 9.11729 12.3759 9.78804 12.3759 10.6129C12.3759 11.4371 13.1007 12.1083 13.9901 12.1083C14.8802 12.1083 15.6043 11.4371 15.6043 10.6129Z"
                                    fill="white"/>
                                <path
                                    d="M15.5774 17.1735C16.371 17.006 17.1363 16.715 17.8412 16.3048C18.3747 15.993 18.5354 15.3396 18.1993 14.8452C17.8634 14.3498 17.1587 14.2006 16.6243 14.5123C15.0274 15.4429 12.9714 15.4427 11.3754 14.5123C10.841 14.2006 10.136 14.3498 9.80082 14.8452C9.46469 15.34 9.62494 15.993 10.1584 16.3048C10.8633 16.7146 11.6287 17.006 12.4223 17.1735L10.2426 19.1933C9.79709 19.6066 9.79709 20.2767 10.2431 20.69C10.4663 20.8965 10.7584 20.9998 11.0504 20.9998C11.3429 20.9998 11.6355 20.8965 11.8587 20.69L13.9996 18.7052L16.1424 20.69C16.5879 21.1033 17.3108 21.1033 17.7568 20.69C18.2033 20.2767 18.2033 19.6062 17.7568 19.1933L15.5774 17.1735Z"
                                    fill="white"/>
                            </svg>}
                    </> :
                    <svg onClick={() => setClicked(!clicked)} width="28" height="28" viewBox="0 0 28 28" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.75 14C1.75 7.23451 7.23451 1.75 14 1.75C20.7655 1.75 26.25 7.23451 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.23451 26.25 1.75 20.7655 1.75 14Z"
                              fill="#A8B4BD"/>
                        <path
                            d="M17.8887 10.6129C17.8887 12.6046 16.1406 14.2248 13.9901 14.2248C11.8401 14.2248 10.0915 12.6046 10.0915 10.6129C10.0915 8.62056 11.8401 7 13.9901 7C16.1406 7 17.8887 8.62056 17.8887 10.6129ZM15.6043 10.6129C15.6043 9.78804 14.8802 9.11729 13.9901 9.11729C13.1007 9.11729 12.3759 9.78804 12.3759 10.6129C12.3759 11.4371 13.1007 12.1083 13.9901 12.1083C14.8802 12.1083 15.6043 11.4371 15.6043 10.6129Z"
                            fill="white"/>
                        <path
                            d="M15.5774 17.1735C16.371 17.006 17.1363 16.715 17.8412 16.3048C18.3747 15.993 18.5354 15.3396 18.1993 14.8452C17.8634 14.3498 17.1587 14.2006 16.6243 14.5123C15.0274 15.4429 12.9714 15.4427 11.3754 14.5123C10.841 14.2006 10.136 14.3498 9.80082 14.8452C9.46469 15.34 9.62494 15.993 10.1584 16.3048C10.8633 16.7146 11.6287 17.006 12.4223 17.1735L10.2426 19.1933C9.79709 19.6066 9.79709 20.2767 10.2431 20.69C10.4663 20.8965 10.7584 20.9998 11.0504 20.9998C11.3429 20.9998 11.6355 20.8965 11.8587 20.69L13.9996 18.7052L16.1424 20.69C16.5879 21.1033 17.3108 21.1033 17.7568 20.69C18.2033 20.2767 18.2033 19.6062 17.7568 19.1933L15.5774 17.1735Z"
                            fill="white"/>
                    </svg>

            }
        </>
    )
}