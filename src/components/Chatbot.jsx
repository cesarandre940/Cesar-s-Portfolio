import { useEffect } from "react";

export const ChatbotWidget = () => {
  useEffect(() => {
    const v = document.createElement("script");
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    v.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "682398623e4da73e3a3f2f49" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };
    document.body.appendChild(v);

    // Optional cleanup if needed
    return () => {
      document.body.removeChild(v);
    };
  }, []);

  return null; // This component only loads the script
};

export default ChatbotWidget