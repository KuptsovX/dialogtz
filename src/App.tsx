import MessagePage from "./Screens/MessageScreen/MessagesPage";
import './App.sass'
import Navbar from "./Components/Navbar/Navbar";
import {useEffect} from "react";
import {loginRequest} from "./store/requests/messageRequest";
import {useAppDispatch} from "./store/dispatchHook";

export default function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loginRequest())
    })
    return(
        <div className='app-container'>
            <Navbar />
            <MessagePage />
        </div>
    )
}