import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

const SocketContext=createContext<Socket|undefined>(undefined);

function useSocketContext(){
    const context=useContext(SocketContext);
    if(context===undefined){
        throw new Error("make sure that eveythind is correct");
    }
    return context;
}
export {useSocketContext,SocketContext};