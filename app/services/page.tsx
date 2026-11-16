const services = [
  "General Home Repairs",
  "Interior and Exterior Painting",
  "Carpentry and Woodworking",
  "Preventative Home Maintenance",
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>

      <p className="mt-4 text-gray-700">
        Dependable repairs and maintenance for your home.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What We Offer</h2>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="border border-gray-300 rounded-md p-6">
              <h3 className="text-lg font-semibold">{service}</h3>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
