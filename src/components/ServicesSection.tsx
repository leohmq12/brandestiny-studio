import { type ReactNode } from "react";
import brandIdentityVideo from "@/assets/Brand Identity Creation Section.mp4";
import devopsVideo from "@/assets/Devops Section.mp4";
import erpVideo from "@/assets/ERP Section.mp4";
import seoVideo from "@/assets/For SEO Section.mp4";
import mobileAppVideo from "@/assets/Mobile App Section.mp4";
import saasVideo from "@/assets/SAAS Section.mp4";
import socialMediaVideo from "@/assets/Social Media Management Section.mp4";
import webAppVideo from "@/assets/Web App Development.mp4";
import websiteVideo from "@/assets/Website Design and Development Section.mp4";

type ServiceCardProps = {
  id?: string;
  title: ReactNode;
  videoSrc: string;
  showDivider?: boolean;
};

const ServiceCard = ({
  id,
  title,
  videoSrc,
  showDivider = true,
}: ServiceCardProps) => {
  return (
    <div
      id={id}
      className="relative group scroll-mt-24 p-8 md:p-12 aspect-square md:aspect-auto md:h-[400px] border-b border-white/10 overflow-hidden flex flex-col justify-between"
    >
      <video
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition duration-500 group-hover:opacity-80 group-hover:scale-105"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/25" />

      <div className="relative z-10">
        <div className="w-5 h-5 rounded-full border border-white/30 transition-all duration-500 group-hover:scale-125 group-hover:border-white group-hover:bg-white" />
      </div>

      <h3 className="relative z-10 font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
        {title}
      </h3>

      {showDivider && (
        <div className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white/10" />
      )}
    </div>
  );
};

const services = [
  {
    title: (
      <>
        Web Design & <br /> Development
      </>
    ),
    id: "service-website-design",
    videoSrc: websiteVideo,
  },
  {
    title: "Mobile Apps",
    id: "service-mobile-apps",
    videoSrc: mobileAppVideo,
  },
  {
    title: "Web Apps",
    id: "service-web-apps",
    videoSrc: webAppVideo,
  },
  {
    title: "ERP",
    id: "service-crm-erp",
    videoSrc: erpVideo,
  },
  {
    title: "DevOps",
    id: "service-devops",
    videoSrc: devopsVideo,
  },
  {
    title: "SEO",
    id: "service-seo",
    videoSrc: seoVideo,
  },
  {
    title: "SAAS",
    id: "service-saas",
    videoSrc: saasVideo,
  },
  {
    title: (
      <>
        Social Media <br /> Management
      </>
    ),
    id: "service-social-media",
    videoSrc: socialMediaVideo,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        <div className="order-2 lg:order-1">
          <ServiceCard
            title={
              <>
                Brand Identity <br /> Creation
              </>
          }
          id="service-brand-identity"
          videoSrc={brandIdentityVideo}
        />
        </div>

        {/* Row 1, Col 2-3: Key Services */}
        <div className="order-1 lg:order-2 md:col-span-2 p-8 md:p-12 border-b border-white/10 flex flex-col justify-start gap-8 md:gap-10 h-[300px] md:h-auto">
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Key Services
          </h2>
          <div className="max-w-md">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              This is what I focus on. <br />
              Additional services are available upon request.
            </p>
          </div>
        </div>

        {services.map((service, index) => (
          <div key={index} className="order-3">
            <ServiceCard
              title={service.title}
              id={service.id}
              videoSrc={service.videoSrc}
              showDivider={index % 3 !== 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
