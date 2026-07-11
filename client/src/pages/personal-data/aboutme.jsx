import profile from "../../assets/profilelaia.jpg";
import CardComponent from "../../components/card";

function AboutMe() {
  return (
    <CardComponent
      title="About Me"
      image={
        <>
          <img
            src={profile} 
            className="w-full h-full object-cover shadow-xl object-[center_90%]"
            alt="Laia Bombelli Profile"
          />
        </>
      }
      text={
        <>
            I am an{" "}
            <span className="font-semibold text-black">
              Accessories Design student
            </span>{" "}
            with a genuine passion for{" "}
            <span className="font-semibold text-black">leather goods</span>,
            craftsmanship, and the creative journey behind{" "}
            <span className="font-semibold text-black">luxury products</span>.
            For me, design balances{" "}
            <span className="font-semibold text-black">
              aesthetics with functionality
            </span>
            , and I love seeing how a raw concept evolves through research and{" "}
            <span className="font-bold text-black">hands-on prototyping</span>.
            Methodical and collaborative, I approach my work with a deep respect
            for detail. I am now excited to start my professional journey and
            bring my dedication to a team that values{" "}
            <span className="font-semibold text-black">
              quality and innovation
            </span>
            .
        
        </>
      }
    >
    </CardComponent>
  );
}

export default AboutMe;
