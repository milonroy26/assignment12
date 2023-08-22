import About from "./About";

const Home = async () => {
  return (
    <>
      <div className="text-center py-5 pb-20">
        <h1 className="text-5xl text-slate-950 font-bold">TOP NEWS</h1>
        <p className="mt-2 text-lg font-semibold text-slate-900">
          Bangladesh News
        </p>
      </div>
      <hr />
      <About></About>
    </>
  );
};

export default Home;
