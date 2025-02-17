import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";


const SkillSetFrontend = [
    "Next.js",
    "React",
    "Javascript",
    "jQuery",
    "Styled components",
    "CSS",
    "LESS",
    "HTML",
    "Smarty"
]
const SkillSetBackend = [
    "MongoDB",
    "Node.js",
    "MySQL",
    "PHP"
]

export default function Termi({setIsTermiActive}) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [disableAfterInput, setDisableAfterInput] = useState(false);
    const chatEndRef = useRef(null);
    const [typingStatus, setTypingStatus] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        setMessages([{ role: 'assistant', content: `Hallo, ich bin Termi, der persönliche Assistent von Jonas. Wenn du etwas über ihn erfahren willst, frag gerne mich! Ich kann dir bestimmt helfen!` }]);
    }, []);


    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
 
    useEffect(() => {
    
        if (typingStatus === 'Typing...') {
            const interval = setInterval(() => {
                chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 500);
    
            return () => {
                clearInterval(interval);
            };
        }
    }, [typingStatus]);
    
    useEffect(() => {
        if (error) {
            setMessages([...messages, { role: 'assistant', content: error }]);
            }
    }, [error]);
    


    async function handleSubmit(e) {
        e.preventDefault();
        setDisableAfterInput(true);

        console.log(!input);
        if (!input) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        e.target.reset();
    
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
    
        const data = await response.json();
        const { error } = data;
        setError(error);

        if (data.reply) {
          setDisableAfterInput(false);
          setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
        }



    }




    return (
        <StyledWrapper>
            <TopBar>
                <div>
                    <DownIcon />
                </div>
                <div>
                    <MinusIcon onClick={() => setIsTermiActive(false)}/>
                    <CloseIcon onClick={() => setIsTermiActive(false)} />
                    
                </div>
            </TopBar>
            <StyledTerminal>
                <SideBar>
                    <SideBarOverlay>
                        <h1>
                            Termi
                        </h1>
                        <SideBarFolderWrapper>
                            <FolderStyle margin="0" pmargin="0" fontsize="1rem">
                                <DownIconWithText />
                                <p>
                                    Entwicklung
                                </p>
                            </FolderStyle>
                            <FolderStyle margin="2rem" pmargin="0.5rem 0 0 0" fontsize="15px">
                                <DownIconWithText />
                                <p>
                                    Frontend
                                </p>
                            </FolderStyle>
                            <FolderStyle margin="3rem" pmargin="0 0 0 0" fontsize="14px">
                                <DownIconWithText />
                                <p>
                                    Skillset
                                </p>
                            </FolderStyle>
                            <FolderItems>
                                {SkillSetFrontend.map((skill, index) => {
                                    return <p key={index}>{skill}</p>
                                })}
                            </FolderItems>
                            <FolderStyle margin="2rem" pmargin="0.5rem 0 0 0" fontsize="15px">
                                <DownIconWithText />
                                <p>
                                    Backend
                                </p>
                            </FolderStyle>
                            <FolderStyle margin="3rem" pmargin="0 0 0 0" fontsize="14px">
                                <DownIconWithText />
                                <p>
                                    Skillset
                                </p>
                            </FolderStyle>
                            <FolderItems>
                                {SkillSetBackend.map((skill, index) => (
                                    <p key={index}>{skill}</p>
                                ))}
                            </FolderItems>
                        </SideBarFolderWrapper>
                        <SettingsIcon />
                    </SideBarOverlay>
                </SideBar>
                <ChatWrapper>
                   <h2>Frontend Developer</h2>  
                   <StyledChatBox >
                   {messages.map((message, index) => {
                            if (message.role === 'user') {
                                return (
                                <StyledUserQuestionWrapper key={index}>
                                    <UserQuestion key={index} >
                                        {message.content}
                                    </UserQuestion>
                                    <StyledUserQuestionIcon>
                                        <p>
                                            you
                                        </p>
                                    </StyledUserQuestionIcon>
                                </StyledUserQuestionWrapper>
                                );
                            } else {
                                return (
                                <StyledChatBotAnwserWrapper key={index}>
                                    <RobotIcon />
                                    <ChatbotAnswer key={index}>
                                    <TypeAnimation
                                            sequence={[
                                                () => setTypingStatus('Typing...'),
                                                message.content,
                                                () => setTypingStatus(''),
                                            ]}
                                            speed={65}
                                            cursor={false}
                                            repeat={0}
                                            />
                                    </ChatbotAnswer>
                                </StyledChatBotAnwserWrapper>
                                );
                            }
                        })}
                    <div ref={chatEndRef}></div>
                    </StyledChatBox>  
                   <form onSubmit={handleSubmit}>
                        <label/>
                        <StyledInput placeholder="Tippe hier eine Nachricht ein." onChange={(e) => setInput(e.target.value)} />
                        <StyledSubmitButton type="submit" disabled={typingStatus === ('Typing...')? true : false || disableAfterInput ? true : false}><StyledButton/></StyledSubmitButton>      
                   </form>        
                </ChatWrapper>
            </StyledTerminal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    width: 60rem;
    height: 35rem;
    border-radius: 9px;
`;


const StyledTerminal = styled.div`
    width: 100%;
    height: 100%;
    background-color:rgb(10, 9, 9);
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    display: grid;
    grid-template-columns: 1fr 3.5fr;
  
`;

//TopBar

const TopBar = styled.div`
    width: 100%;
    height: 1.4rem;
    background-color: #2F2F2F;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom: 1px solid rgb(90, 90, 90);
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        margin-left: 1rem;
    }

`;

const DownIcon = styled(IoIosArrowDown)`
    margin-left: 0rem;
    font-size: 1.2rem;
    cursor: pointer;
`;

const DownIconWithText = styled(IoIosArrowDown)`
    margin-left: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`;

const CloseIcon = styled(IoMdCloseCircleOutline)`
    margin-right: 1rem;
    font-size: 1.2rem;
    color: #F80C0C;
    cursor: pointer;
`;

const MinusIcon = styled(FaMinus)`
    margin-right: 1rem;
    cursor: pointer;
    color: #D5FB00;
`;


//Chatbox
const ChatWrapper = styled.div`
    background-color: #5F5F5F;
    border-bottom-right-radius: 9px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;

    h2 {
        color: #12D700;
        text-shadow: 2px 4px 17.7px rgba(204, 255, 201, 0.40);
        margin: 1rem;
        padding-top: 0;
        font-size: 28px;
        font-family: 'Press Start 2P';
        line-height: normal;
        text-align: center;
    }


    form {
           margin-top: 1rem;
        }
`;

const StyledChatBox = styled.div`
    border-radius: 0.5625rem;
    background: #6D6D6D;
    width: 40rem;
    height: 27rem;
    align-items: center;
    position: relative;
    overflow: auto;
`;

const StyledUserQuestionWrapper = styled.div`
    position: relative;
    display: flex;
    margin-left: 8rem;
    justify-content: end;
`;

const UserQuestion = styled.p`
    padding: 0;
    color: #FFFFFF;
    font-size: 12px;
    transition: all 0.1s ease-in-out;
    font-family: 'PT Mono';
    text-align: right;
    margin-right: 3rem;
`;

const StyledUserQuestionIcon = styled.div`
    font-size: 0.7rem;
    color: black;
    background-color: white;
    border-radius: 50%;
    padding: 0.2rem;
    position: absolute;
    top: 0.5rem;
    right: 1rem;

    p {
        padding: 0;
        margin: 0;
    }
`;

const StyledChatBotAnwserWrapper = styled.div`
     width: 70%;
     margin: 1rem;
     display: flex;
     position: relative;
`;

const RobotIcon = styled(RiRobot2Line)`
    font-size: 1.5rem;
    color: black;
    background-color: white;
    border-radius: 50%;
    padding: 0.2rem;
    position: absolute;
    top: 0.5rem;
    left: 1rem;

`;

const ChatbotAnswer = styled.p`
    padding: 0;
    color: #FFFFFF;
    font-size: 12px;
    transition: all 0.1s ease-in-out;
    font-family: 'PT Mono';
    text-align: left;
    margin-left: 3rem;
`;


//Inputfield
const StyledInput = styled.input`
    width: 27.625rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 0.5625rem;
    background: #BBB;
    border: none;
    position: relative;
    padding-left: 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;


    &:focus {
        outline: none;
    }
    `;

const StyledSubmitButton = styled.button`
    border: none;
    background: #BBB;
    color: #000000;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    border-top-right-radius: 0.5625rem;
    border-bottom-right-radius: 0.5625rem;
`;


const StyledButton = styled(FaArrowRight)`

`;





//Sidebar
const SideBarFolderWrapper = styled.div`
    background-color: #2C2C2C;
    margin: 0;
    padding: 1rem 0 1rem 0;

`;

const SideBarOverlay = styled.div`
    h1 {
        color: #EDEDED;
        margin: 1rem;
        font-size: 20px;
    }

`;

const SideBar = styled.div`
    background-color: #1F1F1F;
    border-bottom-left-radius: 9px;
    position: relative;
`;

const FolderStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-left: ${({ margin }) => margin};
    font-size: ${({ fontsize }) => fontsize};
    
    p {
        padding: 0;
        margin: ${({ pmargin }) => pmargin};
    }

`;

const FolderItems = styled.div`
    p {
        margin: 0;
        padding: 0;
        color: #12D700;
        margin-left: 5rem;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.1s ease-in-out;

        &:hover {
            color:rgb(134, 245, 100);
        }
    }
`;

const SettingsIcon = styled(CiSettings)`
    position: absolute; 
    bottom: 0.5rem;
    left: 0.8rem;
    font-size: 2rem;
    cursor: pointer;
`;



