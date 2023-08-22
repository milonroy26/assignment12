import getViewPost from "@/utility/getViewPost";
// Dainamic Params: je id ta pabe na sei error page na nia 404 page nia jabe.
export const dynamicParams = false;

const page = async ({params}) => {
  const id = params.id;
  const viewPost = await getViewPost(id);
  
  return (
    <div>
      <div className="container mx-auto mb-2">
        <div className="grid">
          <div className="card glass">
            <figure><img src={viewPost.postDetails.img} alt="img"/></figure>
            <div className="card-body">
              <h2 className="card-title"> {viewPost.postDetails.title} </h2>
              <p> {viewPost.postDetails.content} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
