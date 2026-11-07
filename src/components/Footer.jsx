
import {
  FaHeartPulse,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowRight,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="w-full px-15 pt-14 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-600
                              flex items-center justify-center">
                <FaHeartPulse className="text-white text-xl" />
              </div>

              <span className="text-2xl font-bold text-white">
                faith<span className="text-green-500">o</span>
              </span>
            </a>

            <p className="text-gray-400 leading-7 text-sm mb-6">
              Your health, our priority. Find the right healthcare
              professionals and take a step towards a healthier,
              happier life with Faitho.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-gray-800
                           flex items-center justify-center
                           hover:bg-green-600 hover:text-white
                           transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-gray-800
                           flex items-center justify-center
                           hover:bg-green-600 hover:text-white
                           transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-gray-800
                           flex items-center justify-center
                           hover:bg-green-600 hover:text-white
                           transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-lg bg-gray-800
                           flex items-center justify-center
                           hover:bg-green-600 hover:text-white
                           transition-all duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="/" className="hover:text-green-500 transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-green-500 transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-green-500 transition-colors">
                  Our Services
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-green-500 transition-colors">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="/booking" className="hover:text-green-500 transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="/services" className="hover:text-green-500 transition-colors">
                  General Physician
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-green-500 transition-colors">
                  Specialist Consultation
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-green-500 transition-colors">
                  Counselling
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-green-500 transition-colors">
                  Cardiology
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-green-500 transition-colors">
                  Doctor Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Get In Touch
            </h3>

            <ul className="space-y-5 text-sm">

              <li className="flex items-start gap-3">
                <FaLocationDot className="text-green-500 text-lg mt-1 shrink-0" />

                <span className="text-gray-400 leading-6">
                  Noida Uttar Pradesh,
                  <br />
                  India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-500 text-lg shrink-0" />

                <a
                  href="mailto:hello@faitho.com"
                  className="text-gray-400 hover:text-green-500 transition-colors break-all"
                >
                  hello@faitho.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-green-500 text-lg shrink-0" />

                <span className="text-gray-400">
                  +91 9876543210
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaClock className="text-green-500 text-lg mt-1 shrink-0" />

                <span className="text-gray-400 leading-6">
                  Appointment booking
                  <br />
                  at your convenience
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl
                        bg-gray-900 border border-gray-800
                        flex flex-col lg:flex-row
                        items-start lg:items-center
                        justify-between gap-6">

          <div>
            <h3 className="text-white text-xl font-bold mb-2">
              Stay Connected with Faitho
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              Take charge of your health and stay informed.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-3
                       bg-green-600 text-white font-semibold
                       px-6 py-3 rounded-xl
                       hover:bg-green-700 transition-colors"
          >
            Get In Touch
            <FaArrowRight />
          </a>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
   <div className="w-full px-15 py-5 flex flex-col sm:flex-row
                items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Faitho. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-green-500 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-gray-500 hover:text-green-500 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
