
import {
  FaHeartPulse,
  FaUserDoctor,
  FaShieldHeart,
  FaArrowRight,
} from "react-icons/fa6";

const WhoWeAre = () => {
  const features = [
    {
      icon: <FaUserDoctor />,
      title: "Patient-Focused Care",
      description:
        "We put patients first and aim to make their healthcare journey simple and comfortable.",
    },
    {
      icon: <FaShieldHeart />,
      title: "Care You Can Trust",
      description:
        "We focus on providing a reliable and user-friendly platform to explore healthcare services.",
    },
    {
      icon: <FaHeartPulse />,
      title: "Healthcare Made Simple",
      description:
        "We help users discover services and take the next step towards their healthcare needs.",
    },
  ];

  return (
    <section className="bg-green-50/60 px-4 sm:px-6 lg:px-15 py-16 md:py-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            WHO WE ARE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-5">
            Making Healthcare
            <span className="block text-green-600 mt-2">
              Easier for Everyone
            </span>
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            Faitho is a healthcare platform designed to make exploring
            healthcare services easier and more convenient. We believe that
            finding the right information should be a simple experience.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            Our goal is to create a user-friendly platform where people can
            explore available services, learn about their options, and take
            informed next steps for their healthcare needs.
          </p>

          <a
            href="/services"
            className="inline-flex items-center gap-3 mt-7 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg shadow-green-600/20"
          >
            Discover Our Services
            <FaArrowRight />
          </a>
        </div>

        {/* Right Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
