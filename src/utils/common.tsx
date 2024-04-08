import { getApiKey } from "./getkey";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Retrieves and returns a specific generative model from the Google Generative AI service.
 *
 * @return {GenerativeModel | null} The generative model retrieved, or null if not successful.
 */
function getGenModel() {
    let genAI: GoogleGenerativeAI | null = null;
    let genModel: GenerativeModel | null = null;

    genAI = new GoogleGenerativeAI(getApiKey());

    genModel = genAI.getGenerativeModel({ model: 'gemini-pro' }, { baseUrl: 'https://gemini.kierankihn.com' });

    return genModel;
}

export { getGenModel };