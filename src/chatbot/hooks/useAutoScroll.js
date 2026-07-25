import { useEffect, useRef } from "react";

function useAutoScroll(messages = [], typing = false) {

    const bottomRef = useRef(null);

    useEffect(() => {

        // Don't scroll when showing the welcome screen
        if (messages.length === 0) {
            return;
        }

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });

    }, [messages, typing]);

    return bottomRef;
}

export default useAutoScroll;