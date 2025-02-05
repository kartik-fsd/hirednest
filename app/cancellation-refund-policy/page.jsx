export const metadata = {
  title: " Cancellation & Refund Policy | HIREDNEST PRIVATE LIMITED",
  description:
    "Read the Cancellation & Refund Policy for HIREDNEST PRIVATE LIMITED.",
};

export default function CancellationRefundPage() {
  return (
    <>
      <main className="min-h-screen bg-green-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-green-900 to-green-800 px-8 py-12">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-white">
                  Cancellation &amp; Refund Policy
                </h1>
                <p className="mt-2 text-sm text-green-300">
                  Last updated on 05-02-2025 13:31:29
                </p>
              </div>
            </header>
            {/* Content Section */}
            <section className="px-8 py-10">
              <article className="prose prose-lg lg:prose-xl max-w-none text-green-800">
                <p>
                  HIREDNEST PRIVATE LIMITED believes in helping its customers as
                  far as possible, and has therefore a liberal cancellation
                  policy. Under this policy:
                </p>
                <ul>
                  <li>
                    <strong>Immediate Cancellation:</strong> Cancellations will
                    be considered only if the request is made immediately after
                    placing the order. However, the cancellation request may not
                    be entertained if the orders have been communicated to the
                    vendors/merchants and they have initiated the process of
                    shipping them.
                  </li>
                  <li>
                    <strong>No Cancellation for Perishables:</strong> HIREDNEST
                    PRIVATE LIMITED does not accept cancellation requests for
                    perishable items like flowers, eatables, etc. However,
                    refund/replacement can be made if the customer establishes
                    that the quality of the product delivered is not good.
                  </li>
                  <li>
                    <strong>Reporting Damaged/Defective Items:</strong> In case
                    of receipt of damaged or defective items, please report the
                    same to our Customer Service team. The request will,
                    however, be entertained once the merchant has checked and
                    determined the same at his own end. This should be reported
                    within the same day of receipt of the products. In case you
                    feel that the product received is not as shown on the site
                    or as per your expectations, you must bring it to the notice
                    of our customer service within the same day of receiving the
                    product. The Customer Service Team, after looking into your
                    complaint, will take an appropriate decision.
                  </li>
                  <li>
                    <strong>Warranty Complaints:</strong> In case of complaints
                    regarding products that come with a warranty from
                    manufacturers, please refer the issue to them. In case of
                    any refunds approved by HIREDNEST PRIVATE LIMITED, it’ll
                    take 9-15 days for the refund to be processed to the end
                    customer.
                  </li>
                </ul>
              </article>
            </section>
            {/* Footer Section */}
            <footer className="px-8 py-6 bg-green-50 border-t border-green-200">
              <p className="text-sm text-green-600">
                For any queries regarding our Cancellation &amp; Refund Policy,
                please contact our customer support.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
