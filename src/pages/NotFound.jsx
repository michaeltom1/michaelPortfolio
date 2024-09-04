import Buttons from "../components/Buttons";
function NotFound() {
  document.title = "Page Not Found | Michael Tom";
  return (
    <>
      <div
        id="message"
        className="flex justify-center h-screen items-center text-center w-4/5 mx-auto"
      >
        <div className="border-accen order-2 p-8 rounded-md space-y-4">
          <h1 className="text-4xl font-bold text-accent">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p> Oops! The page you're looking for doesn't exist.</p>
          <Buttons text="Go back to Home" hideIcon to="/"/>
        </div>
      </div>
    </>
  );
}
export default NotFound;
