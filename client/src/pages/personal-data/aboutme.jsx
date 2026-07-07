import profile from "../../assets/profilelaia.jpg";

function AboutMe() {
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="flex flex-col md:flex-row-reverse rounded-lg border border-gray-300 shadow-lg w-[90%] max-w-6xl md:h-[85vh] mt-3 overflow-hidden">
        {/* about me image */}
        <div className="w-full md:w-1/3 h-64 md:h-full p-4">
          <img
            src={profile}
            className="w-full h-full object-cover shadow-xl object-[center_90%]"
            alt="Laia Bombelli Profile"
          />
        </div>

        {/* about me content */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-y-8 p-6 md:p-10">
          {/* about me title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-[0.3em] uppercase">
            About Me
          </h1>

          {/* about me text */}
          <p className="text-justify text-base md:text-lg leading-relaxed tracking-wide text-gray-500 max-w-2xl overflow-auto">
            I am an <span className="font-semibold text-black">Accessories Design student</span> with a genuine passion for <span className="font-semibold text-black">leather goods</span>, craftsmanship, and the creative journey behind <span className="font-semibold text-black">luxury products</span>. For me, design balances <span className="font-semibold text-black">aesthetics with functionality</span>, and I love seeing how a raw concept evolves through research and <span className="font-bold text-black">hands-on prototyping</span>. Methodical and collaborative, I approach my work with a deep respect for detail. I am now excited to start my professional journey and bring my dedication to a team that values <span className="font-semibold text-black">quality and innovation</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;