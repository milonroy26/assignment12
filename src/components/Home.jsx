import getNewPosts from "@/utility/getNewPosts";
import About from "./About";
import Link from "next/link";

const Home = async () => {
  const postBlog = await getNewPosts();
  return (
    <>
      <div className="text-center py-5 pb-20">
        <h1 className="text-5xl text-slate-950 font-bold dark:text-slate-200">
          TOP NEWS
        </h1>
        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-200">
          Bangladesh News
        </p>
      </div>
      <hr />
      {/* about */}
      <About></About>
      {/* end */}
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {postBlog.length === 0 ? (
            <h2 className="text-red-500">Lodding......</h2>
          ) : (
            postBlog.map((posts, index) => (
              <Link
                href={"#"}
                key={index.toString()}
                className="card card-compact w-100 glass"
              >
                <figure>
                  <img src={posts.img} alt="Post-image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> {posts.title} </h2>
                  <p> {posts.short} </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
