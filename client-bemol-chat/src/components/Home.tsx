import { useRef, MutableRefObject } from "react";
import { Button, Container, Header, Segment } from "semantic-ui-react";
import {  Outlet, useLocation, useNavigate} from "react-router-dom"

export default function HomePage() {
    const inputRef = useRef() as MutableRefObject<any>
    const navigate = useNavigate()
    const location = useLocation();

    function toChat(room: string) {
        const username = inputRef.current.value;
        if(!username) {
            return 
        }
        navigate(`/chat?name=${username}&room=${room}`)
    }

    return (
        <>
            {location.pathname === '/' ? (
                <>
                <Segment inverted textAlign="center" vertical>
                    <Container text>
                        <Header as='h1'inverted>
                            Bemol Chat
                        </Header>
                        <Header as='h2' inverted content='Fale com um de nossos atendentes' />
                        <input 
                            id="username" 
                            placeholder="Digite seu nome para prosseguir o atendimento"
                            ref={inputRef} 
                        />
                    </Container>
                        <Button color="blue" onClick={() => toChat('A')} size="huge" inverted>
                            Sala A
                        </Button>
                        <Button color="red" onClick={() => toChat('B')} size="huge" >
                            Sala B
                        </Button>
                </Segment>
            </>
            ) : <Container>
                <Outlet />
            </Container>
        }    
        </>
    )
}