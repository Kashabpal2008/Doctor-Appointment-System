import whyChooseUs from '../Data/whyChooseUs_Data'


const WhyChooseUs = () => {
// const whyChooseUs = [

//   {
//     icon: FiUserCheck,
//     title: "Experienced Doctors",
//     description:
//       "Get care from experienced and qualified doctors who understand your health needs.",
//   },
//   {
//     icon: FiHome,
//     title: "Care at Your Doorstep",
//     description:
//       "Receive professional healthcare without leaving your home.",
//   },
//   {
//     icon: FiCalendar,
//     title: "Quick Appointment",
//     description:
//       "Book your appointment in just a few simple steps.",
//   },
//   {
//     icon: FiShield,
//     title: "Verified Professionals",
//     description:
//       "Our healthcare professionals are carefully verified for safe and reliable care.",
//   },
//   {
//     icon: FiLock,
//     title: "Secure & Private",
//     description:
//       "Your personal and healthcare information is handled with care and privacy.",
//   },
//   {
//     icon: FiUsers,
//     title: "Family Healthcare",
//     description:
//       "Convenient healthcare support for your whole family.",
//   },
// ];  
return (
    <section className="px-15 py-0 ">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Why Choose Us
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        We provide top-notch healthcare services with a focus on your well-being.
      </p>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {whyChooseUs.map((service) => {
               const Icon = service.icon;
     
               return (
                 <div
                   key={service.id}
                   className="p-6 rounded-2xl border border-gray-200
                              hover:shadow-xl hover:-translate-y-1
                              transition-all duration-300"
                 >
                   <div className="w-14 h-14 flex items-center justify-center
                                   rounded-xl bg-green-50 text-green-600 mb-4">
                     <Icon size={28} />
                   </div>
     
                   <h3 className="text-xl font-semibold mb-3">
                     {service.title}
                   </h3>
     
                   <p className="text-gray-600 leading-7">
                     {service.description}
                   </p>
                 </div>
               );
             })}
           </div>
    </section>
  )
}

export default WhyChooseUs