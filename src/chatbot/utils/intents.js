import { keywords } from "./keywords";

export function detectIntent(message) {

    const text = message.toLowerCase();

    for (const intent in keywords) {

        const words = keywords[intent];

        if (words.some(word => text.includes(word))) {

            return intent;

        }

    }

    return "unknown";

}