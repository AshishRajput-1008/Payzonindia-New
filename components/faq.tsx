import React, { useState, useRef, useEffect } from "react";
import { Mic, Send, Volume2, Search, Copy, Trash2, Download, Sparkles, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi: string;
  keywords: string[];
  category: string;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  reaction?: string;
  source?: "company-faq" | "gemini-ai" | "gemini-with-search" | "error";
  usedGoogleSearch?: boolean;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    questionHindi: "आप क्या सेवाएं प्रदान करते हैं?",
    answer: "We specialize in IT services including web development and software solutions, digital marketing (SEO, paid ads, PR, influencer marketing), fintech APIs for recharge and bill payments, cyber security, broadcasting via Sadaiv Satya, and cyber awareness through Sadaiv Yuva Foundation.",
    answerHindi: "हम आईटी सेवाओं में विशेषज्ञ हैं जिसमें वेब डेवलपमेंट और सॉफ्टवेयर सॉल्यूशंस, डिजिटल मार्केटिंग (एसईओ, पेड ऐड्स, पीआर, इन्फ्लुएंसर मार्केटिंग), फिनटेक एपीआई रिचार्ज और बिल पेमेंट्स के लिए, साइबर सिक्योरिटी, सदैव सत्य के माध्यम से ब्रॉडकास्टिंग, और सदैव युवा फाउंडेशन के माध्यम से साइबर अवेयरनेस शामिल हैं।",
    keywords: ["services", "offerings", "सेवाएं"],
    category: "Services",
  },
  {
    id: 2,
    question: "Where is Payzon India located?",
    questionHindi: "पेज़ोन इंडिया कहाँ स्थित है?",
    answer: "Payzon India Pvt Ltd is located at B1, Raisen Road, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022, India.",
    answerHindi: "पेज़ोन इंडिया प्राइवेट लिमिटेड बी1, रायसेन रोड, मनक विहार, पटेल नगर, भोपाल, मध्य प्रदेश 462022, भारत में स्थित है।",
    keywords: ["location", "address", "स्थान"],
    category: "Contact",
  },
  {
    id: 3,
    question: "How can I contact Payzon India?",
    questionHindi: "पेज़ोन इंडिया से संपर्क कैसे करें?",
    answer: "You can contact us at +91 755 485 9540, +91 755 492 3296, or +91 9303430351. Email: info@payzonapi.com.",
    answerHindi: "आप हमसे +91 755 485 9540, +91 755 492 3296, या +91 9303430351 पर संपर्क कर सकते हैं। ईमेल: info@payzonapi.com।",
    keywords: ["contact", "phone", "email", "संपर्क"],
    category: "Contact",
  },
  {
    id: 4,
    question: "What digital marketing services do you provide?",
    questionHindi: "आप कौन सी डिजिटल मार्केटिंग सेवाएं प्रदान करते हैं?",
    answer: "We provide SEO optimization, paid ad campaigns, PR services, influencer marketing, brand promotion, and more to boost your business visibility and growth.",
    answerHindi: "हम एसईओ ऑप्टिमाइजेशन, पेड ऐड कैंपेन, पीआर सेवाएं, इन्फ्लुएंसर मार्केटिंग, ब्रांड प्रमोशन, और अधिक प्रदान करते हैं जो आपके व्यवसाय की दृश्यता और विकास को बढ़ावा देते हैं।",
    keywords: ["digital marketing", "SEO", "ads", "डिजिटल मार्केटिंग"],
    category: "Digital Marketing",
  },
  {
    id: 5,
    question: "What fintech solutions do you offer?",
    questionHindi: "आप कौन से फिनटेक सॉल्यूशंस प्रदान करते हैं?",
    answer: "We offer APIs for mobile recharge, DTH, bill payments, E-KYC verification, GSTN verification, and secure payment methods like UPI.",
    answerHindi: "हम मोबाइल रिचार्ज, डीटीएच, बिल पेमेंट्स, ई-केवाईसी वेरिफिकेशन, जीएसटीएन वेरिफिकेशन, और यूपीआई जैसी सुरक्षित पेमेंट मेथड्स के लिए एपीआई प्रदान करते हैं।",
    keywords: ["fintech", "API", "recharge", "फिनटेक"],
    category: "Fintech",
  },
];

const PayzonIndiaFAQ: React.FC = () => {
  // Backend API URL
  const API_URL = "http://localhost:5000/api/chat";

  const messageIdCounter = useRef(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything about our services, location, contact, or offerings. I have real-time Google Search enabled!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<FAQItem[]>([]);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const [language, setLanguage] = useState("en-US");
  const [speechSupported, setSpeechSupported] = useState(true);
  const [avatarState, setAvatarState] = useState<"idle" | "typing" | "speaking">("idle");
  const [conversationHistory, setConversationHistory] = useState<any[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Loading messages to keep user engaged
  const loadingMessages = [
    "🔍 Searching Google for the latest information...",
    "🧠 Analyzing data from multiple sources...",
    "📊 Comparing market trends...",
    "✨ Preparing a detailed response for you...",
    "🌐 Gathering real-time insights...",
    "💡 Processing your query...",
  ];

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      setLoadingProgress(0);
      let progress = 0;
      let messageIndex = 0;
      
      const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 95) progress = 95;
        setLoadingProgress(progress);
      }, 500);

      const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        setLoadingMessage(loadingMessages[messageIndex]);
      }, 2000);

      return () => {
        clearInterval(progressInterval);
        clearInterval(messageInterval);
        setLoadingProgress(100);
      };
    }
  }, [isLoading]);

  // Load chat history
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("faqChatHistory");
      if (saved) {
        const parsedMessages = JSON.parse(saved);
        setMessages(parsedMessages);
        const maxId = Math.max(...parsedMessages.map((msg: Message) => msg.id), 1);
        messageIdCounter.current = maxId + 1;
      }
    }
  }, []);

  // Save chat history and auto-scroll
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("faqChatHistory", JSON.stringify(messages));
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Setup speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
      if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        const SpeechRecognition =
          (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.lang = language;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSubmit(transcript);
        };
        recognitionRef.current.onend = () => setIsListening(false);
      } else {
        setSpeechSupported(false);
      }
    }
  }, [language]);

  // Update suggestions
  useEffect(() => {
    if (input.trim()) {
      const filtered = faqData
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(input.toLowerCase()) ||
            faq.questionHindi.toLowerCase().includes(input.toLowerCase()) ||
            faq.keywords.some((kw) => kw.toLowerCase().includes(input.toLowerCase()))
        )
        .slice(0, 4);
      setSuggestions(filtered);
    } else {
      setSuggestions(faqData.slice(0, 4));
    }
  }, [input]);

  // Enhanced formatting function
  const formatMessage = (text: string) => {
    // Remove excessive markdown formatting
    let cleanedText = text
      .replace(/#{1,6}\s+/g, '') // Remove # headers
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong>$1</strong>') // Bold+italic
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.+?)\*/g, '<em>$1</em>') // Italic
      .replace(/`(.+?)`/g, '<code>$1</code>'); // Code

    return cleanedText.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      
      // Empty line
      if (!trimmedLine) return <div key={i} className="h-2" />;
      
      // Bullet points
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
        return (
          <div key={i} className="flex gap-2 my-1">
            <span className="text-primary font-bold">•</span>
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.substring(1).trim() }} />
          </div>
        );
      }
      
      // Numbered lists
      if (/^\d+\./.test(trimmedLine)) {
        return (
          <div key={i} className="flex gap-2 my-1">
            <span className="text-primary font-bold">{trimmedLine.match(/^\d+\./)?.[0]}</span>
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.replace(/^\d+\.\s*/, '') }} />
          </div>
        );
      }
      
      // Bold lines (important points)
      if (trimmedLine.includes('<strong>')) {
        return (
          <div key={i} className="my-2" dangerouslySetInnerHTML={{ __html: trimmedLine }} />
        );
      }
      
      // Regular lines
      return (
        <div key={i} className="my-1" dangerouslySetInnerHTML={{ __html: trimmedLine }} />
      );
    });
  };

  // Main submit handler
  const handleSubmit = async (query: string = input) => {
    if (!query.trim() || isLoading) return;

    const newUserMessage: Message = {
      id: messageIdCounter.current++,
      text: query,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setAvatarState("typing");
    setIsLoading(true);
    setLoadingMessage(loadingMessages[0]);

    const newHistory = [...conversationHistory, { role: "user", content: query }];

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: query,
          conversationHistory: newHistory.slice(-10)
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.answer || "Failed to get response");
      }

      const botResponseText = data.answer;
      const source = data.source || "gemini-ai";
      const usedSearch = data.usedGoogleSearch || false;

      setIsLoading(false);
      setTypingMessage("");

      // Faster typing animation (5ms per character)
      let currentText = "";
      let index = 0;
      const typingSpeed = 5; // Much faster!

      const typingInterval = setInterval(() => {
        if (index < botResponseText.length) {
          currentText += botResponseText[index];
          setTypingMessage(currentText);
          index++;
        } else {
          clearInterval(typingInterval);
          
          const botMessage: Message = {
            id: messageIdCounter.current++,
            text: botResponseText,
            sender: "bot",
            source: source as any,
            usedGoogleSearch: usedSearch,
          };
          
          setMessages((prev) => [...prev, botMessage]);
          setTypingMessage(null);
          setAvatarState("idle");

          setConversationHistory([
            ...newHistory,
            { role: "assistant", content: botResponseText }
          ]);
        }
      }, typingSpeed);

    } catch (error: any) {
      console.error("Chat error:", error);
      setIsLoading(false);
      
      const errorMsg = language === "en-US"
        ? "Sorry, I couldn't connect to the server. Please make sure the backend is running."
        : "क्षमा करें, सर्वर से कनेक्ट नहीं हो पाया।";

      setMessages((prev) => [
        ...prev,
        {
          id: messageIdCounter.current++,
          text: errorMsg,
          sender: "bot",
          source: "error",
        },
      ]);
      setTypingMessage(null);
      setAvatarState("idle");
    }
  };

  const handleSuggestionClick = (faq: FAQItem) => {
    const query = language === "en-US" ? faq.question : faq.questionHindi;
    setInput(query);
    handleSubmit(query);
  };

  const toggleListening = () => {
    if (!recognitionRef.current || !speechSupported) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setAvatarState("speaking");
      } catch (error) {
        console.error("Speech recognition error:", error);
        setIsListening(false);
        setAvatarState("idle");
      }
    }
  };

  const toggleSpeaking = (text: string) => {
    if (!synthRef.current || !speechSupported) return;
    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setAvatarState("idle");
    } else {
      const cleanText = text
        .replace(/<[^>]*>/g, '')
        .replace(/\*\*/g, '')
        .replace(/\*/g, '')
        .replace(/#{1,6}\s/g, '')
        .replace(/`/g, '');

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = language;
      utterance.onstart = () => {
        setIsSpeaking(true);
        setAvatarState("speaking");
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
      };
      synthRef.current.speak(utterance);
    }
  };

  const handleSearchMore = () => {
    if (typeof window !== "undefined") {
      const searchQuery = encodeURIComponent("Payzon India Pvt Ltd " + (input || "services"));
      window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en-US" ? "hi-IN" : "en-US"));
  };

  const clearChat = () => {
    setMessages([
      {
        id: 0,
        text: language === "en-US" 
          ? "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything!"
          : "नमस्ते! मैं ग्रोक हूं, पेज़ोन इंडिया का एआई असिस्टेंट।",
        sender: "bot",
      },
    ]);
    messageIdCounter.current = 1;
    setConversationHistory([]);
    localStorage.removeItem("faqChatHistory");
  };

  const copyMessage = (text: string) => {
    const cleanText = text.replace(/<[^>]*>/g, '');
    navigator.clipboard.writeText(cleanText);
  };

  const addReaction = (id: number, reaction: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, reaction } : msg))
    );
  };

  const exportChat = () => {
    const chatText = messages.map((msg) => {
      const cleanText = msg.text.replace(/<[^>]*>/g, '');
      return `${msg.sender.toUpperCase()}: ${cleanText}`;
    }).join("\n\n");
    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payzon-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(hsl(var(--muted))_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent">
            Payzon India AI Assistant
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-3 max-w-xl mx-auto">
            {language === "en-US" ? "Ask about our services • Powered by Google Search" : "हमारी सेवाओं के बारे में पूछें"}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "en-US" ? "हिन्दी" : "English"}
            </motion.button>
            <motion.button
              onClick={clearChat}
              className="px-4 py-2 bg-gradient-to-r from-destructive to-red-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trash2 className="inline w-5 h-5 mr-2" /> Clear
            </motion.button>
            <motion.button
              onClick={exportChat}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="inline w-5 h-5 mr-2" /> Export
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl bg-card backdrop-blur-md border border-border rounded-3xl shadow-lg mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-20 h-20"
            animate={{
              y: avatarState === "typing" ? [0, -10, 0] : avatarState === "speaking" ? [0, -5, 0] : 0,
              scale: avatarState === "speaking" ? [1, 1.1, 1] : 1,
              rotate: isLoading ? 360 : 0,
            }}
            transition={{
              duration: avatarState === "typing" ? 0.5 : isLoading ? 2 : 0.3,
              repeat: avatarState !== "idle" || isLoading ? Infinity : 0,
              repeatType: isLoading ? "loop" : "reverse",
              ease: isLoading ? "linear" : "easeInOut",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Grok AI Assistant"
              width={70} 
              height={70}
              className="rounded-full border-2 border-blue-300 shadow-md"
            />
            {isLoading && (
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin" />
            )}
          </motion.div>
          
          <div className="h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.03 }}
                  className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      G
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] sm:max-w-[65%] p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01] ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white"
                        : msg.source === "error"
                        ? "bg-destructive/10 text-destructive border border-destructive/20"
                        : "bg-muted/80 text-foreground border border-border backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-sm sm:text-base leading-relaxed">
                      {formatMessage(msg.text)}
                    </div>
                    {msg.source && msg.sender === "bot" && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
                        <span className="text-xs opacity-70 flex items-center gap-1">
                          {msg.source === "company-faq" && <><Sparkles className="w-3 h-3" /> Company FAQ</>}
                          {msg.source === "gemini-ai" && <><Brain className="w-3 h-3" /> Gemini AI</>}
                          {msg.source === "gemini-with-search" && <><Search className="w-3 h-3" /> AI + Search</>}
                          {msg.source === "error" && "⚠️ Error"}
                        </span>
                        {msg.usedGoogleSearch && (
                          <span className="text-xs bg-green-500/20 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            ✨ Real-time
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex gap-2 mt-2">
                      <button 
                        onClick={() => copyMessage(msg.text)} 
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        title="Copy"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => addReaction(msg.id, "👍")} 
                        className="hover:scale-125 transition-transform"
                      >
                        👍
                      </button>
                      <button 
                        onClick={() => addReaction(msg.id, "❤️")} 
                        className="hover:scale-125 transition-transform"
                      >
                        ❤️
                      </button>
                    </div>
                    {msg.reaction && <span className="text-xl mt-1 block">{msg.reaction}</span>}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                      U
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Enhanced loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 relative">
                    <span className="animate-pulse">G</span>
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
                  </div>
                  <div className="max-w-[70%] p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-4 h-4 text-blue-600 animate-pulse" />
                      <span className="text-sm font-medium text-blue-900">{loadingMessage}</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-blue-100 rounded-full h-2 mb-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    
                    {/* Animated dots */}
                    <div className="flex gap-1 justify-center">
                      <motion.span
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Typing indicator */}
              {typingMessage && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    G
                  </div>
                  <div className="max-w-[75%] p-4 rounded-2xl bg-muted/80 text-foreground border border-border backdrop-blur-sm">
                    <div className="text-sm sm:text-base leading-relaxed">
                      {formatMessage(typingMessage)}
                    </div>
                    <div className="flex gap-1 mt-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <AnimatePresence>
            {suggestions.length > 0 && !isLoading && !typingMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 sm:px-6 py-3 bg-muted/30 border-t border-border"
              >
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">
                  {language === "en-US" ? "💡 Suggested:" : "💡 सुझाव:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((faq) => (
                    <motion.button
                      key={faq.id}
                      onClick={() => handleSuggestionClick(faq)}
                      className="px-3 py-1.5 bg-primary/10 rounded-full text-foreground text-xs hover:bg-primary/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language === "en-US" ? faq.question : faq.questionHindi}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input area */}
          <div className="border-t border-border p-3 sm:p-4 flex items-center gap-2 sm:gap-3 bg-card/50 backdrop-blur-sm">
            <motion.button
              onClick={toggleListening}
              disabled={!speechSupported || isLoading}
              className={`p-2 sm:p-3 rounded-xl transition-colors ${
                isListening
                  ? "bg-destructive/30 text-destructive"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              } disabled:opacity-50`}
              whileHover={{ scale: isLoading ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mic className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSubmit()}
              placeholder={language === "en-US" ? "Ask anything..." : "कुछ भी पूछें..."}
              disabled={isLoading}
              className="flex-1 bg-transparent text-foreground border border-border rounded-lg px-3 py-2 outline-none text-sm sm:text-base placeholder-muted-foreground disabled:opacity-50 focus:border-primary transition-colors"
            />
            <motion.button
              onClick={() => handleSubmit()}
              disabled={isLoading || !input.trim()}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:shadow-lg transition-all disabled:opacity-50"
              whileHover={{ scale: isLoading ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={handleSearchMore}
              disabled={isLoading}
              className="p-2 sm:p-3 bg-muted rounded-xl text-muted-foreground hover:bg-muted/80 transition-all disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => toggleSpeaking(messages[messages.length - 1]?.text || "")}
              disabled={!speechSupported || messages.length <= 1 || messages[messages.length - 1].sender !== "bot" || isLoading}
              className={`p-2 sm:p-3 rounded-xl transition-colors disabled:opacity-50 ${
                isSpeaking ? "bg-green-500/30 text-green-600" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 w-full max-w-4xl"
        >
          <p className="text-sm text-muted-foreground mb-2 font-medium">
            {language === "en-US" ? "🚀 Quick Links:" : "🚀 त्वरित लिंक:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {faqData.slice(0, 6).map((faq) => (
              <motion.button
                key={faq.id}
                onClick={() => handleSuggestionClick(faq)}
                disabled={isLoading}
                className="p-2.5 bg-primary/5 hover:bg-primary/10 rounded-lg text-foreground text-xs sm:text-sm transition-all disabled:opacity-50 border border-primary/10"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === "en-US" ? faq.question : faq.questionHindi}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.3);
          border-radius: 10px;
        }
        code {
          background: hsl(var(--muted));
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'Courier New', monospace;
        }
        strong {
          font-weight: 600;
          color: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
};

export default PayzonIndiaFAQ;