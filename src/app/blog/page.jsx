import getNewPosts from "@/utility/getNewPosts";
import Link from "next/link";

const page = async () => {
  const postBlog = await getNewPosts();
  return (
    <>
      <div className="container mx-auto my-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {postBlog.length === 0 ? (
            <h2 className="text-red-500">Lodding......</h2>
          ) : (
            postBlog.map((posts,index) => (
              <Link href={`/blog/${posts.id}`}
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

export default page;
