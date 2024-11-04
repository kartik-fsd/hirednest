const ServiceOverview = ({ title, description, overview }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {overview.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
