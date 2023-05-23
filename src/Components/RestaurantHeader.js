const RestaurantHeader = ({ mealsImage }) => {
  console.log(mealsImage);
  return (
    <>
      <div className="nav-image">
        <img alt="mealsimage" src={mealsImage}></img>
      </div>
    </>
  );
};

export default RestaurantHeader;
