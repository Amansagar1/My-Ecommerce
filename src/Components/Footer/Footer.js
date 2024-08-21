import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import footerData from './Footer.json';

const iconMap = {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
};

export default function Footer() {
  const { socialMediaLinks, contact, subscribe, programs, service } = footerData;

  return (
    <footer className="text-white bg-black border shadow-lg">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Programs Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Programs</h3>
          <ul>
            {programs.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Service Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Service</h3>
          <ul>
            {service.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul>
            <li className="mb-2">{contact.phone}</li>
            <li className="mb-2">{contact.email}</li>
            <li className="mb-2">{contact.address}</li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 flex-wrap">
            {socialMediaLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 rounded-full bg-white text-blue-900 hover:bg-gray-300"
                  aria-label={social.name}
                >
                  <IconComponent className="text-xl" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder={subscribe.placeholder}
              className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md mt-4 md:mt-0 md:ml-2 hover:bg-blue-600"
            >
              {subscribe.buttonText}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-500 py-4 text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} SagarSharma.com
        </p>
      </div>
    </footer>
  );
}
