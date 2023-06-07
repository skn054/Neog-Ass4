import WIP from "../assests/WIP.png";
const DineOut = () => {
  console.log("Dineout");
  return (
    <div className="mt-8 flex items-center justify-center">
      <img
        src={WIP}
        alt="work in progress"
        style={{ height: "300px", width: "80%" }}
      />
    </div>
  );
};

export default DineOut;
