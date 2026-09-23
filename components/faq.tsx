import React, { useState, useRef, useEffect, useCallback } from "react";
import { Mic, Send, Volume2, Search, Copy, Trash2, Download, Sparkles, Brain, WifiOff, RefreshCw } from "lucide-react";
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
  timestamp?: number;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    questionHindi: "आप क्या सेवाएं प्रदान करते हैं?",
    answer:
      "We specialize in IT services including web development and software solutions, digital marketing (SEO, paid ads, PR, influencer marketing), fintech APIs for recharge and bill payments, cyber security, broadcasting via Sadaiv Satya, and cyber awareness through Sadaiv Yuva Foundation.",
    answerHindi:
      "हम आईटी सेवाओं में विशेषज्ञ हैं जिसमें वेब डेवलपमेंट और सॉफ्टवेयर सॉल्यूशंस, डिजिटल मार्केटिंग, फिनटेक एपीआई, साइबर सिक्योरिटी, और सदैव युवा फाउंडेशन शामिल हैं।",
    keywords: ["services", "offerings", "सेवाएं"],
    category: "Services",
  },
  {
    id: 2,
    question: "Where is PAYZONINDIA located?",
    questionHindi: "पेज़ोन इंडिया कहाँ स्थित है?",
    answer:
      "PAYZONINDIA PRIVATE LIMITED is located at B1, Raisen Road, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022, India.",
    answerHindi:
      "पेज़ोन इंडिया प्राइवेट लिमिटेड बी1, रायसेन रोड, मनक विहार, पटेल नगर, भोपाल, मध्य प्रदेश 462022, भारत में स्थित है।",
    keywords: ["location", "address", "स्थान"],
    category: "Contact",
  },
  {
    id: 3,
    question: "How can I contact PAYZONINDIA?",
    questionHindi: "पेज़ोन इंडिया से संपर्क कैसे करें?",
    answer:
      "You can contact us at +91 755 485 9540, +91 755 492 3296, or +91 9303430351. Email: info@payzonapi.com.",
    answerHindi:
      "आप हमसे +91 755 485 9540, +91 755 492 3296, या +91 9303430351 पर संपर्क कर सकते हैं। ईमेल: info@payzonapi.com।",
    keywords: ["contact", "phone", "email", "संपर्क"],
    category: "Contact",
  },
  {
    id: 4,
    question: "What digital marketing services do you provide?",
    questionHindi: "आप कौन सी डिजिटल मार्केटिंग सेवाएं प्रदान करते हैं?",
    answer:
      "We provide SEO optimization, paid ad campaigns, PR services, influencer marketing, brand promotion, and more to boost your business visibility and growth.",
    answerHindi:
      "हम एसईओ ऑप्टिमाइजेशन, पेड ऐड कैंपेन, पीआर सेवाएं, इन्फ्लुएंसर मार्केटिंग, ब्रांड प्रमोशन प्रदान करते हैं।",
    keywords: ["digital marketing", "SEO", "ads", "डिजिटल मार्केटिंग"],
    category: "Digital Marketing",
  },
  {
    id: 5,
    question: "What fintech solutions do you offer?",
    questionHindi: "आप कौन से फिनटेक सॉल्यूशंस प्रदान करते हैं?",
    answer:
      "We offer APIs for mobile recharge, DTH, bill payments, E-KYC verification, GSTN verification, and secure payment methods like UPI.",
    answerHindi:
      "हम मोबाइल रिचार्ज, डीटीएच, बिल पेमेंट्स, ई-केवाईसी वेरिफिकेशन, जीएसटीएन वेरिफिकेशन, और यूपीआई के लिए एपीआई प्रदान करते हैं।",
    keywords: ["fintech", "API", "recharge", "फिनटेक"],
    category: "Fintech",
  },
];

// ─── API CONFIG ──────────────────────────────────────────────────────────────
const API_URL = "https://apipanel.sadaivsatya.com/api/chat";
const REQUEST_TIMEOUT_MS = 28000; // 28s — just under most proxy limits

// ─── Fetch with timeout helper ────────────────────────────────────────────────
async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err: any) {
    clearTimeout(timer);
    if (err.name === "AbortError") {
      throw new Error("TIMEOUT");
    }
    throw err;
  }
}

// ─── Retry wrapper ────────────────────────────────────────────────────────────
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 2
): Promise<Response> {
  let lastError: Error = new Error("Unknown error");
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetchWithTimeout(url, options, REQUEST_TIMEOUT_MS);
      if (res.status === 503 && attempt < maxRetries) {
        // Exponential back-off with jitter
        const wait = (attempt + 1) * 2000 + Math.random() * 1000;
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      return res;
    } catch (err: any) {
      lastError = err;
      if (err.message === "TIMEOUT" && attempt < maxRetries) {
        const wait = (attempt + 1) * 1500;
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

// ─── Component ────────────────────────────────────────────────────────────────
const PayzonIndiaFAQ: React.FC = () => {
  const messageIdCounter = useRef(1);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm Grok, your AI assistant for PAYZONINDIA. Ask me anything about our services, location, contact, or offerings. I have real-time Google Search enabled!",
      sender: "bot",
      timestamp: Date.now(),
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
  const [retryCount, setRetryCount] = useState(0);
  const [networkError, setNetworkError] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const loadingMessages = [
    "🔍 Searching Google for latest info...",
    "🧠 Analysing data from multiple sources...",
    "📊 Comparing market trends...",
    "✨ Preparing a detailed response...",
    "🌐 Gathering real-time insights...",
    "💡 Almost there...",
  ];

  // ── Simulated loading progress ────────────────────────────────────────────
  useEffect(() => {
    if (!isLoading) return;
    setLoadingProgress(0);
    let progress = 0;
    let msgIdx = 0;
    setLoadingMessage(loadingMessages[0]);

    const progressTimer = setInterval(() => {
      progress += Math.random() * 12;
      if (progress > 92) progress = 92;
      setLoadingProgress(progress);
    }, 600);

    const msgTimer = setInterval(() => {
      msgIdx = (msgIdx + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[msgIdx]);
    }, 2500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(msgTimer);
      setLoadingProgress(100);
    };
  }, [isLoading]);

  // ── Persist + restore chat ─────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("faqChatHistory");
    if (saved) {
      try {
        const parsed: Message[] = JSON.parse(saved);
        setMessages(parsed);
        const maxId = Math.max(...parsed.map((m) => m.id), 1);
        messageIdCounter.current = maxId + 1;
      } catch (_) {}
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("faqChatHistory", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── Speech recognition ─────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    synthRef.current = window.speechSynthesis;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SR) {
      recognitionRef.current = new SR();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = language;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (e: any) => {
        const transcript = e.results[0][0].transcript;
        setInput(transcript);
        handleSubmit(transcript);
      };
      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    } else {
      setSpeechSupported(false);
    }
  }, [language]);

  // ── Suggestions ────────────────────────────────────────────────────────────
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

  // ── Format message ─────────────────────────────────────────────────────────
  const formatMessage = (text: string) => {
    const cleaned = text
      .replace(/#{1,6}\s+/g, "")
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong>$1</strong>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");

    return cleaned.split("\n").map((line, i) => {
      const t = line.trim();
      if (!t) return <div key={i} className="h-2" />;
      if (t.startsWith("•") || t.startsWith("-") || t.startsWith("*"))
        return (
          <div key={i} className="flex gap-2 my-1">
            <span className="text-blue-400 font-bold">•</span>
            <span dangerouslySetInnerHTML={{ __html: t.substring(1).trim() }} />
          </div>
        );
      if (/^\d+\./.test(t))
        return (
          <div key={i} className="flex gap-2 my-1">
            <span className="text-blue-400 font-bold">{t.match(/^\d+\./)?.[0]}</span>
            <span dangerouslySetInnerHTML={{ __html: t.replace(/^\d+\.\s*/, "") }} />
          </div>
        );
      return <div key={i} className="my-1" dangerouslySetInnerHTML={{ __html: t }} />;
    });
  };

  // ── Clear typing interval on unmount ──────────────────────────────────────
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  // ── Main submit ────────────────────────────────────────────────────────────
  const handleSubmit = useCallback(
    async (query: string = input) => {
      if (!query.trim() || isLoading) return;

      setNetworkError(false);

      const userMsg: Message = {
        id: messageIdCounter.current++,
        text: query,
        sender: "user",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setAvatarState("typing");
      setIsLoading(true);
      setLoadingMessage(loadingMessages[0]);

      const newHistory = [...conversationHistory, { role: "user", content: query }];

      try {
        const response = await fetchWithRetry(
          API_URL,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Connection: "keep-alive",
            },
            body: JSON.stringify({
              message: query,
              conversationHistory: newHistory.slice(-8),
            }),
          },
          2 // max retries
        );

        if (!response.ok) {
          throw new Error(`HTTP_${response.status}`);
        }

        const data = await response.json();
        if (!data.success) throw new Error(data.answer || "Server error");

        const botText: string = data.answer;
        const source = data.source || "gemini-ai";
        const usedSearch = data.usedGoogleSearch || false;

        setIsLoading(false);
        setTypingMessage("");
        setRetryCount(0);

        // Fast typing animation (4ms/char)
        let current = "";
        let idx = 0;
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

        typingIntervalRef.current = setInterval(() => {
          if (idx < botText.length) {
            current += botText[idx];
            setTypingMessage(current);
            idx++;
          } else {
            clearInterval(typingIntervalRef.current!);
            const botMsg: Message = {
              id: messageIdCounter.current++,
              text: botText,
              sender: "bot",
              source: source as any,
              usedGoogleSearch: usedSearch,
              timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setTypingMessage(null);
            setAvatarState("idle");
            setConversationHistory([...newHistory, { role: "assistant", content: botText }]);
          }
        }, 4);
      } catch (err: any) {
        console.error("Chat error:", err);
        setIsLoading(false);
        setTypingMessage(null);
        setAvatarState("idle");

        const isTimeout = err.message === "TIMEOUT";
        const isOffline =
          typeof navigator !== "undefined" && !navigator.onLine;

        setNetworkError(true);

        let errorText =
          language === "en-US"
            ? isOffline
              ? "⚠️ No internet connection. Please check your network and try again."
              : isTimeout
              ? "⏱️ The request took too long. Our servers may be busy — please try again in a moment."
              : `⚠️ Could not reach the server (${err.message}). Please try again.`
            : "⚠️ सर्वर से कनेक्ट नहीं हो पाया। कृपया पुनः प्रयास करें।";

        setMessages((prev) => [
          ...prev,
          {
            id: messageIdCounter.current++,
            text: errorText,
            sender: "bot",
            source: "error",
            timestamp: Date.now(),
          },
        ]);
      }
    },
    [input, isLoading, conversationHistory, language]
  );

  // ── Retry last message ─────────────────────────────────────────────────────
  const handleRetry = () => {
    const lastUser = [...messages].reverse().find((m) => m.sender === "user");
    if (lastUser) {
      setRetryCount((c) => c + 1);
      handleSubmit(lastUser.text);
    }
  };

  const handleSuggestionClick = (faq: FAQItem) => {
    const q = language === "en-US" ? faq.question : faq.questionHindi;
    handleSubmit(q);
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
      } catch (_) {
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
      const clean = text.replace(/<[^>]*>/g, "").replace(/\*+/g, "").replace(/`/g, "");
      const utt = new SpeechSynthesisUtterance(clean);
      utt.lang = language;
      utt.rate = 0.95;
      utt.onstart = () => { setIsSpeaking(true); setAvatarState("speaking"); };
      utt.onend = () => { setIsSpeaking(false); setAvatarState("idle"); };
      utt.onerror = () => { setIsSpeaking(false); setAvatarState("idle"); };
      synthRef.current.speak(utt);
    }
  };

  const clearChat = () => {
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    setTypingMessage(null);
    setMessages([
      {
        id: 0,
        text:
          language === "en-US"
            ? "Hello! I'm Grok, your AI assistant for PAYZONINDIA. Ask me anything!"
            : "नमस्ते! मैं ग्रोक हूं, पेज़ोन इंडिया का एआई असिस्टेंट।",
        sender: "bot",
        timestamp: Date.now(),
      },
    ]);
    messageIdCounter.current = 1;
    setConversationHistory([]);
    setNetworkError(false);
    localStorage.removeItem("faqChatHistory");
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text.replace(/<[^>]*>/g, ""));
  };

  const addReaction = (id: number, reaction: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, reaction } : m)));
  };

  const exportChat = () => {
    const text = messages
      .map((m) => `${m.sender.toUpperCase()}: ${m.text.replace(/<[^>]*>/g, "")}`)
      .join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payzon-chat-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const lastBotMsg = [...messages].reverse().find((m) => m.sender === "bot" && m.source !== "error");

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(hsl(var(--muted))_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent">
            PAYZONINDIA AI Assistant
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-3 max-w-xl mx-auto">
            {language === "en-US"
              ? "Ask about our services • Powered by Google Search"
              : "हमारी सेवाओं के बारे में पूछें"}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <motion.button
              onClick={() => setLanguage((l) => (l === "en-US" ? "hi-IN" : "en-US"))}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "en-US" ? "हिन्दी" : "English"}
            </motion.button>
            <motion.button
              onClick={clearChat}
              className="px-4 py-2 bg-gradient-to-r from-destructive to-red-700 text-white rounded-lg text-sm font-medium flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trash2 className="w-4 h-4" /> Clear
            </motion.button>
            <motion.button
              onClick={exportChat}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg text-sm font-medium flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" /> Export
            </motion.button>
          </div>
        </motion.div>

        {/* ── Chat card ───────────────────────────────────────────────────────── */}
        <motion.div
          className="relative w-full max-w-4xl bg-card backdrop-blur-md border border-border rounded-3xl shadow-lg mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar */}
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
              alt="Grok AI"
              width={70}
              height={70}
              className="rounded-full border-2 border-blue-300 shadow-md"
            />
            {isLoading && (
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin" />
            )}
          </motion.div>

          {/* ── Network error banner ─────────────────────────────────────────── */}
          <AnimatePresence>
            {networkError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center justify-between gap-2 px-4 py-2 bg-destructive/10 border-b border-destructive/20 rounded-t-3xl text-sm text-destructive"
              >
                <span className="flex items-center gap-2">
                  <WifiOff className="w-4 h-4" />
                  Connection issue detected
                </span>
                <button
                  onClick={handleRetry}
                  disabled={isLoading}
                  className="flex items-center gap-1 px-3 py-1 bg-destructive/20 hover:bg-destructive/30 rounded-full text-xs font-medium transition-colors disabled:opacity-50"
                >
                  <RefreshCw className="w-3 h-3" />
                  Retry
                  {retryCount > 0 && ` (${retryCount})`}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Messages ────────────────────────────────────────────────────── */}
          <div className="h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: Math.min(index * 0.03, 0.3) }}
                  className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 text-sm">
                      G
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] sm:max-w-[68%] p-4 rounded-2xl transition-all duration-300 ${
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

                    {msg.source && msg.sender === "bot" && msg.source !== "error" && (
                      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-border/30">
                        <span className="text-xs opacity-60 flex items-center gap-1">
                          {msg.source === "company-faq" && <><Sparkles className="w-3 h-3" /> FAQ</>}
                          {msg.source === "gemini-ai" && <><Brain className="w-3 h-3" /> Gemini AI</>}
                          {msg.source === "gemini-with-search" && <><Search className="w-3 h-3" /> AI + Search</>}
                        </span>
                        {msg.usedGoogleSearch && (
                          <span className="text-xs bg-green-500/20 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            ✨ Live
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
                        <Copy className="w-3 h-3" />
                      </button>
                      {msg.sender === "bot" && msg.source !== "error" && (
                        <>
                          <button
                            onClick={() => toggleSpeaking(msg.text)}
                            className={`transition-colors p-1 ${isSpeaking ? "text-green-500" : "text-muted-foreground hover:text-foreground"}`}
                            title="Listen"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </>
                      )}
                      <button onClick={() => addReaction(msg.id, "👍")} className="hover:scale-125 transition-transform text-sm">👍</button>
                      <button onClick={() => addReaction(msg.id, "❤️")} className="hover:scale-125 transition-transform text-sm">❤️</button>
                    </div>
                    {msg.reaction && <span className="text-lg mt-1 block">{msg.reaction}</span>}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                      U
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Loading state */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 relative text-sm">
                    <span className="animate-pulse">G</span>
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
                  </div>
                  <div className="max-w-[70%] p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-4 h-4 text-blue-600 animate-pulse" />
                      <span className="text-sm font-medium text-blue-900 dark:text-blue-200">{loadingMessage}</span>
                    </div>
                    <div className="w-full bg-blue-100 dark:bg-blue-900/40 rounded-full h-1.5 mb-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex gap-1 justify-center mt-2">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.span
                          key={i}
                          className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-blue-500" : "bg-purple-500"}`}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Typing animation */}
              {typingMessage && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 text-sm">
                    G
                  </div>
                  <div className="max-w-[78%] p-4 rounded-2xl bg-muted/80 text-foreground border border-border backdrop-blur-sm">
                    <div className="text-sm sm:text-base leading-relaxed">{formatMessage(typingMessage)}</div>
                    <div className="flex gap-1 mt-2">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* ── Suggestions ─────────────────────────────────────────────────── */}
          <AnimatePresence>
            {suggestions.length > 0 && !isLoading && !typingMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 sm:px-6 py-3 bg-muted/30 border-t border-border"
              >
                <p className="text-xs text-muted-foreground mb-2 font-medium">
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

          {/* ── Input bar ───────────────────────────────────────────────────── */}
          <div className="border-t border-border p-3 sm:p-4 flex items-center gap-2 sm:gap-3 bg-card/50 backdrop-blur-sm rounded-b-3xl">
            <motion.button
              onClick={toggleListening}
              disabled={!speechSupported || isLoading}
              className={`p-2 sm:p-3 rounded-xl transition-colors flex-shrink-0 ${
                isListening
                  ? "bg-destructive/30 text-destructive"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              } disabled:opacity-40`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mic className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSubmit()}
              placeholder={language === "en-US" ? "Ask anything..." : "कुछ भी पूछें..."}
              disabled={isLoading}
              className="flex-1 min-w-0 bg-transparent text-foreground border border-border rounded-xl px-3 py-2 outline-none text-sm sm:text-base placeholder-muted-foreground disabled:opacity-50 focus:border-primary transition-colors"
            />

            <motion.button
              onClick={() => handleSubmit()}
              disabled={isLoading || !input.trim()}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:shadow-lg transition-all disabled:opacity-40 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>

            <motion.button
              onClick={() => {
                const q = encodeURIComponent("PAYZONINDIA PRIVATE LIMITED " + (input || "services"));
                window.open(`https://www.google.com/search?q=${q}`, "_blank");
              }}
              disabled={isLoading}
              className="p-2 sm:p-3 bg-muted rounded-xl text-muted-foreground hover:bg-muted/80 transition-all disabled:opacity-40 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Search on Google"
            >
              <Search className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>

            <motion.button
              onClick={() => lastBotMsg && toggleSpeaking(lastBotMsg.text)}
              disabled={!speechSupported || !lastBotMsg || isLoading}
              className={`p-2 sm:p-3 rounded-xl transition-colors flex-shrink-0 disabled:opacity-40 ${
                isSpeaking ? "bg-green-500/30 text-green-600" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* ── Quick Links ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
                className="p-2.5 bg-primary/5 hover:bg-primary/10 rounded-lg text-foreground text-xs sm:text-sm transition-all disabled:opacity-50 border border-primary/10 text-left"
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
        .scrollbar-thin { scrollbar-width: thin; }
        .scrollbar-thin::-webkit-scrollbar { width: 5px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.25);
          border-radius: 10px;
        }
        code {
          background: hsl(var(--muted));
          padding: 0.1rem 0.35rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'Courier New', monospace;
        }
        strong { font-weight: 600; color: hsl(var(--primary)); }
      `}</style>
    </div>
  );
};

export default PayzonIndiaFAQ;