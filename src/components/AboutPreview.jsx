import doctor from '../assets/doctor appoitment.jpg'

const AboutPreview = () => {
  return (
   <section className="px-15 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Learn more about our company and what we do.
      </p>
<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md
                flex flex-col md:flex-row items-center
                gap-6 md:gap-8 w-full max-w-7xl mx-auto">
  {/* Doctor Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={doctor}
      alt="Healthcare professional"
      className="w-full max-w-sm md:max-w-full h-64 sm:h-80 md:h-[420px]
                 object-cover rounded-xl shadow-md"
    />
  </div>

  {/* Content */}
  <div className="w-full md:w-1/2">

    <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg
                  leading-7 mb-6">
      We are a team of dedicated healthcare professionals committed to
      providing the best care for our patients. With years of experience
      and a passion for helping others, we strive to make a positive
      impact in the lives of those we serve.
    </p>

    {/* Feature 1 */}
    <div className="flex items-center gap-4 bg-blue-50 p-3 sm:p-4
                    rounded-xl mb-3">
      <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0
                      flex items-center justify-center rounded-xl
                      bg-green-50 text-green-600 font-bold">
        01
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">
          Experienced Doctors
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Get care from experienced healthcare professionals.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex items-center gap-4 bg-blue-50 p-3 sm:p-4
                    rounded-xl mb-3">
      <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0
                      flex items-center justify-center rounded-xl
                      bg-green-50 text-green-600 font-bold">
        02
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">
          Patient-Centered Care
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          We focus on your comfort, needs, and well-being.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex items-center gap-4 bg-blue-50 p-3 sm:p-4
                    rounded-xl">
      <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0
                      flex items-center justify-center rounded-xl
                      bg-green-50 text-green-600 font-bold">
        03
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">
          Easy Appointments
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Book your appointment quickly and conveniently.
        </p>
      </div>
    </div>

  </div>
</div>

{/* 
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between gap-4">
          <div>
        <img src={doctor}alt="" className='bg-white p-1 rounded-lg shadow-md'/>
       </div>
       <div>
        <p className="text-gray-600 font-semibold p-1">
          We are a team of dedicated healthcare professionals 
          committed to providing the best care for our patients.
           With years of experience and a passion for helping others,
            we strive to make a positive impact in the lives of those we serve.
        </p>
        <div className='h-15 w-150 bg-blue-50 mb-3'>
         <div className="w-20 h-12 ml-1
          flex items-center justify-center
                         rounded-xl bg-green-50 text-green-600 mb-4">
                          
         </div>
        
         </div>
         <div className='h-15 w-150 bg-blue-50 mb-3'>
         <div className="w-20 h-12 ml-1
          flex items-center justify-center
                         rounded-xl bg-green-50 text-green-600 mb-4">
                          hELLO
         </div>
         </div>
         <div className='h-15 w-150 bg-blue-50 '>
         <div className="w-20 h-12 ml-1
          flex items-center justify-center
                         rounded-xl bg-green-50 text-green-600 mb-4">
                          hELLO
         </div>
         </div>
     
        </div>
        
           
      

      </div> */}
    
    </section>
  )
}

export default AboutPreview;