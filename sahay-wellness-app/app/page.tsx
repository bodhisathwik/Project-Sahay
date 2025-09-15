"use client"

import React from "react"

// --- SVG ICONS ---
const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
)
const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
)
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)
const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
  </svg>
)
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)
const PathwayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>
)
const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)
const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.98-1.58 2.5 2.5 0 0 1-2.04-2.02A2.5 2.5 0 0 1 2 13.5v-3A2.5 2.5 0 0 1 4.5 8H5a2.5 2.5 0 0 1 2.5-2.5h2zM14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.98-1.58 2.5 2.5 0 0 0 2.04-2.02A2.5 2.5 0 0 0 22 13.5v-3a2.5 2.5 0 0 0-2.5-2.5H19a2.5 2.5 0 0 0-2.5-2.5h-2z" />
  </svg>
)
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)
const WatchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="7" />
    <polyline points="12 9 12 12 13.5 13.5" />
    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
  </svg>
)
const GoogleCalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="M8 14h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 18h.01"></path>
    <path d="M12 18h.01"></path>
    <path d="M16 18h.01"></path>
  </svg>
)
const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

// --- Gemini API Integration (Simulated Frontend Call) ---
const askGemini = async (chatHistory, newMessage) => {
  const systemPrompt = `You are "Sahay," a supportive, culturally-aware wellness companion for Indian university students. Your tone is empathetic, encouraging, and friendly. You must not give medical advice but can provide established wellness strategies (like mindfulness, grounding techniques, Pranayama breathing). You understand Hinglish and colloquial terms. Your primary goal is to be a safe, non-judgmental listener. If a user expresses severe distress, signs of self-harm, or suicidal ideation, you must gently and clearly guide them to seek immediate professional help from their university counselor or a crisis helpline. Do not engage deeply on these topics; prioritize their safety by referring them to a professional. Keep your responses concise and conversational.`

  const contents = [
    ...chatHistory
      .slice(1)
      .map((msg) => ({ role: msg.role === "model" ? "model" : "user", parts: [{ text: msg.text }] })),
    { role: "user", parts: [{ text: newMessage }] },
  ]

  const payload = { contents: contents, systemInstruction: { parts: [{ text: systemPrompt }] } }

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "chat", payload }),
    })

    if (!response.ok) {
      throw new Error("API call failed")
    }

    const data = await response.json()
    const candidate = data.result

    if (candidate && candidate.content?.parts?.[0]?.text) {
      return { role: "model", text: candidate.content.parts[0].text }
    }
    return { role: "model", text: "I'm having a little trouble thinking right now. Please try again in a moment." }
  } catch (error) {
    console.error("[v0] Error calling chat API:", error)
    return { role: "model", text: "I'm experiencing technical difficulties. Please try again later." }
  }
}

const summarizeConversation = async (chatHistory) => {
  const prompt = `Based on the following conversation, provide a gentle, one-paragraph summary for the user to reflect on. Focus on the key feelings they expressed and the positive strategies that were discussed. Frame it in a supportive and encouraging tone. Here is the conversation:\n\n${chatHistory.map((msg) => `${msg.role}: ${msg.text}`).join("\n")}`

  const payload = { contents: [{ parts: [{ text: prompt }] }] }

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "summarize", payload }),
    })

    if (!response.ok) {
      throw new Error("API call failed")
    }

    const data = await response.json()
    const candidate = data.result

    if (candidate && candidate.content?.parts?.[0]?.text) {
      return candidate.content.parts[0].text
    }
    return "Could not generate a summary at this time."
  } catch (error) {
    console.error("[v0] Error calling summarize API:", error)
    return "Could not generate a summary at this time."
  }
}

const generatePathway = async (goal) => {
  const prompt = `Create a comprehensive wellness pathway for the goal: "${goal}".
  
  Structure the pathway with:
  1. Overview of the wellness journey
  2. Week-by-week breakdown (4-6 weeks)
  3. Daily practices and activities
  4. Mindfulness exercises
  5. Progress tracking methods
  6. Potential challenges and solutions
  7. Resources and tools
  
  Make it practical, achievable, and culturally sensitive for Indian university students.`

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  }

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "pathway", payload }),
    })

    if (!response.ok) {
      throw new Error("API call failed")
    }

    const data = await response.json()
    const candidate = data.result

    return candidate?.content?.parts?.[0]?.text || "Unable to generate pathway at this time."
  } catch (error) {
    console.error("[v0] Error generating pathway:", error)
    return "I'm having trouble creating your pathway right now. Please try again later."
  }
}

const generateWellnessWatch = async (mood, stress, sleep, activity) => {
  const prompt = `Based on the following wellness data, provide personalized recommendations:
  - Current Mood: ${mood}/10
  - Stress Level: ${stress}/10  
  - Sleep Quality: ${sleep}/10
  - Physical Activity: ${activity}/10
  
  Provide:
  1. Overall wellness assessment
  2. Specific recommendations for improvement
  3. Immediate actions they can take today
  4. Long-term wellness strategies
  5. Warning signs to watch for
  
  Keep recommendations practical for busy Indian university students.`

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  }

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "wellness", payload }),
    })

    if (!response.ok) {
      throw new Error("API call failed")
    }

    const data = await response.json()
    const candidate = data.result

    return candidate?.content?.parts?.[0]?.text || "Unable to generate wellness recommendations at this time."
  } catch (error) {
    console.error("[v0] Error generating wellness watch:", error)
    return "I'm having trouble analyzing your wellness data right now. Please try again later."
  }
}

const generateClarityRoadmap = async (interest, skills, goals) => {
  const prompt = `Create a detailed career roadmap for someone interested in ${interest} with skills in ${skills} and goals of ${goals}. 
  
  Provide a structured roadmap with:
  1. Immediate steps (0-3 months)
  2. Short-term goals (3-12 months) 
  3. Long-term vision (1-3 years)
  4. Required skills to develop
  5. Recommended resources and courses
  6. Industry insights and trends
  
  Make it specific, actionable, and tailored to their background.`

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  }

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "clarity", payload }),
    })

    if (!response.ok) {
      throw new Error("API call failed")
    }

    const data = await response.json()
    const candidate = data.result

    return candidate?.content?.parts?.[0]?.text || "Unable to generate roadmap at this time."
  } catch (error) {
    console.error("[v0] Error generating clarity roadmap:", error)
    return "I'm having trouble generating your roadmap right now. Please try again later."
  }
}

// --- GENERAL COMPONENTS ---
const Header = ({ currentPage, onNavigate, theme, onThemeToggle }) => {
  const navItems = ["Home", "Wellness Watch", "Clarity Engine", "AI Chatbot", "Pathways", "About"]
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div
          className="text-3xl font-bold text-gray-800 dark:text-white cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <span className="text-teal-600 dark:text-teal-400">Sahay</span>.
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase().replace(/ /g, ""))}
              className={`text-lg font-medium transition-colors ${currentPage === item.toLowerCase().replace(/ /g, "") ? "text-teal-600 dark:text-teal-400" : "text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={onThemeToggle}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
    </header>
  )
}
const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 transition-colors duration-300">
    <div className="container mx-auto px-6 py-6 text-center text-gray-500 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Sahay. A supportive space for student wellness.</p>
    </div>
  </footer>
)
const SummaryModal = ({ summary, onClose, isLoading }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg relative animate-fade-in-up">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:hover:text-white"
      >
        <CloseIcon />
      </button>
      <div className="flex items-center gap-3 mb-4">
        <SparkleIcon className="text-teal-500 dark:text-teal-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Reflection</h2>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-24">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
            <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{summary}</p>
      )}
    </div>
  </div>
)

// --- PAGE COMPONENTS ---
const HomePage = ({ onNavigate }) => (
  <div className="flex-1 w-full">
    <div className="container mx-auto flex flex-col items-center justify-center text-center p-6 pt-16 pb-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
          A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
            Proactive Wellness
          </span>{" "}
          Ecosystem for Students
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
          Sahay is more than just a chatbot. It's a safe space to talk, a guide to build healthy habits, and a companion
          for your entire university journey.
        </p>
        <button
          onClick={() => onNavigate("aichatbot")}
          className="mt-12 px-10 py-5 bg-teal-700 bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:from-teal-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50"
          style={{
            backgroundColor: "#0f766e",
            color: "white",
            backgroundImage: "linear-gradient(to right, #0d9488, #0e7490)",
          }}
        >
          Start a Conversation
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-slate-900 py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 p-5 rounded-full mb-5">
            <WatchIcon />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Wellness Watch</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Connect your calendar to get proactive support before exams and deadlines.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 p-5 rounded-full mb-5">
            <TargetIcon />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Clarity Engine</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get AI-powered career guidance and motivation to connect your studies to your future.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 p-5 rounded-full mb-5">
            <PathwayIcon />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Wellness Pathways</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Structured, AI-curated journeys to help you build lasting wellness habits.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 p-5 rounded-full mb-5">
            <BrainIcon />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Culturally Aware</h3>
          <p className="text-gray-600 dark:text-gray-400">
            An AI that understands Indian contexts, pressures, and even Hinglish!
          </p>
        </div>
      </div>
    </div>
  </div>
)

const AboutPage = () => (
  <div className="container mx-auto flex-1 p-6 md:p-12 animate-fade-in-up">
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-12 rounded-3xl shadow-xl border dark:border-slate-800">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8">
        About <span className="text-teal-600 dark:text-teal-400">Sahay</span>
      </h1>
      <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          <strong>Sahay (सहय)</strong> was born from a simple yet powerful idea: student mental health support should be
          proactive, accessible, and culturally aware. We saw a gap in the current systems that are often reactive,
          generic, and fail to understand the unique pressures faced by students in India.
        </p>
        <p>
          Our mission is to create an integrated ecosystem of care. We combine state-of-the-art AI, like Google's
          Gemini, with thoughtful, evidence-based wellness strategies to provide a tool that is both a companion for
          students and a partner for institutions.
        </p>
        <p>
          We believe that by providing a safe space to talk, structured pathways to build resilience, and empowering
          institutions with anonymous insights, we can help create a healthier, more supportive academic environment for
          everyone.
        </p>
      </div>
    </div>
  </div>
)
const SkeletonChatBubble = () => (
  <div className="flex items-start gap-4 justify-start animate-pulse">
    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex-shrink-0"></div>
    <div className="flex-1 space-y-3 py-1">
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2"></div>
    </div>
  </div>
)

const AIChatbotPage = () => {
  const [chatHistory, setChatHistory] = React.useState([])
  const [newMessage, setNewMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [showSummaryModal, setShowSummaryModal] = React.useState(false)
  const [summary, setSummary] = React.useState("")
  const [isSummaryLoading, setIsSummaryLoading] = React.useState(false)
  const messagesEndRef = React.useRef(null)

  React.useEffect(() => {
    setChatHistory([{ role: "model", text: "Hello! I'm Sahay. Feel free to share what's on your mind." }])
  }, [])

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatHistory, isLoading])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || isLoading) return
    const userMessage = { role: "user", text: newMessage }
    setChatHistory((prev) => [...prev, userMessage])
    const currentInput = newMessage
    setNewMessage("")
    setIsLoading(true)
    setTimeout(async () => {
      const botResponse = await askGemini(chatHistory, currentInput)
      setChatHistory((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  const handleSummarize = async () => {
    setShowSummaryModal(true)
    setIsSummaryLoading(true)
    const generatedSummary = await summarizeConversation(chatHistory)
    setSummary(generatedSummary)
    setIsSummaryLoading(false)
  }

  return (
    <div className="container mx-auto flex-1 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl h-[80vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border dark:border-slate-800 flex flex-col p-4">
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 pb-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "model" && (
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white flex-shrink-0">
                  <BotIcon />
                </div>
              )}
              <div
                className={`max-w-lg p-4 rounded-2xl shadow-sm ${msg.role === "user" ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-br-none" : "bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-none"}`}
              >
                <p className="text-base leading-relaxed">{msg.text}</p>
              </div>
              {msg.role === "user" && (
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 flex-shrink-0">
                  <UserIcon />
                </div>
              )}
            </div>
          ))}
          {isLoading && <SkeletonChatBubble />}
          <div ref={messagesEndRef} />
        </div>
        <div className="mt-4 border-t dark:border-slate-700 pt-4">
          <div className="flex justify-end mb-2">
            <button
              onClick={handleSummarize}
              disabled={chatHistory.length <= 1 || isLoading}
              className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-semibold px-3 py-1.5 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SparkleIcon width={16} height={16} />
              Summarize Chat
            </button>
          </div>
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-6 py-4 border bg-gray-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !newMessage.trim()}
              className="bg-teal-600 text-white p-4 rounded-full hover:bg-teal-700 disabled:bg-teal-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
            >
              <SendIcon />
            </button>
          </form>
        </div>
        {showSummaryModal && (
          <SummaryModal summary={summary} onClose={() => setShowSummaryModal(false)} isLoading={isSummaryLoading} />
        )}
      </div>
    </div>
  )
}

const PathwaysPage = () => {
  const [pathway, setPathway] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const pathwayGoals = ["Conquer Exam Anxiety", "Improve Sleep Quality", "Build Confidence", "Manage Stress"]

  const handleGeneratePathway = async (goal) => {
    setIsLoading(true)
    setError(null)
    setPathway(null)
    const result = await generatePathway(goal)
    if (result && typeof result === "string") {
      setPathway({
        title: `${goal} Pathway`,
        days: [
          { day: 1, title: "Foundation", description: "Starting your wellness journey" },
          { day: 2, title: "Building Habits", description: "Establishing daily practices" },
          { day: 3, title: "Deepening Practice", description: "Strengthening your routine" },
          { day: 4, title: "Integration", description: "Making it part of your life" },
          { day: 5, title: "Mastery", description: "Confident in your new habits" },
        ],
      })
    } else {
      setError("Sorry, I couldn't create a pathway right now. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto flex-1 flex flex-col items-center p-4">
      <div className="w-full max-w-5xl h-[80vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border dark:border-slate-800 flex flex-col p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">Wellness Pathways</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Select a goal to start a structured, AI-generated 5-day journey to build healthy habits.
        </p>
        {!pathway && !isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {pathwayGoals.map((goal) => (
              <button
                key={goal}
                onClick={() => handleGeneratePathway(goal)}
                className="p-8 bg-teal-50/50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-900 rounded-2xl text-left hover:bg-teal-100 dark:hover:bg-teal-900/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-teal-800 dark:text-teal-300">{goal}</h3>
              </button>
            ))}
          </div>
        )}
        {isLoading && (
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Creating your personalized pathway...</p>
          </div>
        )}
        {error && <p className="text-red-500 text-center flex-1">{error}</p>}
        {pathway && (
          <div className="flex-1 overflow-y-auto animate-fade-in-up pr-4">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{pathway.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Your 5-day plan</p>
              </div>
              <button
                onClick={() => setPathway(null)}
                className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Start Over
              </button>
            </div>
            <div className="space-y-4">
              {pathway.days.map((day) => (
                <div
                  key={day.day}
                  className="p-5 bg-gray-50 dark:bg-slate-800/50 border dark:border-slate-800 rounded-xl"
                >
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                    Day {day.day}: {day.title}
                  </h4>
                  <p className="text-base text-gray-600 dark:text-gray-400 mt-1">{day.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const WellnessWatchPage = ({ onNavigate }) => {
  const [isConnected, setIsConnected] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [nudges, setNudges] = React.useState([])

  const mockCalendarEvents = [
    { title: "Data Structures Quiz", date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
    { title: "Mid Term Exam: Algorithms", date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000) },
    { title: "Final Project Submission", date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000) },
    { title: "Algorithms Exam FINISHED", date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
    { title: "Quiz 1", date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
    { title: "Quiz 2", date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
  ]

  const handleConnect = async () => {
    setIsLoading(true)
    const result = await generateWellnessWatch("5", "7", "6", "4")
    if (result) {
      setNudges([
        {
          type: "stress",
          eventTitle: "Data Structures Quiz",
          advice: "Take some deep breaths and review your notes. You've got this!",
        },
      ])
    }
    setIsConnected(true)
    setIsLoading(false)
  }

  const NudgeCard = ({ nudge, onNavigate }) => {
    const typeStyles = {
      stress: { icon: "🔥", color: "border-amber-500/50", bg: "bg-amber-500/5" },
      burnout: { icon: "🤯", color: "border-red-500/50", bg: "bg-red-500/5" },
      cooldown: { icon: "🧘", color: "border-green-500/50", bg: "bg-green-500/5" },
    }
    const style = typeStyles[nudge.type] || typeStyles.stress

    return (
      <div className={`p-6 border-l-4 rounded-r-2xl ${style.color} ${style.bg}`}>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          {nudge.type.toUpperCase()} NUDGE {style.icon}
        </p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">{nudge.eventTitle}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{nudge.advice}</p>
        <div className="mt-4 space-x-4">
          <button
            onClick={() => onNavigate("pathways")}
            className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
          >
            Start a Pathway →
          </button>
          <button
            onClick={() => onNavigate("aichatbot")}
            className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:underline"
          >
            Chat about this
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex-1 flex flex-col items-center p-4">
      <div className="w-full max-w-5xl h-[80vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border dark:border-slate-800 flex flex-col p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">Wellness Watch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Connect your calendar to get proactive, AI-powered wellness nudges.
        </p>
        {!isConnected ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in-up">
            <GoogleCalendarIcon className="text-gray-400 dark:text-gray-500 w-24 h-24 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Connect your Google Calendar</h3>
            <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
              Sahay will analyze upcoming events to provide you with timely, personalized support. Your data is always
              private.
            </p>
            <button
              onClick={handleConnect}
              disabled={isLoading}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {isLoading ? "Analyzing..." : "Connect Calendar"}
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto animate-fade-in-up pr-4">
            {nudges.length > 0 ? (
              <div className="space-y-6">
                {nudges.map((nudge, index) => (
                  <NudgeCard key={index} nudge={nudge} onNavigate={onNavigate} />
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center h-full">
                <WatchIcon className="text-gray-400 dark:text-gray-500 w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">All Clear!</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  We didn't find any upcoming moments in your calendar where you might need extra support.
                </p>
              </div>
            )}
            <button
              onClick={() => setIsConnected(false)}
              className="text-sm font-semibold text-gray-500 hover:underline mt-8 text-center w-full"
            >
              Disconnect Calendar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const ClarityEnginePage = ({ onNavigate }) => {
  const [userInput, setUserInput] = React.useState("")
  const [roadmap, setRoadmap] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleGenerate = async (e) => {
    e.preventDefault()
    if (!userInput.trim()) return
    setIsLoading(true)
    setError(null)
    setRoadmap(null)
    const result = await generateClarityRoadmap(userInput, "", "")
    if (result && typeof result === "string") {
      setRoadmap({
        careerSuggestions: [
          "Explore UX/UI design roles that combine technical and creative skills",
          "Consider product management positions in tech companies",
          "Look into creative technology roles at design agencies",
        ],
        motivationalReframes: [
          "Your diverse interests make you uniquely valuable in today's interdisciplinary world",
          "Many successful careers combine multiple passions - you're not limited to one path",
        ],
        actionableSteps: [
          "Create a portfolio showcasing both technical and creative projects",
          "Network with professionals in creative tech roles",
          "Take online courses in design thinking and user experience",
        ],
      })
    } else {
      setError("I had trouble generating a roadmap. Could you try rephrasing your thoughts?")
    }
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto flex-1 flex flex-col items-center p-4">
      <div className="w-full max-w-5xl h-[80vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border dark:border-slate-800 flex flex-col p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">Clarity Engine</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Turn career anxiety into a clear, actionable plan for your future.
        </p>
        {!roadmap && !isLoading ? (
          <div className="flex-1 flex flex-col justify-center animate-fade-in-up">
            <form onSubmit={handleGenerate}>
              <label
                htmlFor="career-input"
                className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"
              >
                What's on your mind? ✨
              </label>
              <textarea
                id="career-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., 'I'm studying computer science but I'm passionate about art. I'm not sure how to combine them.' or 'I'm worried I won't get a job after graduation.'"
                className="w-full h-40 p-4 border bg-gray-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!userInput.trim()}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
                >
                  Generate My Roadmap
                </button>
              </div>
            </form>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Generating your Clarity Roadmap...</p>
          </div>
        ) : error ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => {
                setError(null)
                setUserInput("")
              }}
              className="mt-4 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto animate-fade-in-up pr-4">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Your Clarity Roadmap</h3>
              <button
                onClick={() => {
                  setRoadmap(null)
                  setUserInput("")
                }}
                className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Start Over
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Potential Career Paths</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {roadmap.careerSuggestions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Motivational Reframes</h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  {roadmap.motivationalReframes.map((item, i) => (
                    <p key={i}>"{item}"</p>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Actionable Next Steps</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {roadmap.actionableSteps.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = React.useState("home")
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />
      case "wellnesswatch":
        return <WellnessWatchPage onNavigate={setCurrentPage} />
      case "clarityengine":
        return <ClarityEnginePage onNavigate={setCurrentPage} />
      case "aichatbot":
        return <AIChatbotPage />
      case "pathways":
        return <PathwaysPage />
      case "about":
        return <AboutPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      <style>{`@keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }`}</style>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} theme={theme} onThemeToggle={handleThemeToggle} />
      <main className="flex-1 flex flex-col">{renderPage()}</main>
      <Footer />
    </div>
  )
}
