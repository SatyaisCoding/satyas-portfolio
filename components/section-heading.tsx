type SectionHeadingProps = {
    children: React.ReactNode;
  };
  
  export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
      <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-8 sm:mb-12 text-center">
        <span className="text-gradient">{children}</span>
      </h2>
    );
  }