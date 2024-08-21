import { services } from "../data/Data";
// import B from "./Buttons";
import Buttons from "./Buttons";
function Services() {
  return (
    <>
      <section className="w-4/5 m-auto py-16">
        <h1 className="text-4xl text-center font-bold text-shadow-lg">
          Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group h-96 bg-[#272733] duration-300 ease-in hover:shadow-6xl hover:shadow-[#2ecc71] rounded-md p-4 flex flex-col items-center text-center py-8 justify-between "
            >
              <service.ico className="text-6xl group-hover:text-accent" />
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p>{service.desc}</p>
              <Buttons
                text="Learn More"
                other=""
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Services;
