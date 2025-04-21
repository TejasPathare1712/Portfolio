import { useState } from 'react';
import { FaGithub, FaLinkedin, FaChessKnight, FaTrophy, FaMedal, FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">Tejas Pathare</h1>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActiveTab('about')} 
              className={`${activeTab === 'about' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'} font-medium`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('skills')} 
              className={`${activeTab === 'skills' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'} font-medium`}
            >
              Skills
            </button>
            <button 
              onClick={() => setActiveTab('projects')} 
              className={`${activeTab === 'projects' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'} font-medium`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveTab('education')} 
              className={`${activeTab === 'education' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'} font-medium`}
            >
              Education
            </button>
            <button 
              onClick={() => setActiveTab('experience')} 
              className={`${activeTab === 'experience' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'} font-medium`}
            >
              Experience
            </button>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/TejasPathare1712" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/TejasPathare/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Developer</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Passionate about building scalable applications with Java, Spring Boot, and React</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              onClick={() => setActiveTab('projects')}
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        {activeTab === 'about' && (
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-indigo-100 overflow-hidden border-4 border-indigo-200">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-indigo-300 flex items-center justify-center text-6xl font-bold text-indigo-600">
                    TP
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-6">
                  I'm a Computer Engineering graduate with expertise in full-stack development using Java, Spring Boot, and React. 
                  I'm passionate about creating efficient, scalable applications and solving complex problems.
                </p>
                <p className="text-lg mb-6">
                  With experience in Agile methodologies, I thrive in collaborative environments where I can contribute my technical 
                  skills and problem-solving abilities to build impactful products.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-indigo-600">Location</h3>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-indigo-600">Email</h3>
                    <p>pathare3232tejas@gmail.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-indigo-600">Phone</h3>
                    <p>+91-9767512879</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-indigo-600">Languages</h3>
                    <p>English, Hindi, Marathi, Japanese</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <section id="skills" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Programming Languages */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                  <FaJava className="mr-2" /> Programming Languages
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Java
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    SQL
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    HTML/CSS
                  </li>
                </ul>
              </div>

              {/* Frontend */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                  <FaReact className="mr-2" /> Frontend
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    React
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Bootstrap
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Thymeleaf
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                  <SiSpringboot className="mr-2" /> Backend
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Spring Boot
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    REST APIs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Hibernate
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    JSP/Servlets
                  </li>
                </ul>
              </div>

              {/* Database */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                  <FaDatabase className="mr-2" /> Database
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    MySQL
                  </li>
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Git/GitHub
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Postman
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sports Shop Management */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Sports Shop Management System</h3>
                  <p className="text-gray-600 mb-4">
                    Developed using JSP, Servlet, and JDBC to enhance inventory and order tracking.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Optimized database queries, reducing data retrieval time by 30%</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JSP</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Servlet</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JDBC</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  </div>
                  <a 
                    href="https://github.com/TejasPathare1712/Sport_Shop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>

              {/* Product Management System */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Product Management System</h3>
                  <p className="text-gray-600 mb-4">
                    Built a CRUD-based product catalog system enabling seamless product management for businesses.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JSP</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Hibernate</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  </div>
                  <a 
                    href="https://github.com/TejasPathare1712/ProductMangementSystem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>

              {/* Book Store Management */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Book Store Management System</h3>
                  <p className="text-gray-600 mb-4">
                    Developed a book catalog and order processing system with authentication to ensure secure transactions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Thymeleaf</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  </div>
                  <a 
                    href="https://github.com/TejasPathare1712/Book_Store_Management_System" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <section id="education" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">BE in Computer Engineering</h3>
                  <p className="text-gray-600">AISSMS, Pune (2024)</p>
                  <p className="text-gray-800 mt-1">CGPA: 7.81/10</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Certifications</h3>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-medium">Certified Java Full Stack Developer</p>
                <p className="text-gray-600">Symbiosis Center for Distance Learning</p>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Software Development Intern</h3>
                  <p className="text-gray-600">Unique System Skill — Aug 2024 – Jan 2025</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Developed a Sports Shop Management System using JSP, Servlet, and JDBC to enhance inventory and order tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Optimized database queries, reducing data retrieval time by 30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaTrophy className="text-yellow-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inter-Hostel Chess Champion</h3>
              <p className="text-gray-600">Winner of championship demonstrating strategic thinking skills</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaMedal className="text-indigo-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ideal Student Award</h3>
              <p className="text-gray-600">Awarded for leadership and academic excellence at the hostel</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaChessKnight className="text-green-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Head of Sports Club</h3>
              <p className="text-gray-600">Organized and managed multiple college sports events</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Tejas Pathare</h2>
              <p className="text-gray-300">Full Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/TejasPathare1712" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/tejaspathare" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tejas Pathare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;