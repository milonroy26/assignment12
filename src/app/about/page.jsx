import About from "@/components/About";

const page = () => {
  return (
    <>
      <div className="text-center py-5 pb-20">
        <h1 className="text-5xl text-slate-950 dark:text-white font-bold">TOP NEWS</h1>
        <p className="mt-2 text-lg font-semibold text-slate-900  dark:text-slate-200">
          -- About Me --
        </p>
      </div>
      <hr />
      <About></About>
    </>
  );
};

export default page;
