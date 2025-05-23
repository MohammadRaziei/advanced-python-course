import Head from 'next/head';
import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTrophy, faLightbulb, faBook, faRobot, faCube, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { handlePath } from '../utils/path';
import { convertToNbviewerUrl } from 'utils/urlConverter';
import Loading from '../components/Loading';


const repo_url = "https://github.com/MohammadRaziei/advanced-python-course"
function repoPath(path: string, branch: string = "master"): string {
  return repo_url + "/tree/" + branch + "/" + path;
}
function notebookPath(path:string, branch: string = "master"): string {
  return convertToNbviewerUrl(repoPath(path, branch));
}


const syllabus = [
  {
    id: 1,
    title: "Why Python?",
    icon: faCheckCircle,
    topics: [
      "Pros & Cons overview",
      "Comparison with other languages",
      "AI's impact on Python adoption",
      "Key libraries landscape"
    ],
    resources: {
      enroll_needed: false,
      code: repoPath("1-why-python"),
      notebooks: [
        { name: "Why Python?", url: notebookPath("1-why-python/why-python.ipynb") },
      ]
    }
  },
  {
    id: 2,
    title: "Core Python Libraries",
    icon: faCube,
    topics: [
      "AI: TensorFlow, PyTorch",
      "Optimization: CVXPY",
      "Vision: OpenCV, PIL",
      "Audio: Librosa",
      "NLP and Parsers: Hazm, Selectolax"
    ],
    resources: {
      enroll_needed: false,
      code: repoPath("2-python-libraries"),
      notebooks: [
        { name: "AI Frameworks", url: notebookPath("2-python-libraries/i-ai-frameworks.ipynb") },
        { name: "Visualization In Python", url: notebookPath("2-python-libraries/ii-visualization.ipynb") },
        { name: "Audio Processing", url: notebookPath("2-python-libraries/iii-audio-processing.ipynb") },
        { name: "NLP and Parsers", url: notebookPath("2-python-libraries/iv-nlp-and-parsers.ipynb") },
        { name: "Image Processing", url: notebookPath("2-python-libraries/v-image-processing.ipynb") }
      ]
    }
  },
  {
    id: 3,
    title: "Object-Oriented Programming in Python",
    icon: faCode,
    topics: [
      "OOP concepts in Python and class creation",
      "Inheritance and polymorphism",
      "Built-in methods like operators",
      "Static methods",
      "Properties and OOP applications"
    ],
    resources: {
      enroll_needed: false,
      code: repoPath("3-object-oriented-programming"),
      notebooks: [
        { name: "OOP Basics", url: notebookPath("3-object-oriented-programming/i-oop-basic.ipynb") },
        { name: "OOP Advanced", url: notebookPath("3-object-oriented-programming/ii-oop-advanced.ipynb") }
      ]
    }
  },
  {
    id: 4,
    title: "Python Decorators",
    icon: faBook,
    topics: [
      "Introduction to decorators",
      "Function and class decorators",
      "Simple decorators",
      "Advanced decorators",
      "Practical decorator applications"
    ],
    resources: {
      enroll_needed: false,
      code: repoPath("4-python-decorators"),
      notebooks: [
        { name: "Basic Decorators", url: notebookPath("4-python-decorators/i-decorator-basics.ipynb") },
        { name: "Advanced Decorators", url: "https://notebooks.com/advanced-decorators" }
      ]
    }
  },
  {
    id: 5,
    title: "Type Annotations",
    icon: faLightbulb,
    topics: [
      "Typing and checkguard libraries",
      "Pydantic library"
    ],
    resources: {
      enroll_needed: true,
      code: "https://github.com/MohammadRaziei/advanced-python-course/module5",
      notebooks: [
        { name: "Typing System", url: "https://notebooks.com/typing-system" },
        { name: "Working with Pydantic", url: "https://notebooks.com/pydantic" }
      ]
    }
  },
  {
    id: 6,
    title: "Functional Programming",
    icon: faRobot,
    topics: [
      "Functional programming concepts",
      "List comprehensions",
      "Generators",
      "Lambda functions",
      "List, map, and filter functions"
    ],
    resources: {
      enroll_needed: true,
      code: "https://github.com/MohammadRaziei/advanced-python-course/module6",
      notebooks: [
        { name: "Functional Programming", url: "https://notebooks.com/functional" },
        { name: "Generators", url: "https://notebooks.com/generators" }
      ]
    }
  },
  {
    id: 7,
    title: "Python Modules and Project Structure",
    icon: faTrophy,
    topics: [
      "Clean architecture and proper file organization",
      "Introduction to setup.py and pyproject",
      "Linters",
      "Hatch and setuptools",
      "Build process and wheel files",
      "Pip-tools library",
      "Testing with unittest and pytest"
    ],
    resources: {
      enroll_needed: true,
      code: "https://github.com/MohammadRaziei/advanced-python-course/module7",
      notebooks: [
        { name: "Project Structure", url: "https://notebooks.com/project-structure" },
        { name: "Testing", url: "https://notebooks.com/testing" }
      ]
    }
  },
  {
    id: 8,
    title: "Design Patterns",
    icon: faCube,
    topics: [
      "Singleton pattern",
      "Logging library",
      "Factory pattern"
    ],
    resources: {
      enroll_needed: true,
      code: "https://github.com/MohammadRaziei/advanced-python-course/module8",
      notebooks: [
        { name: "Design Patterns", url: "https://notebooks.com/design-patterns" },
        { name: "Singleton & Factory", url: "https://notebooks.com/singleton-factory" }
      ]
    }
  },
  {
    id: 9,
    title: "Web Services",
    icon: faCode,
    topics: [
      "Flask, FastAPI, and Uvicorn",
      "Gradio library"
    ],
    resources: {
      enroll_needed: true,
      code: "https://github.com/MohammadRaziei/advanced-python-course/module9",
      notebooks: [
        { name: "FastAPI Web Services", url: "https://notebooks.com/fastapi" },
        { name: "Gradio UI", url: "https://notebooks.com/gradio" }
      ]
    }
  }
];


const features = [
  {
    icon: faLightbulb,
    title: "Modern Curriculum",
    description: "Covering latest Python 3.11+ features and AI ecosystem tooling"
  },
  {
    icon: faTrophy,
    title: "Expert Instruction",
    description: "Industry professionals with real-world experience"
  },
  {
    icon: faCode,
    title: "Hands-on Projects",
    description: "Practical exercises and real-world implementations"
  }
];


const relatedMaterials = [
  {
    icon: faGithub,
    title: "Python Project Template",
    url: "https://github.com/MohammadRaziei/cookiecutter-python-template",
    linkText: "View on GitHub →",
    iconColor: "text-gray-800"
  },
  {
    icon: faGithub,
    title: "Silero VAD Python",
    url: "https://github.com/MohammadRaziei/silero-vad-python/",
    linkText: "View on GitHub →",
    iconColor: "text-gray-800"
  },
  {
    icon: faBook, // Or faLink if you prefer
    title: "Design Patterns Guide",
    url: "https://refactoring.guru/design-patterns",
    linkText: "Visit Refactoring.Guru →",
    iconColor: "text-blue-600" // Keep the blue color for this one
  }
];

export default function AdvancedPythonCourse() {
  return (
    <Loading>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Advanced Python Masterclass - Professional Development</title>
          <meta name="description" content="Comprehensive advanced Python course covering AI, OOP, Decorators, Type Systems, and Modern Tooling" />
        </Head>

        {/* Navigation Bar */}
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img 
                  src='https://raw.githubusercontent.com/MohammadRaziei/mohammadraziei.github.io/main/src/images/logo.svg' 
                  alt="Python Pro Logo" 
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-bold text-blue-600">Python Pro</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="#syllabus" className="text-gray-700 hover:text-blue-600">Syllabus</Link>
                <Link href="#resources" className="text-gray-700 hover:text-blue-600">Resources</Link>
                <Link href="#purchase" className="text-gray-700 hover:text-blue-600">Enroll</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Advanced Python Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive professional course covering modern Python features, AI tooling, 
              and production-grade development practices.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#purchase" className="flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                <img
                  src="https://hamrah.academy/blog/wp-content/uploads/2023/11/cropped-Academy-Logo-2.png"
                  alt="Hamrah Academy Logo"
                  className="h-5 w-5 mr-2"
                  style={{ background: "transparent" }}
                />
                Enroll Now
              </a>
              <a href={repo_url} target="_blank" rel="noopener" className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Why This Course?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature: any, index: number) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg">
                      <FontAwesomeIcon icon={feature.icon} className="text-blue-600 text-3xl mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

        {/* Meet the Instructor Section */}
        <section id="instructor" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            {/* Optional: Add instructor image here */}
            {/* <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex justify-center">
              <img
                src='IMAGE_URL_HERE' // Replace with actual image URL
                alt="Mohammad Raziei"
                className="rounded-full h-48 w-48 object-cover shadow-lg border-4 border-white"
              />
            </div> */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Mohammad Raziei</h3>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Mohammad brings extensive experience from the fields of <strong className="text-gray-800">Telecommunications</strong>, <strong className="text-gray-800">Signal Processing</strong>, and <strong className="text-gray-800">Artificial Intelligence</strong>. His passion for teaching and real-world expertise ensures this course covers practical applications, modern tooling, and industry best practices to elevate your Python skills.
              </p>
              <a
                href="https://mohammadraziei.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow hover:shadow-md"
              >
                Learn More About Mohammad
              </a>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section id="syllabus" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Course Syllabus</h2>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Module</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Topics Covered</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Resources</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {syllabus.map((module) => (
                    <tr key={module.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <FontAwesomeIcon icon={module.icon} className="text-blue-600 mr-2" />
                        {module.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ul className="list-disc pl-6">
                          {module.topics.map((topic, index) => (
                            <li key={index} className="text-gray-700 mb-2">{topic}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col space-y-2">
                          {module.resources.enroll_needed ? (
                            <div className="relative group">
                              <span className="text-gray-400 cursor-not-allowed">
                                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                Source Code
                              </span>
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 whitespace-nowrap z-10">
                                Please enroll in the course to access this resource
                              </div>
                            </div>
                          ) : (
                            <a href={module.resources.code} className="text-blue-600 hover:underline" target="_blank" rel="noopener">
                              <FontAwesomeIcon icon={faGithub} className="mr-2" />
                              Source Code
                            </a>
                          )}
                          <div className="mt-2">
                            <span className="font-medium">Notebooks:</span>
                            <ul className="list-disc pl-6 mt-1">
                              {module.resources.notebooks.map((notebook, index) => (
                                <li key={index} className="flex items-center mb-2">
                                  {module.resources.enroll_needed ? (
                                    <div className="relative group">
                                      <span className="text-gray-400 cursor-not-allowed flex items-center">
                                        <img 
                                          src={handlePath("/icons/jupyter.svg")}
                                          alt="Jupyter Notebook" 
                                          className="w-4 h-4 inline-block mr-2 opacity-50"
                                        />
                                        {notebook.name}
                                      </span>
                                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 whitespace-nowrap z-10">
                                        Please enroll in the course to access this notebook
                                      </div>
                                    </div>
                                  ) : (
                                    <a href={notebook.url} className="text-blue-600 hover:underline flex items-center" target="_blank" rel="noopener">
                                      <img 
                                        src={handlePath("/icons/jupyter.svg")}
                                        alt="Jupyter Notebook" 
                                        className="w-4 h-4 inline-block mr-2"
                                      />
                                      {notebook.name}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related Materials Section */}
        <section id="related-materials" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Related Materials</h2>
            {/* Change md:grid-cols-3 to md:grid-cols-2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedMaterials.map((material, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
                  <FontAwesomeIcon icon={material.icon} className={`${material.iconColor} text-3xl flex-shrink-0`} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
                    <a
                      href={material.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {material.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section (Commented out) */}
        {/* <section id="resources" className="py-20 bg-gray-100"> ... </section> */}

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-4">© 2024 Python Pro Masterclass. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href={repo_url} target="_blank" rel="noopener">
                <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-300" />
              </a>
              {/* Add more social links */}
            </div>
          </div>
        </footer>
      </div>
    </Loading>
  );
}