import mich from "../assets/images/mich.png"
function About() {
  return (
    <>
      <div id="About" className="bg-tec py-16">
        <section className="w-4/5 m-auto h-full">
          <h2 className="text-4xl text-center font-bold text-shadow-lg">
            About
          </h2>
          <div className="flex items-center justify-between gap-16 py-16">
            <div className="w-1/2 text-xl space-y-4">
              <p>
                I am a passionate web developer specialized in crafting visually
                appealing websites that are responsive, functional and
                user-friendly. My portfolio showcases my journey and expertise
                in these fields.
              </p>
              <p>
                In my spare time, I enjoy working on side projects, learning new
                technologies, and contributing to open source.
              </p>
            </div>
            <div className="w-1/2 bgwhite justify-center flex">
              <img src={mich} alt="" className="w-80 bg-[#1e1e22] rounded-md" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
