const BackgroundImage = ({ image, size, child }) => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover bg-center md:bg-none"
      style={{
        backgroundImage: `url(${image})`,
        // width: `${size}`,
        // height: `${size}`,
        minHeight: "100vh",
      }}
    >
      {child}
    </div>
  );
};
export default BackgroundImage;
