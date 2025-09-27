import clsx from "clsx";

const BackgroundSection = ({
  title,
  bgImage,
  bgOverlay = "bg-gradient-to-r from-primary/20 to-primary/80 sm:bg-gradient-to-r sm:from-primary/20 sm:to-primary/60 lg:bg-gradient-to-r lg:from-primary/10 lg:to-primary/90",
  className = "",
  children,
}) => (
  <section
    className={clsx(
      "pt-20 pb-10 relative flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-end overflow-hidden h-[45vh] sm:h-[55vh] md:h-[65vh]",
      className
    )}
  >
    {/* Overlay background (always behind everything) */}
    <div className={clsx("absolute inset-0 w-full h-full z-10", bgOverlay)} />

    {/* Image for mobile (first, stacked) */}
    <div className="w-full md:hidden relative flex justify-center">
      <img
        className="w-full h-48 object-contain"
        src={bgImage}
        alt="Background"
        draggable={false}
      />
    </div>

    {/* Text Content for mobile (below image) and for desktop (left of image) */}
    <div className="relative z-20 text-center md:text-right px-4 sm:px-6 md:px-12 w-full md:w-1/2 flex flex-col justify-center items-center md:items-end py-6 md:py-0 order-2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white sm:leading-tight drop-shadow-lg md:drop-shadow-none">
        <span>{title}</span>
      </h1>
      {children}
    </div>

    {/* Image for desktop (background, right side) */}
    <div className="hidden md:block absolute inset-0 w-full h-full">
      <img
        className="w-full md:w-1/2 h-full object-contain absolute"
        src={bgImage}
        alt="Background"
        draggable={false}
      />
    </div>
  </section>
);

export default BackgroundSection;
