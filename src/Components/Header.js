const Header = () => {
  return (
    <header className="w-full max-w-full bg-transparent h-20 relative">
      <nav className="w-full max-w-max-c-h my-0 mx-auto flex justify-between items-center h-full">
        <div>
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
            className="w-32"
          />
        </div>

        <div className="bg-white shadow-lg flex w-3/6 h-12 justify-between items-center rounded-md">
          <div className="flex justify-center items-center w-10 my-4">
            <i color="#828282" size="18">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#828282"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
              </svg>
            </i>
          </div>
          <input
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full text-lg border-none focus:outline-none"
          />
        </div>

        <div>
          <ul className="flex justify-between items-center gap-2  ">
            <li className="bg-transparent cursor-pointer">
              <a href="/to" className="text-xl p-3 text-gray-400">
                Login
              </a>
            </li>
            <li>
              <a href="/to" className="text-xl p-3  text-gray-400">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
