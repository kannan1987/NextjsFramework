import CustomAvatar from "../avatar";

const ProfileCard = ({}) => {
  return (
    <div className="relative">
      {/* Avatar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
        <CustomAvatar
          size={"100px"}
          src={"https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
        />
      </div>

      {/* Stacked Divs */}
      <div className="absolute top-16 left-0 w-full h-32 bg-blue-500  container mx-auto flex justify-center items-center">
        {/* Content for the first div */}
        <p className="text-white">This is the first div</p>
      </div>

      <div className="absolute top-40 left-0 w-full h-24 bg-green-500  container mx-auto flex justify-center items-center">
        {/* Content for the second div */}
        <p className="text-white">This is the second div</p>
      </div>
    </div>
  );
};
export default ProfileCard;
