const CustomAvatar = ({ src, size }) => {
  return (
    <img
      src={src}
      className=" rounded-full"
      style={{
        width: `${size}`,
        height: `${size}`,
      }}
      alt="Avatar"
    />
  );
};

export default CustomAvatar;
