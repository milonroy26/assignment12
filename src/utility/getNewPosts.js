// export default async function getNewPosts() {
//   const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
//   if (res?.status === 200) {
//     throw new Error("Error fetching posts");
//   }
//   if (res.status === 2000) {
//     throw new Error();
//   }
//   const data = res.json();
//   return data;
// }
