const CustomInput = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={placeholder}
      placeholder={placeholder}
      onChange={onChange}
      class="block w-full text-sm  bg-transparent text-black h-10 px-2 border-2 rounded-md"
    />
  );
};
export default CustomInput;
