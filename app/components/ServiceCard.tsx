interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-md border border-gray-300 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>

      <p className="mt-3 text-gray-700">{description}</p>
    </article>
  );
}
