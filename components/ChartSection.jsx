export default function ChartSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full lg:max-w-2xl">
        {/* Text */}
        <div className="text-center lg:text-left pl-0 lg:pl-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black leading-snug">
            Support That <br /> Understands You
          </h1>
          <p className="mt-4 text-gray-600 font-semibold text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
            Redefining mental wellness with practical tools, expert guidance,
            and communities that foster growth and transformation.
          </p>
        </div>

        {/* Small Video under Text */}
        <video
          src={"/support.mov"}
          autoPlay
          loop
          muted
          playsInline
          className="mt-6 w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] aspect-video object-contain"
        />
      </div>

      {/* Right Section (Chart Image) */}
      <div className="flex justify-center items-center w-full">
        <img
          src={"/chart.png"}
          alt="Chart"
          className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[70%] h-auto object-contain"
        />
      </div>
    </div>
  );
}
