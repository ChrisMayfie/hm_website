import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "General Home Repairs",
    description:
      "Reliable solutions for everyday household repairs and maintenance.",
  },
  {
    title: "Interior and Exterior Painting",
    description:
      "Professional painting services to refresh and protect your home.",
  },
  {
    title: "Carpentry and Woodworking",
    description:
      "Quality woodworking, trim installation, and general carpentry.",
  },
  {
    title: "Preventative Home Maintenance",
    description:
      "Routine maintenance to keep your home in excellent condition.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>

      <p className="mt-4 text-gray-700">
        Dependable repairs and maintenance for your home.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What We Offer</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
