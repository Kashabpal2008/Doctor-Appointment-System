import {
  FaStethoscope,
  FaHeartPulse,
  FaBrain,
  FaBaby,
  FaTooth,
  FaEye,
  FaBone,
  FaPersonCane,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const specialties = [
  {
    id: 1,
    title: "General Physician",
    description:
      "Consult a physician for common illnesses, fever, infections, and everyday health concerns.",
    icon: FaStethoscope,
    color: "bg-green-100 text-green-600",
    tag: "General Care",
  },
  {
    id: 2,
    title: "Cardiology",
    description:
      "Explore specialist consultations for heart health and cardiovascular concerns.",
    icon: FaHeartPulse,
    color: "bg-rose-100 text-rose-500",
    tag: "Heart Health",
  },
  {
    id: 3,
    title: "Mental Wellness",
    description:
      "Find professional support for emotional well-being, stress, and mental health concerns.",
    icon: FaBrain,
    color: "bg-purple-100 text-purple-600",
    tag: "Mental Health",
  },
  {
    id: 4,
    title: "Pediatrics",
    description:
      "Explore healthcare services focused on children's health, development, and well-being.",
    icon: FaBaby,
    color: "bg-sky-100 text-sky-600",
    tag: "Child Care",
  },
  {
    id: 5,
    title: "Dental Care",
    description:
      "Get guidance for oral hygiene, dental concerns, and maintaining healthy teeth and gums.",
    icon: FaTooth,
    color: "bg-orange-100 text-orange-600",
    tag: "Oral Health",
  },
  {
    id: 6,
    title: "Eye Care",
    description:
      "Explore consultations for vision concerns, routine checkups, and general eye health.",
    icon: FaEye,
    color: "bg-indigo-100 text-indigo-600",
    tag: "Vision Care",
  },
  {
    id: 7,
    title: "Orthopedics",
    description:
      "Explore specialist care for bone, joint, muscle, and mobility-related concerns.",
    icon: FaBone,
    color: "bg-amber-100 text-amber-600",
    tag: "Bone & Joint",
  },
  {
    id: 8,
    title: "Senior Care",
    description:
      "Discover healthcare consultations focused on the changing needs of older adults.",
    icon: FaPersonCane,
    color: "bg-teal-100 text-teal-600",
    tag: "Elderly Care",
  },
];

const MedicalSpecialties = () => {
  return (
    <section
      id="medical-specialties"
      className="relative overflow-hidden bg-gray-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <FaHeartPulse />
              MEDICAL SPECIALTIES
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Find the Right Care
              <span className="block text-green-600">
                for Your Health
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore different medical specialties and discover the type
              of consultation that best suits your healthcare needs.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm lg:self-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
              <FaStethoscope />
            </div>

            <div>
              <p className="font-bold text-gray-900">
                Explore Specialties
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Find care for your needs
              </p>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;

            return (
              <article
                key={specialty.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />

                {/* Icon and Arrow */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${specialty.color}`}
                  >
                    <Icon />
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </span>
                </div>

                {/* Tag */}
                <span className="mt-6 w-fit rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500 transition-colors group-hover:bg-green-50 group-hover:text-green-700">
                  {specialty.tag}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-gray-900 transition-colors group-hover:text-green-700 sm:text-xl">
                  {specialty.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-grow text-sm leading-7 text-gray-600">
                  {specialty.description}
                </p>

                {/* Booking Link */}
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-bold text-green-700 transition-all duration-300 hover:gap-3"
                >
                  Explore Care
                  <FaArrowRight />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom Information */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-green-100 bg-white p-6 sm:p-8 md:flex-row">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-600">
              <FaHeartPulse />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Not Sure Which Specialty You Need?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600">
                Contact us to learn more about our services and find the
                appropriate next step for your healthcare needs.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MedicalSpecialties;