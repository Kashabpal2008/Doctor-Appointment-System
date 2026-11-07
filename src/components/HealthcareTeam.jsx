
import {
  FaUserMd,
  FaStethoscope,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "General Physicians",
    role: "Primary Healthcare",
    description:
      "Explore general healthcare guidance and options for common health concerns.",
    icon: <FaUserMd />,
    tag: "GENERAL CARE",
  },
  {
    id: 2,
    name: "Medical Specialists",
    role: "Specialist Consultation",
    description:
      "Discover specialist consultation options based on your healthcare needs.",
    icon: <FaStethoscope />,
    tag: "SPECIALIZED CARE",
  },
  {
    id: 3,
    name: "Wellness Support",
    role: "Health & Well-being",
    description:
      "Explore resources and services that support your overall well-being.",
    icon: <FaHeart />,
    tag: "WELLNESS",
  },
];

const HealthcareTeam = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-15 py-16 md:py-20">
      <div className="w-full">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              OUR HEALTHCARE NETWORK
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              Explore Healthcare
              <span className="block text-green-600 mt-2">
                Services & Specialists
              </span>
            </h2>
          </div>

          <p className="text-gray-600 leading-7 max-w-lg">
            Find information about different healthcare options and explore
            services that may suit your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {team.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8 hover:bg-white hover:border-green-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-3xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <span className="text-xs font-bold tracking-wide text-green-700 bg-green-100 px-3 py-2 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mt-7">
                {item.name}
              </h3>

              <p className="text-green-600 font-semibold text-sm mt-2">
                {item.role}
              </p>

              <p className="text-gray-600 leading-7 mt-4">
                {item.description}
              </p>

              {/* Feature */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-6">
                <FaCheckCircle className="text-green-600" />
                <span>Explore available options</span>
              </div>

              {/* Button */}
              <a
                href="/services"
                className="mt-7 flex items-center justify-between w-full border border-green-200 text-green-700 font-semibold rounded-xl px-5 py-4 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
              >
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareTeam;
