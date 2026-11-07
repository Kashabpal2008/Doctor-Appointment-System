import DoctorImg from "../assets/indian-doctor.png";

const Hero = () => {
  return (
  <section className="py-16">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-10 lg:grid-cols-2">

      {/* Left */}
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
<p className="mt-5 max-w-xl mx-auto text-center lg:mx-0 lg:text-left text-base sm:text-lg text-gray-600 leading-relaxed">
  Connect with trusted healthcare professionals and get the care you need,
  when you need it.
</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-md bg-green-600 px-6 py-3 text-white hover:bg-green-700">
              Book Appointment
            </button>
              <button className="rounded-md border border-green-600 px-6 py-3 text-green-600 hover:bg-green-600 hover:text-white">
             Contact us 
            </button>
          </div>
      </div>

      {/* Right */}
      {/* Right */}
<div
  className="bg-contain bg-no-repeat bg-center h-98 rounded-lg shadow-lg"
  style={{ backgroundImage: `url(${DoctorImg})` }}
>
</div>
      </div>

    </div>

  
</section>
  )
}

export default Hero