let GOOGLE_API_KEY: string | null = null;

function askApiKey() {
    return GOOGLE_API_KEY = prompt('请输入您的 Gemini API 密钥') || '';
}

function getApiKey(): string {
    return GOOGLE_API_KEY || askApiKey();
}

export { getApiKey };