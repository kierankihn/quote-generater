import { getGenModel } from "../utils/common";


/**
 * Asynchronously sends a message and receives a response from a chatbot model.
 *
 * @param {string} message - The message to be sent to the chatbot model.
 * @return {Promise<string | undefined>} The response message from the chatbot model.
 */
async function sendMessage(message: string): Promise<string | undefined> {

    const genModel = getGenModel();

    if (!genModel) {
        return '错误：请检查您的 Gemini API 密钥是否正确';
    }

    const modelPrompt = '你现在需要扮演一个名人名言生成器，每次我会给你提供一个名人的名字，和名言相关的主题（当然我有可能指定名人的名字或主题为「随机」，或者不指定二者，这意味着你可以不受限制地创作）\n\n如果名人的名字为「随机」，意味着你需要先挑选一个现实中存在的名人，如果不是随机，则意味着你需要按照我给出的名人的名字生成，你需要依照我给出的主题，模仿这位名人的语气和说话习惯，生成一句不存在的名人名言\n\n你的回答中需要将名言用「」括起来，之后放一个破折号（——），破折号之后是名人的名字（「随机」名人的情况下请输出你挑选的名人的名字），你不需要回答其他任何内容，按照格式输出即可\n\n明白了请回答「我明白了」';
    const modelResponse = '我明白了';

    const chat = genModel?.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: modelPrompt }],
            },
            {
                role: "model",
                parts: [{ text: modelResponse }]
            }
        ]
    }
    );


    const result = await chat?.sendMessage(message);
    const response = result?.response;
    const text = response?.text();

    return text;
}

export { sendMessage };