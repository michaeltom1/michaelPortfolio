function Buttons({
  text,
  type = "submit",
  width = "",
  padding = "p-3 px-8 ",
  other = "",
  className = `${padding} w-${width} rounded-full text-center font-medium shadow-xl bg-gradient-to-r from-[#33d175] to-green-600 ${other}`,
}) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}
export default Buttons;
