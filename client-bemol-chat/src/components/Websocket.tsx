import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom";
import { Socket, io } from "socket.io-client";

type MessagePayload = {
    name: string;
    msg: string;
}

export const Websocket = () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessagePayload[]>([]);
    //const socket = useContext(WebsocketContext);
    const location = useLocation();
    
    const queryParams = useMemo(() => {
        const query = new URLSearchParams(location.search);
        return {
            name: query.get('name'),
            room: query.get('room')
        }
    }, [location])

    const socket = useMemo<Socket>(
        () => io('http://localhost:3000/room'),
        []
    )

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to gateway');
            socket.emit('join', {
                name: queryParams.name,
                room: queryParams.room
            })
            socket.emit('msgToServer', {name: `${queryParams.name} entrou no chat`, msg: 'entrou no chat'})
        })
        socket.on('msgToClient', (data: MessagePayload) => {
            setMessages((prev) => [...prev, data])

        })
        return () => {
            console.log('Unregistering events');
            socket.off('connect');
            socket.off('msgToClient');
        }
    }, [socket, queryParams])

    const sendMsg = () => {
        socket.emit('msgToSever', {name: queryParams.name, msg: value});
        setMessages((prev) => [...prev, {name: queryParams.name!, msg: value}])
        setValue('');
    }

    return <div>
        <div>
            <h1>Chat Bemol</h1>
            <div>{messages.length === 0 ? <div>No messages</div> : <ul>
                    {messages.map((msg,key) => <div>
                        <li key={key}>
                            {msg.name} - {msg.msg}
                        </li>
                    </div>)}</ul>
                }</div>
            <div>
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={sendMsg} >Send</button>
            </div>
        </div>
    </div>
}