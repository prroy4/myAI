import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s marketing research AI assistant. Please include a specific research topic/question, type (quantitative vs. qualitative), and objectives for your research when asking for a structured research plan! I can also chat about best practices in marketing research, refine questions, or simulate focus groups.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Sorry, the message was too long! Please try shortening it.`;
export const HISTORY_CONTEXT_LENGTH: number = 10; // Number of messages to use for context when generating a response
