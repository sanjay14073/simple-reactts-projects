import React, { useEffect, useState } from "react";
import { useSocketContext } from "../context/socketContext";
import MessageTile from "../components/messagetile";

interface ServerMessage {
    message: string;
}

interface Message {
    content: string;
}

const MainPage: React.FC = () => {
    const socket = useSocketContext();
    const [mymessages, setMymessages] = useState<Message[]>([]);
    const [msgContent, setMsgContent] = useState<string>("");

    function sendMessages(m: Message) {
        socket.emit('dispatchMessage', m);
    }
    useEffect(()=>{
      async function msg() {
        try{
        let response=await fetch('http://localhost:3000/messages');
        let data=await response.json();
        const clientMessages: Message[] = data.map((serverMessage:any) => ({
          content: serverMessage.message,
        }));

      setMymessages(() => [...clientMessages]);
      }catch(e){
        console.log(e)      
      }
      }
      msg();
    },[])
    useEffect(() => {
        const handleGettingMessage = (data: ServerMessage[]) => {
            console.log('Message received:', data);
            const clientMessages: Message[] = data.map((serverMessage) => ({
                content: serverMessage.message,
            }));

            setMymessages(() => [...clientMessages]);
        };

        socket.off('gettingMessage', handleGettingMessage);
        socket.on('gettingMessage', handleGettingMessage);

        return () => {
            socket.off('gettingMessage', handleGettingMessage);
        };
    }, [socket]);

    const handleMessageSend = () => {
        const newMessage: Message = { content: msgContent };
        sendMessages(newMessage);
        setMsgContent(""); // Reset input value
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    value={msgContent}
                    onChange={(event) => setMsgContent(event.target.value)}
                    style={{
                        width: 'calc(100% - 18px)', // Adjust width to leave room for padding
                        padding: '8px',
                        boxSizing: 'border-box',
                        marginRight: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    type="button"
                    onClick={handleMessageSend}
                    style={{
                        marginTop: '8px',
                        padding: '8px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Send Message
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {mymessages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#f0f0f0',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                        }}
                    >
                        <MessageTile content={message.content} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;

