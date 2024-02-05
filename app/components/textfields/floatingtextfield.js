const FloatingTextField = ({ label, type, onChange }) => {
  return (
    <div className="relative border-b-2 focus-within:border-blue-500">
      <input
        type={type}
        name={label}
        placeholder=" "
        onChange={onChange}
        className="block w-full appearance-none focus:outline-none bg-transparent text-black"
      />
      <label className="absolute top-0 -z-1 duration-300 origin-0 text-black">
        {label}
      </label>
    </div>
  );
};
export default FloatingTextField;
