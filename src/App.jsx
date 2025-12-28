import { useState } from 'react'
import './App.css'
import boy from './assets/boy2.png'
import bank from './assets/bank3.jpg'
import grow from './assets/grow.jpg'
import solut from './assets/solution.jpg'
import loan from './assets/loan.jpg'
import invest from './assets/invest.jpg'
import  customer from './assets/customer.jpg'
import men1 from './assets/riq2.jpg'
import women from './assets/women.jpg'
import men2 from './assets/men2.jpg'

function App() {
    const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
          {/* Navbar */}
      <nav className="bg-[rgb(30,27,56)] fixed w-full z-50 top-0 start-0 border-b border-default overflow-x-hidden">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full">
          <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <h2 className="text-blue-700 text-3xl ml-2 sm:ml-10">
              B<span className="text-white">ank</span>.
            </h2>
          </a>

          <div className="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="mr-2 sm:mr-4 px-3 py-2 btn text-sm sm:text-base">
              Join Us
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white rounded-md md:hidden hover:bg-neutral-secondary-soft focus:outline-none focus:ring-2 focus:ring-neutral-tertiary z-50"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`text-white items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "flex" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 border border-default rounded-base bg-neutral-secondary-soft md:border-0 md:bg-neutral-primary">
              <li>
                <a href="#about" className="nav-link block py-2 px-3 rounded-sm md:bg-transparent md:text-fg-brand md:p-0">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#team" className="nav-link block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-gray-600 body-font bg-[rgb(30,27,56)] pt-24">
        <div className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center">
          <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
           <h1 className="title-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white m-0 leading-tight head">
              Banking Has <br className="hidden lg:inline-block" />
              Become <span className="text-blue-700">Easy</span>
            </h1>
            <p className="mt-3 mb-6 leading-relaxed text-gray-400 max-w-lg">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bt inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Let Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-5/6 lg:max-w-lg">
            <img
              className="object-cover object-center rounded mx-auto md:mx-0"
              alt="hero"
              src={boy}
            />
          </div>
        </div>
      </section>

      {/* Track Budget Section */}
      <section id="budget" className="text-gray-600 body-font bg-[rgb(30,27,56)] trid">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium title-font mb-2 text-white  head2">
              Track Your <span className="text-blue-700">Budget</span>
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              You can easily track your budget,<br />
              keep track of income and expenses
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              { title: "DIGITAL", subtitle: "Online Banking", desc: "Access your accounts, transfer funds, and pay bills securely from anywhere, anytime.", img: bank },
              { title: "SAVINGS", subtitle: "Grow Your Savings", desc: "Open a savings account with attractive interest rates to grow your money safely.", img: grow },
              { title: "BUSINESS", subtitle: "Business Solutions", desc: "Customized banking solutions for businesses to manage cash flow, payroll, and investments.", img: solut },
              { title: "LOANS", subtitle: "Personal & Business Loans", desc: "Flexible loan options to meet your personal or business financial needs efficiently.", img: loan },
              { title: "INVESTMENTS", subtitle: "Wealth Management", desc: "Grow your wealth with our expert investment solutions and portfolio management services.", img: invest },
              { title: "SUPPORT", subtitle: "24/7 Customer Care", desc: "Our customer support team is always ready to assist you with all your banking queries and services.", img: customer },
            ].map((card, i) => (
              <div key={i} className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="flex relative">
                  <img alt={card.subtitle} className="absolute inset-0 w-full h-full object-cover object-center rounded" src={card.img} />
                  <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{card.title}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{card.subtitle}</h1>
                    <p className="leading-relaxed text-sm sm:text-base">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[rgb(40,37,70)] text-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Banking Services</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We offer a variety of banking services tailored to your needs. Whether it’s managing accounts, investments, or payments, we have solutions for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[rgb(50,45,90)] p-8 rounded-2xl hover:bg-blue-700 transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-2">Digital Wallet</h3>
              <p className="text-gray-300">
                Secure and fast digital wallet for payments, transfers, and online shopping.
              </p>
            </div>
            <div className="bg-[rgb(50,45,90)] p-8 rounded-2xl hover:bg-blue-700 transition">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold mb-2">Credit & Debit Cards</h3>
              <p className="text-gray-300">
                Convenient credit and debit cards with worldwide acceptance and security features.
              </p>
            </div>
            <div className="bg-[rgb(50,45,90)] p-8 rounded-2xl hover:bg-blue-700 transition">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-semibold mb-2">Investment Plans</h3>
              <p className="text-gray-300">
                Grow your wealth with our safe and flexible investment and portfolio management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[rgb(28,25,50)] text-white py-20">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-blue-700 rounded-2xl p-8 flex items-center justify-center h-full">
              <span className="text-9xl">🏦</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">About Our Bank</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded on trust and innovation, our bank is committed to providing 
              top-notch financial services to individuals and businesses alike. 
            </p>
            <ul className="space-y-3 text-gray-200">
              <li>✔ Trusted by thousands of customers</li>
              <li>✔ Innovative financial solutions</li>
              <li>✔ Secure and fast digital banking</li>
            </ul>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-[rgb(28,25,50)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Team</h2>
          <p className="text-white mb-10 max-w-2xl mx-auto">
            Meet the professionals who are dedicated to serving you with excellence and trust.
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {[{name:"John Doe", role:"Branch Manager", img:men1}, {name:"Sarah Smith", role:"Senior Banker", img:women}, {name:"Michael Lee", role:"Finance Advisor", img:men2}].map((member,i)=>(
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-blue-200"/>
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-blue-700 mb-4">{member.role}</p>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[rgb(28,25,50)] text-white py-20">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have any questions or want to get in touch? Fill out the form below or reach out to us via email or phone.
          </p>
          <form className="max-w-xl mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white"/>
            <input type="email" placeholder="Email Address" className="p-3 rounded bg-gray-800 text-white"/>
            <textarea placeholder="Message" className="p-3 rounded bg-gray-800 text-white"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(30,27,56)] text-gray-300 py-10">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-white text-2xl font-bold mb-2">MyBank</h2>
            <p className="max-w-xs">
              Providing trusted and reliable banking solutions. Secure, fast, and customer-focused.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-center md:text-right text-gray-400">
            &copy; {new Date().getFullYear()} Lubna. All Rights Reserved.
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;

