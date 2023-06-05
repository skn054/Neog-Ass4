const ProfileHome = () => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const currentUser = localStorageToken?.user;
  const { firstName, lastName, email } = currentUser;
  return (
    <div className="profileHome_page">
      <div>
        <h2>Full Name:</h2>
        <h3>
          {firstName} {lastName}
        </h3>
      </div>
      <div>
        <h2>Email:</h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default ProfileHome;
