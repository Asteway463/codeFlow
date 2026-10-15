export const codeExamples = {
"App.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
const [code, setCode] = useState("");

const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
};

return (
    <div className="app">
        <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
        />
    </div>
);

}
,
    "Hero.jsx": 
import { useEffect, useState } from "react";

export default function Hero() {
return (
<section className="hero">
<h1>Build with CodeFlow AI</h1>
</section>
);
}
,
    "Navbar.jsx": 
export default function Navbar() {
return (
<nav className="navbar">
<a href="/">Home</a>
<a href="/projects">Projects</a>
<a href="/contact">Contact</a>
</nav>
);
}
`,
};