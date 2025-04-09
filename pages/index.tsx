import Head from 'next/head';
import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTrophy, faLightbulb, faBook, faRobot, faCube, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
      code: "https://github.com/your-repo/module1",
      notebooks: [
        { name: "Python Basics", url: "https://notebooks.com/python-basics" },
        { name: "AI Impact Analysis", url: "https://notebooks.com/ai-impact" }
      ]
    }
  },
  {
    id: 2,
    title: "Core Python Libraries",
    icon: faCube,
    topics: [
      "AI: TensorFlow, PyTorch, Lightning",
      "Vision: OpenCV, PIL",
      "Audio: Librosa, TorchAudio",
      "NLP: SpaCy, Selectolax",
      "Optimization: CVXPY"
    ],
    resources: {
      code: "https://github.com/your-repo/module2",
      notebooks: [
        { name: "TensorFlow Basics", url: "https://notebooks.com/tf-basics" },
        { name: "OpenCV Tutorial", url: "https://notebooks.com/opencv" }
      ]
    }
  },
  // ... Add other syllabus items following the same pattern
];

export default function AdvancedPythonCourse() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Advanced Python Masterclass - Professional Development</title>
        <meta name="description" content="Comprehensive advanced Python course covering AI, OOP, Decorators, Type Systems, and Modern Tooling" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex-shrink-0 text-xl font-bold text-blue-600">
              Python Pro
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
            <a href="#purchase" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Enroll Now
            </a>
            <a href="https://github.com/MohammadRaziei/advanced-python-course" target="_blank" rel="noopener" className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900">
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
            <div className="p-6 bg-gray-50 rounded-lg">
              <FontAwesomeIcon icon={faLightbulb} className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
              <p>Covering latest Python 3.11+ features and AI ecosystem tooling</p>
            </div>
            {/* Add more features */}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Course Syllabus</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
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
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-6">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="text-gray-700 mb-2">{topic}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-2">
                        <a href={module.resources.code} className="text-blue-600 hover:underline" target="_blank" rel="noopener">
                          <FontAwesomeIcon icon={faGithub} className="mr-2" />
                          Source Code
                        </a>
                        <div className="mt-2">
                          <span className="font-medium">Notebooks:</span>
                          <ul className="list-disc pl-6 mt-1">
                            {module.resources.notebooks.map((notebook, index) => (
                              <li key={index} className="flex items-center mb-2">
                                <a href={notebook.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener">
                                  <img 
                                    src="/icons/jupyter.svg" 
                                    alt="Jupyter Notebook" 
                                    className="w-4 h-4 inline-block mr-2"
                                  />
                                  {notebook.name}
                                </a>
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

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Course Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Jupyter Notebooks</h3>
              <a href="https://your-notebook-site.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">
                View Interactive Notebooks →
              </a>
            </div>
            {/* Add more resource blocks */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© 2024 Python Pro Masterclass. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-300" />
            </a>
            {/* Add more social links */}
          </div>
        </div>
      </footer>
    </div>
  );
}