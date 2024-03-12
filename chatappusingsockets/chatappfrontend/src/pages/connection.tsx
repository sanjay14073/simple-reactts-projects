
import { SocketContext} from "../context/socketContext";
import MainPage from "./mainPage";
import { io,Socket} from "socket.io-client";
function createConnection(): Socket {
    const URL: string = "http://localhost:3000";
    const sock: Socket = io(URL);
   
    return sock;
}
const Component:React.FC=()=>{
    return (
    <>
    <SocketContext.Provider value={createConnection()}>
        <MainPage/>
    </SocketContext.Provider>
    </>
    );
}
export default Component;