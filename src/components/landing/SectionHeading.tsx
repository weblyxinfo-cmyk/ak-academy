interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeading({ title, subtitle, dark = true }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-2 max-w-xl text-sm ${
            dark ? "text-gray" : "text-gray-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
