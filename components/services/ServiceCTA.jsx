import Link from "next/link";

const ServiceCta = ({ title }) => {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our {title.toLowerCase()} can help you
            achieve your goals. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceCta;
