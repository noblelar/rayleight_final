interface ChurchMapProps {
  location?: string;
}

export function ChurchMap({
  location = "Rayleigh Methodist Church is situated close to the town centre at 78 Eastwood Road, Rayleigh, SS6 7JP",
}: ChurchMapProps) {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 h-[560px]"></div>
        <div className="py-5">
          <h2 className="text-lg md:text-xl lg:text-2xl mb-2">Location</h2>
          <p className="text-muted">{location}</p>
        </div>
      </div>
    </section>
  );
}
