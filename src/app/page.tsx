'use client';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, ExternalLink, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'education', label: 'education' },
    { id: 'contact', label: 'contact' }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"],
    "Frontend": ["React.js", "Next.js", "HTML5/CSS3", "Tailwind CSS", "Bootstrap", "Vite"],
    "Backend": ["Spring Boot", "Node.js", "Flask", "Express", "Apache Tomcat", "REST APIs"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
    "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Google Cloud Platform", "Docker", "Git/GitHub"],
    "Additional": ["GraphQL", "OAuth 2.0/JWT", "Microservices", "Apache Kafka", "CI/CD"]
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "TAMIZH | தமிழ Anna University",
      period: "Jan 2024 - Feb 2024",
      location: "Chennai",
      achievements: [
        "Developed secure, HIPAA-compliant medical data upload system using Python Flask, AWS S3, and OAuth authentication, reducing data processing time by 40%",
        "Built machine learning patient categorization system using Python scikit-learn and MySQL, improving diagnostic accuracy for 200+ patient records",
        "Engineered serverless healthcare processing architecture using AWS Lambda, API Gateway, and Docker containers, achieving 99.9% uptime"
      ]
    },
    {
      title: "Telecommunication, Networks Intern",
      company: "BSNL Telecom",
      period: "Nov 2023 - Dec 2023",
      location: "Chennai",
      achievements: [
        "Implemented advanced telecommunication protocols including TCP/IP, OSPF, and BGP, optimizing network performance by 25%",
        "Developed multi-layer network stack applications using HTTP/HTTPS, SMTP, and FTP protocols with Python socket programming",
        "Configured enterprise network infrastructure including IP routing, DHCP servers, and pfSense firewalls for improved security"
      ]
    }
  ];

  const projects = [
    {
      title: "RuralCare",
      event: "HACK4GOOD, NIT Calicut",
      period: "Dec 2024",
      role: "Team Lead",
      tech: ["Python", "Flask", "GCP", "Node.js", "Vite", "MySQL"],
      achievements: [
        "Led development of rural healthcare platform serving 50+ remote patients with REST APIs",
        "Integrated Twilio SMS notification system with automated cron jobs, reducing manual communication efforts by 80%",
        "Implemented Google Sheets API integration with OAuth 2.0 for real-time medical record access"
      ]
    },
    {
      title: "Node.js Projects",
      event: "Personal Development",
      period: "Present",
      role: "Developer",
      tech: ["Node.js", "MongoDB", "JWT", "REST APIs"],
      achievements: [
        "Developed multiple Node.js applications with MongoDB integration, optimizing query performance for 50% faster data retrieval",
        "Designed secure RESTful APIs with JWT authentication and role-based authorization mechanisms",
        "Utilized Vite build tool for high-performance frontend development with hot module reloading"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono overflow-x-hidden flex flex-col">
      {/* Terminal Header */}
      <div className="bg-gray-800 border-b border-green-500/30 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 ml-4">harini@portfolio:~$ ./portfolio.sh</span>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800/50 border-b border-green-500/20 px-6 py-4">
        <div className="flex flex-wrap gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`transition-colors hover:text-green-300 ${
                activeSection === section.id ? 'text-green-300 underline' : 'text-green-400'
              }`}
            >
              ./{section.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8 flex-1">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              {/* Hero Section with Profile Picture */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
                {/* Profile Picture Section */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    {/* Terminal-style frame around image */}
                    <div className="bg-gray-800 border-2 border-green-500/50 rounded-lg p-3 hover:border-green-400 transition-all duration-300">
                      <div className="bg-gray-700 rounded p-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-gray-400 ml-2">profile.jpg</span>
                        </div>
                        {/* Profile Image */}
                        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-green-400/20 via-gray-600 to-green-600/20 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
                          {/* Replace this div with your actual image */}
                          <Image
                            src="/profile.jpg"
                            alt="Harini G - Full Stack Developer"
                            fill
                            className="object-cover rounded-lg"
                            priority
                          />
                          {/* Fallback icon - remove when you add your image */}
                          {/* <div className="text-6xl text-green-400/60">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-lg border-2 border-green-400/0 group-hover:border-green-400/30 transition-all duration-300 animate-pulse"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                    <span className="text-green-300"></span> Harini G
                  </h1>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-green-300 mb-6 h-12">
                    {typedText}<span className="animate-pulse">|</span>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                    <div className="flex items-center bg-gray-800/50 border border-green-500/30 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-green-400 text-sm">Available for opportunities</span>
                    </div>
                    <div className="flex items-center bg-gray-800/50 border border-green-500/30 rounded-full px-4 py-2">
                      <MapPin className="w-3 h-3 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">Chennai, India</span>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto lg:mx-0">
                    <div className="text-center bg-gray-800/30 border border-green-500/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-300">1+</div>
                      <div className="text-xs text-gray-400">Years Exp</div>
                    </div>
                    <div className="text-center bg-gray-800/30 border border-green-500/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-300">50+</div>
                      <div className="text-xs text-gray-400">Users Served</div>
                    </div>
                    <div className="text-center bg-gray-800/30 border border-green-500/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-300">99.9%</div>
                      <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About Description */}
              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
                <h2 className="text-green-300 text-xl mb-4 flex items-center">
                  <span className="mr-2">$</span> cat about.txt
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Full-stack developer with 1+ years of hands-on experience building scalable web applications using Java, Python, and cloud technologies. Developed HIPAA-compliant healthcare solutions and automated data pipelines serving rural healthcare providers. Proven expertise in REST API development, database optimization, and cloud architecture with AWS and GCP.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Healthcare Tech', 'Cloud Architecture', 'API Development', 'Database Optimization'].map((tag) => (
                    <span key={tag} className="bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm">
                      #{tag.replace(' ', '')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Contact Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="mailto:harinigangadharan25@gmail.com" className="group bg-gray-800/50 border border-green-500/30 rounded-lg p-4 hover:bg-green-500/5 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-400 group-hover:text-green-300 mr-3" />
                    <div>
                      <p className="text-green-300 font-semibold text-sm">Email</p>
                      <p className="text-gray-400 text-xs">Get in touch</p>
                    </div>
                  </div>
                </a>
                
                <a href="tel:+919363113510" className="group bg-gray-800/50 border border-green-500/30 rounded-lg p-4 hover:bg-green-500/5 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300 mr-3" />
                    <div>
                      <p className="text-green-300 font-semibold text-sm">Phone</p>
                      <p className="text-gray-400 text-xs">Let&apos;s talk</p>
                    </div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/harini-g-27b269230/" className="group bg-gray-800/50 border border-green-500/30 rounded-lg p-4 hover:bg-green-500/5 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-green-400 group-hover:text-green-300 mr-3" />
                    <div>
                      <p className="text-green-300 font-semibold text-sm">LinkedIn</p>
                      <p className="text-gray-400 text-xs">Connect</p>
                    </div>
                  </div>
                </a>
                
                <a href="https://github.com/harini-ganga" className="group bg-gray-800/50 border border-green-500/30 rounded-lg p-4 hover:bg-green-500/5 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <Github className="w-5 h-5 text-green-400 group-hover:text-green-300 mr-3" />
                    <div>
                      <p className="text-green-300 font-semibold text-sm">GitHub</p>
                      <p className="text-gray-400 text-xs">View code</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-green-300">
              <span className="text-green-400"></span> ./skills --list
            </h2>
            
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-300 text-xl mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700/50 border border-green-500/40 px-3 py-1 rounded text-green-400 hover:bg-green-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-green-300">
              <span className="text-green-400"></span> ./experience --verbose
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-green-300">{exp.title}</h3>
                    <p className="text-green-400">{exp.company} | {exp.location}</p>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2 mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-green-300">
              <span className="text-green-400"></span> ./projects --showcase
            </h2>
            
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-green-300 flex items-center">
                      {project.title}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </h3>
                    <p className="text-green-400">{project.event} | {project.role}</p>
                    <p className="text-gray-400">{project.period}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-green-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700/50 border border-green-500/40 px-2 py-1 rounded text-sm text-green-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2 mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-green-300">
              <span className="text-green-400"></span> ./education --timeline
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-300">Bachelor of Engineering</h3>
                <p className="text-green-400">Electronics and Communication Engineering</p>
                <p className="text-gray-400">Loyola-ICAM College of Engineering and Technology</p>
                <p className="text-gray-400">Nov 2021 - Apr 2025 | CGPA: 8.0/10</p>
                <div className="mt-4">
                  <h4 className="text-green-300 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Database Management", "Network Protocols"].map((course) => (
                      <span
                        key={course}
                        className="bg-gray-700/50 border border-green-500/40 px-3 py-1 rounded text-green-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-300">12th Grade (Computer Science)</h3>
                <p className="text-gray-400">Government Higher Secondary School, Vellanguli, Tirunelveli</p>
                <p className="text-gray-400">Jun 2020 - Mar 2021 | Percentage: 88.4%</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-green-300">
              <span className="text-green-400"></span> ./contact --info
            </h2>
            
            <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-300 mb-4">Let&apos;s Connect!</h3>
                <p className="text-gray-300 text-lg">
                  Ready to collaborate on exciting projects or discuss opportunities
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="mailto:harinigangadharan25@gmail.com"
                  className="flex items-center justify-center p-4 bg-gray-700/50 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition-colors group"
                >
                  <Mail className="w-6 h-6 mr-3 text-green-400 group-hover:text-green-300" />
                  <div>
                    <p className="text-green-300 font-semibold">Email</p>
                    <p className="text-gray-400">harinigangadharan25@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+919363113510"
                  className="flex items-center justify-center p-4 bg-gray-700/50 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition-colors group"
                >
                  <Phone className="w-6 h-6 mr-3 text-green-400 group-hover:text-green-300" />
                  <div>
                    <p className="text-green-300 font-semibold">Phone</p>
                    <p className="text-gray-400">+91 93631 13510</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/harini-g"
                  className="flex items-center justify-center p-4 bg-gray-700/50 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 mr-3 text-green-400 group-hover:text-green-300" />
                  <div>
                    <p className="text-green-300 font-semibold">LinkedIn</p>
                    <p className="text-gray-400">linkedin.com/in/harini-g</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/harini-ganga"
                  className="flex items-center justify-center p-4 bg-gray-700/50 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition-colors group"
                >
                  <Github className="w-6 h-6 mr-3 text-green-400 group-hover:text-green-300" />
                  <div>
                    <p className="text-green-300 font-semibold">GitHub</p>
                    <p className="text-gray-400">github.com/harini-ganga</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Based in Nungambakkam, Chennai
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Always at bottom */}
      <footer className="mt-auto bg-gray-800 border-t border-green-500/30 px-6 py-6">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-gray-400">
              <span className="text-green-400 mr-2"></span>
              <span>Portfolio built with Next.js & Tailwind CSS</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="text-green-400">© 2025 Harini G</span>
            </div>
          </div>
          
          {/* Terminal command line decoration */}
          <div className="mt-4 pt-4 border-t border-green-500/20 text-center">
            <p className="text-green-400/60 text-sm font-mono">
              $ echo &quot;Thanks for visiting my portfolio!&quot;
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}