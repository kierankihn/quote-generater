import "./app.css"
import "@chatui/core/dist/index.css";
import { sendMessage } from "./components/send.tsx";
import Chat, { Bubble, MessageProps, useMessages } from '@chatui/core';

/**
 * Handles sending messages and updating the message display.
 * 
 * @param {void}
 * @return {JSX.Element} the Chat component
 */
function App() {

    const { messages, appendMsg, setTyping } = useMessages([]);

    async function handleSend(type: string, val: string) {
        if (type === "text" && val.trim()) {
            appendMsg({
                type: "text",
                content: { text: val },
                position: "right"
            });

            setTyping(true);

            sendMessage(val).then((result) => {
                appendMsg({
                    type: "text",
                    content: { text: result },
                    position: "left"
                });
            });
        }
    }

    /**
     * A function that renders the message content.
     *
     * @param {MessageProps} msg - the message object containing the content
     * @return {JSX.Element} the Bubble component with the message content
     */
    function renderMessageContent(msg: MessageProps) {
        const { content } = msg;
        return <Bubble content={content.text} />;
    }

    return (
        <div className="app">
            <Chat
                navbar={{ title: "名人名言生成器" }}
                messages={messages}
                renderMessageContent={renderMessageContent}
                onSend={handleSend}
                placeholder="生成一个「爱因斯坦」的关于「奋斗」的名言"
            />
        </div>
    );
}

export default App
