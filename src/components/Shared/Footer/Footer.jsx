import { Link } from 'react-router';
import {  
  Mail 
} from 'lucide-react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';
import logo from "../../../assets/images/logo-flat.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-300 py-8 px-4  rounded-xl mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center space-x-2 text-white">
         <img src={logo} className="rounded-full size-8" />
      <span className="text-xl font-bold text-gray-800 dark:text-gray-200">BookCourier</span>
    </div>
          <ul className="space-y-2 mt-4">
            <li><Link to="/books" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">All Books</Link></li>
            <li><Link to="/add-car" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Add Book</Link></li>
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Profile</Link></li>
            <li><Link to="/login" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Guides</Link></li>
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Poly Tips</Link></li>
            <li><Link to="/resources" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Community</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Discussion Forums</Link></li>
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Study Groups</Link></li>
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Events & Workshops</Link></li>
            <li><Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-blue-600">Leaderboard</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/md.sumon.ahmed.683710" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-blue-700">
              <MdFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-blue-400">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/md-sumon-ahmed-a75a92270/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-pink-600">
              <FaLinkedin size={24} />
            </a>
          
          </div>
          <div>
            <a 
              href="mailto:support@nihonlearn.com" 
              className="flex items-center text-gray-600 dark:text-gray-200 hover:text-blue-600"
            >
              <Mail size={18} className="mr-2" /> support@sumonlearn.com
            </a>
          </div>
        </div>
      </div>


      <div className="border-t lg:mb-0 md:mb-0 mb-20 border-[#eaf2f8] mt-8 pt-4 text-center">
        <p className="text-sm text-black dark:white">
          © {currentYear}BookCourier. All Rights Reserved.
          <span className="ml-4">
            <Link to="/" className="hover:text-blue-600 mr-3">Privacy Policy</Link>
            <Link to="/" className="hover:text-blue-600">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
