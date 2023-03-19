import MessagePage from "./Screens/MessageScreen/MessagesPage";
import './App.sass'
import Navbar from "./Components/Navbar/Navbar";

export default function App()
{
    return(
        <div className='app-container'>
            <Navbar />
            <MessagePage />
        </div>
    )
}