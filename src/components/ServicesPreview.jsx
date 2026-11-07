import { servicesData } from "../Data/servicesData"

const ServicesPreview = () => {
  return (
    <section className="px-15 py-2">
      <h2 className="text-3xl font-bold text-center mb-4">
        Our Services
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Explore healthcare services with Faith.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => {
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
  );
};

export default ServicesPreview;