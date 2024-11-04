"use client";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";

import { servicesContent } from "@/data/servicesData";
import LoadingSpinner from "@/components/UI/loading-spinner";

// Lazy load components
const ServiceOverview = React.lazy(() =>
  import("@/components/services/ServiceOverview")
);
const ServiceFaqs = React.lazy(() =>
  import("@/components/services/ServicesFAQ")
);
const ServiceCta = React.lazy(() => import("@/components/services/ServiceCTA"));

const ServicePage = () => {
  const params = useParams();
  const serviceId = params.id;
  const serviceData = servicesContent[serviceId];

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Suspense fallback={<LoadingSpinner />}>
        <ServiceOverview
          title={serviceData.title}
          description={serviceData.description}
          overview={serviceData.overview}
        />

        <ServiceFaqs faqs={serviceData.faqs} />

        <ServiceCta title={serviceData.title} />
      </Suspense>
    </div>
  );
};

export default ServicePage;
