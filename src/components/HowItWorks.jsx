
import {
  FaUserDoctor,
  FaCalendarCheck,
  FaClipboardList,
  FaHeartPulse,
} from "react-icons/fa6";

const steps = [
  {
    id: 1,
    icon: FaUserDoctor,
    title: "Find Your Doctor",
    description:
      "Discover the right healthcare specialist according to your needs.",
  },
  {
    id: 2,
    icon: FaCalendarCheck,
    title: "Book Appointment",
    description:
      "Choose your preferred date and time for an appointment.",
  },
  {
    id: 3,
    icon: FaClipboardList,
    title: "Confirm Booking",
    description:
      "Enter your details and confirm your appointment easily.",
  },
  {
    id: 4,
    icon: FaHeartPulse,
    title: "Get Quality Care",
    description:
      "Connect with your doctor and take a step towards better health.",
  },
];

const HowItWorks = () => {
  return (
   <section className="bg-white pt-10 px-15">
      <div className="w-full">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Getting the healthcare you need is simple with Faitho.
          Follow these four easy steps to book your appointment.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="bg-gray-50 border border-gray-100
                           rounded-xl p-6 text-center
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5
                                flex items-center justify-center
                                rounded-full bg-green-100
                                text-green-600 text-2xl">
                  <Icon />
                </div>

                {/* Step Number */}
                <span className="text-sm font-bold text-green-600">
                  STEP 0{step.id}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mt-2 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-6">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
