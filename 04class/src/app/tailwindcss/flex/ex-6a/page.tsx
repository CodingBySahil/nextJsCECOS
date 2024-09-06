const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-10 justify-center items-center bg-cyan-400 p-16">
        <div className="bg-white p-8 w-4/5 rounded-3xl flex justify-center items-center shadow-2xl shadow-cyan-950">
          <input
            type="text"
            className="flex-grow border active:border-blue-700 px-4 py-2 rounded-3xl mr-5"
            name="Search"
            id="search"
            placeholder="Write something to search"
          />
          <button className="px-4 py-2 rounded-3xl bg-blue-700 hover:cursor-pointer text-white">
            Search
          </button>
        </div>
        <div className="bg-white p-8 w-4/5 rounded-3xl flex justify-center items-center shadow-2xl shadow-cyan-950">
          <input
            type="text"
            className="flex-grow border active:border-blue-700 px-4 py-2 rounded-3xl mr-5"
            name="Search"
            id="search"
            placeholder="Write something to search"
          />
          <button className="px-4 py-2 rounded-3xl bg-blue-700 hover:cursor-pointer text-white flex-grow">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
