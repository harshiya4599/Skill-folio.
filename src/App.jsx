import './App.css'
import HomeSection from './home/homesection'
import HomeMain from './MainHome/HomeMain'
import About1f from './About/About1f'
import Skills from './SkillsSection/Skills'
import Contact1 from './Contact/contact1'
<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Serif+Text:ital@0;1&display=swap');
</style>

function App() {
  return (
    <div className="app">
      <HomeSection />
      <main className="main-content">
        <section id="home">
          <HomeMain />
        </section>
        <section id="about">
          <About1f />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact1 />
        </section>
      </main>
    </div>
  )
}

export default App