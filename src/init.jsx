import { createRoot } from 'react-dom/client'

fetch("https://0bc4-176-93-228-76.ngrok-free.app", {
  headers: {
    "ngrok-skip-browser-warning": "1"
  }
});

// Styles

const styles = import.meta.glob('./Styles/*.css', { eager: true })

// Components

import { Header, Hero } from "@/Components"

const root = document.getElementById('root')

createRoot(root).render(
    <div className="app-shell">
        <Header/>
        <main className="page-stack">
            <Hero/>
        </main>
    </div>
)