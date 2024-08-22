function Contact() {
  return (
    <>
      <section id="Contact" className="w-4/5 m-auto py-16">
        <h1 className="text-4xl text-center font-bold text-shadow-lg">
          Contact
        </h1>
        <div className="flex justify-center pt-8">
          <form action="" className="grid gap-4 w-1/2 font-medium">
            <input
              type="text"
              required
              placeholder="Name"
              className="outline-none border-none rounded-md h-12 p-4 bg-[#272733]"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="outline-none border-none rounded-md h-14 p-4 bg-[#272733]"
              autoComplete="email"
            />
            <textarea
              id=""
              name=""
              required
              placeholder="message"
              className="outline-none border-none rounded-md h-60 resize-none p-4 bg-[#272733]"
            ></textarea>

            <button className="bg-gradient-to-r from-[#33d175] to-green-600 p-4 rounded-md font-medium text-xl hover:from-[#33d175c7] hover:to-green-500 text-white duration-500 ease-out">
              <a href="mailto:email@gmail.com">Email me</a>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
