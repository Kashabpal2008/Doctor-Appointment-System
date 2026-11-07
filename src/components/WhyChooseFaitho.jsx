
import {
  FaUserMd,
  FaHeart,
  FaClock,
  FaLaptopMedical,
  FaArrowRight,
} from "react-icons/fa";

const WhyChooseFaitho = () => {
  const features = [
    {
      icon: <FaUserMd />,
      number: "01",
      title: "Patient-Focused",
      description:
        "We put your needs first and aim to make your healthcare journey comfortable and easy to navigate.",
    },
    {
      icon: <FaHeart />,
      number: "02",
      title: "Care That Matters",
      description:
        "We believe every healthcare journey deserves attention, clarity, and a thoughtful experience.",
    },
    {
      icon: <FaClock />,
      number: "03",
      title: "Convenient Experience",
      description:
        "Explore healthcare information and available services through a simple, user-friendly platform.",
    },
    {
      icon: <FaLaptopMedical />,
      number: "04",
      title: "Simple Digital Access",
      description:
        "Our platform is designed to help you navigate healthcare services without unnecessary complexity.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-15 py-16 md:py-20">
      <div className="w-full">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            WHY CHOOSE FAITHO
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
            Healthcare Experience
            <span className="block text-green-600 mt-2">
              Designed Around You
            </span>
          </h2>

          <p className="text-gray-600 leading-7 mt-5">
            We aim to make exploring healthcare services simpler with a
            user-friendly experience that keeps your needs at the center.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>

                <span className="text-4xl font-bold text-gray-100 group-hover:text-green-100 transition-colors">
                  {feature.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-7">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mt-6">
                <span>Learn more</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-green-600 rounded-3xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Your Well-being Comes First
            </h3>

            <p className="text-green-50 mt-3 leading-7 max-w-2xl">
              Explore Faitho and discover a simpler way to navigate your
              healthcare needs.
            </p>
          </div>

          <a
            href="/services"
            className="shrink-0 inline-flex items-center gap-3 bg-white text-green-700 px-6 py-4 rounded-xl font-semibold hover:bg-green-50 transition duration-300"
          >
            Explore Services
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseFaitho;
