import MessagePage from "./Screens/MessageScreen/MessagesPage";
import './App.sass'
import Navbar from "./Components/Navbar/Navbar";
import {useEffect} from "react";
import {loginRequest, refreshRequest} from "./store/requests/messageRequest";
import {useAppDispatch, useAppSelector} from "./store/dispatchHook";
import {messagesSelector} from "./store/Selectors/messagesSelector";

export default function App() {
    const dispatch = useAppDispatch()
    const {token} = useAppSelector(messagesSelector)

    useEffect(() => {
        dispatch(loginRequest())
        setTimeout(() => dispatch(refreshRequest(token.refreshToken)), 900000)
    }, [dispatch, token.refreshToken])
    return(
        <div className='app-container'>
            <Navbar />
            <MessagePage />
        </div>
    )
}