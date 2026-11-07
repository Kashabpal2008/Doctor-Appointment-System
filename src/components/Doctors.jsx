import Doctors_data from '../Data/Doctor_Data'

const Doctors = () => {
  return (
    <section className="py-12 px-15">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Meet our team of experienced healthcare professionals.
        </p>
    
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {Doctors_data.map((doctor) => (
 <div
  key={doctor.id}
  className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
>
  <img
    src={doctor.image}
    alt={doctor.name}
    className="w-full h-52 sm:h-60 md:h-64 object-cover object-top rounded-lg mb-5"
  />

  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
    {doctor.name}
  </h3>

  <h4 className="text-base sm:text-lg font-semibold text-green-600 mb-3">
    {doctor.specialization}
  </h4>

  <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
    {doctor.description}
  </p>
</div>
  ))}
</div>

      </div>
    </section>
  )
}

export default Doctors