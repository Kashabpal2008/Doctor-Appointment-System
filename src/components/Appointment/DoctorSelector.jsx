
import { useState } from "react";
import doctors from "../../Data/Doctor_Data";
import { useNavigate } from "react-router-dom";

const DoctorSelector = () => {
  const navigate = useNavigate();

  // Store selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    if (!selectedDoctor) return;

    // Send selected doctor to next page
    navigate("/SelectDateTime", {
      state: { selectedDoctor },
    });
  };

  return (
    <section className="py-10 sm:py-16 px-4">
      <div className="container mx-auto text-center">

        <h1 className="text-2xl sm:text-3xl font-bold">
          Book an Appointment
        </h1>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Please select a doctor from the list below to proceed with booking your appointment.
        </p>

        {/* Steps */}
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full">
            Step 1
          </span>

          <span className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
            Step 2
          </span>

          <span className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
            Step 3
          </span>

          <span className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
            Step 4
          </span>
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Choose a Doctor
        </h3>

        {/* Doctor Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {doctors.map((doctor) => {
            const isSelected = selectedDoctor?.id === doctor.id;

            return (
              <div
                key={doctor.id}
                className={`rounded-xl border-2 bg-white p-3 shadow-md transition-all duration-300
                  ${isSelected
                    ? "border-green-500 shadow-lg"
                    : "border-gray-200 hover:shadow-xl"
                  }`}
              >

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-52 object-cover object-top rounded-lg mb-5"
                />

                <div className="px-1 py-2">

                  <h2 className="text-lg font-semibold mb-2">
                    {doctor.name}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {doctor.specialization}
                  </p>

                <button
  onClick={() =>
    setSelectedDoctor(
      selectedDoctor?.id === doctor.id ? null : doctor
    )
  }
  className={`mt-2 w-full rounded-lg px-5 py-3 text-white font-medium transition
    ${
      isSelected
        ? "bg-green-500 hover:bg-green-600"
        : "bg-green-600 hover:bg-green-700"
    }`}
>
  {isSelected ? "✕ Selected" : "✓ Select Doctor"}
</button>

                </div>
              </div>
            );
          })}

        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between items-center gap-4">

          <button
            onClick={handleClick}
            className="rounded-lg bg-gray-600 px-6 py-3 text-white hover:bg-gray-700 transition"
          >
            Back
          </button>

          <button
            onClick={handleNextClick}
            disabled={!selectedDoctor}
            className={`rounded-lg px-6 py-3 text-white font-medium transition
              ${selectedDoctor
                ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Next →
          </button>

        </div>

        {/* Selected Doctor Info */}
        {selectedDoctor && (
          <p className="mt-5 text-green-700 font-medium">
            Selected Doctor: {selectedDoctor.name}
          </p>
        )}

      </div>
    </section>
  );
};

export default DoctorSelector;
