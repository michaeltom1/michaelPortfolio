function Hero() {
  return (
    <>
      <main>
        <section className="w-4/5 m-auto flex items-center h-screen font-medium text-xl text-center lg:text-start">
          <div>
            <p className=" text-2xl text-accent font-roboto">
              Hi am<span className="text-green-500">,</span>
            </p>
            <p className=" lg:text-6xl font-bold uppercase">
              Michael Tom<span className="text-green-500">.</span>
            </p>
            <p className="lg:w-4/5 pt-4 text-gray-200">
              I am a Web Developer who specialized in creating responsive and
              user-friendly websites.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
export default Hero;