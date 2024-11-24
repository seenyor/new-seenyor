import SingleBlog from "@/components/AllBlog/SingleBlog";
import { cookies } from "next/headers";

const BlogDetails = ({ params }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <div className=" bg-white py-5 w-full max-w-7xl mx-auto">
      <div className="mx-6 flex  flex-col gap-10 ">
        <SingleBlog accessToken={accessToken} params={params} />
      </div>
    </div>
  );
};

export default BlogDetails;
