
import DoctorImg from "../assets/Indian-doctor.png";

const Hero = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <h2 className="mb-4 text-3xl">
              Get Appointment <br />
              Easy And Fast
            </h2>

            <p className="mb-6 font-semibold text-green-600">
              YOUR TRUSTED SERVICE PARTNER
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Your Health Deserve{" "}
              <span className="text-green-600">
                The Best Care
              </span>
            </h1>

            <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-left">
              Connect with trusted healthcare professionals and get
              the care you need, when you need it.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <button className="rounded-md bg-green-600 px-6 py-3 text-white transition hover:bg-green-700">
                Book Appointment
              </button>

              <button className="rounded-md border border-green-600 px-6 py-3 text-green-600 transition hover:bg-green-600 hover:text-white">
                Contact Us
              </button>

            </div>
          </div>

          {/* Right Doctor Image */}
          <div className="flex h-[350px] w-full items-center justify-center sm:h-[450px]">

            <img
              src={DoctorImg}
              alt="Indian Doctor"
              className="h-full w-full object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
