import Header from './components/sections/Header';
import Education from './components/sections/Education';
import Contacts from './components/sections/Contacts';
import Projects from './components/sections/Projects';
import LetterGlitch from './components/LetterGlitch';

// No changes needed in App.tsx. It remains the content for the '/' route.
export default function App() {
  const headerData = {
    name: "Amogelang Gift Kotu",
    title: "Junior Full-Stack Developer",
    skills: ['Visual Basic', 'C++', 'Java', 'SQL', 'C#', 'HTML', 'CSS',
      'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express',
      'Supabase', 'Git', '80x86 Assembly']
  };

  return (
    <div className="min-h-screen text-white font-mono w-full overflow-x-hidden">
      {/* Header section with glitch background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
            characters={'AMOGELANG!GIFT@KOTU#$&*()-_+=/[]{};:<>.,0123456789'}
          />
        </div>

        {/* Header content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <Header {...headerData} />
        </div>
      </section>

      {/* Rest of the content without glitch background */}
      <div >
        <Education />
        <Projects /> {/* Projects component now contains <Link> for navigation */}
      </div>

      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
            characters={'AMOGELANG!GIFT@KOTU#$&*()-_+=/[]{};:<>.,0123456789'}
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <Contacts />
        </div>
      </section>
    </div>
  );
}