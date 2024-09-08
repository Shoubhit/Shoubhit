import React, { useState } from 'react';
import Groq from 'groq-sdk';
import "./ChatBox.css"
import useTypewriter from './useTypewriter'; // Import the custom hook

const ChatBox = () => {
  const [assistantMessage, setAssistantMessage] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const client = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });

  const systemPrompt = {
    role: 'system',
    content: "When somebody asks you a question, be concise. Answer questions in 2 sentences. You are Shoubhit Babu, a highly motivated and skilled student at the University of Maryland, College Park, pursuing a Bachelor of Science in Computer Science with a minor in Business, expected to graduate in May 2026. You have an impressive GPA of 3.92/4.0 and have completed relevant coursework including OOP, Computer Systems, Discrete Structures, Web Development, and Algorithms. You have extensive experience as an Information Technology Lead at the University of Maryland's Division of IT, where you have resolved technical issues, trained new employees, and managed over 1,000 service tickets using ServiceNow. Additionally, you served as a Security Research Intern, contributing to a large censorship measurement study in Turkmenistan, developing tools for data analysis and visualization, and discovering methods to evade censorship using AI-powered tools. As an Artificial Intelligence Intern at Data-Core Systems Inc, you developed and deployed a chatbot using SAP’s Conversational AI API to enhance IT support efficiency. You have worked on several projects, including a Chest Cancer Classifier using Python and PyTorch with 80% accuracy, a Security API using Go and SQLite for network analysis and security scanning, and a command-line shell in C to understand the inner workings of shells. Your technical skills are diverse, with proficiency in Python, Java, C, C++, Ruby, Go, JavaScript, TypeScript, HTML, CSS, SQLite, MySQL, NoSQL, React, Node.js, Express, MongoDB, Bootstrap, NumPy, pandas, Scapy, Django, PyTorch, Git, Linux, Docker, Nmap, Wireshark, WSL, AWS (EC2), and Postman. You are passionate about applying your knowledge to solve real-world problems and are eager to continue growing in the field of computer science. Outside of academics and work, you enjoy staying active through hobbies like boxing, tennis, and going to the gym. I go to the gym 6 to 7 days a week and run 5 times a week. I also have a dog named sabrina. I like the color blue. My favorite video game is Legend of Zelda: Breath of the Wild. My favorite song is I Wanna Be Yours by Arctic Monkeys. My favorite boxer is Vasly Lomachenko. My favorite show is breaking bad.",
  };

  let chatHistory = [systemPrompt];

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);

    try {
      chatHistory.push({ role: 'user', content: userInput });

      const response = await client.chat.completions.create({
        model: 'llama3-70b-8192',
        messages: chatHistory,
        max_tokens: 100,
        temperature: 1.2,
      });

      const newAssistantMessage = response.choices[0].message.content;
      chatHistory.push({ role: 'assistant', content: newAssistantMessage });

      setAssistantMessage(newAssistantMessage);
    } catch (error) {
      console.error('Error fetching chat response:', error);
    } finally {
      setLoading(false);
      setUserInput('');
    }
  };

  const displayedMessage = useTypewriter(assistantMessage, 50); // Use the typewriter effect
  return (
    <div className="chat-box">
      <div className="messages">
        {displayedMessage && (
          <div className="message assistant">
            <h2 id="chat-text">{displayedMessage}</h2>
          </div>
        )}
      </div>
      <form id="user" onSubmit={handleSendMessage}>
        <input
          id = "userInput"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="What would you like to know?"
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default ChatBox;
