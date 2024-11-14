import BlogPost from "@/components/BlogPost";
import PageTitle from "@/components/dashboard/pageTitle";
import { cookies } from "next/headers";

const AddBlog = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Add Blog" />
      <BlogPost accessToken={accessToken} />
    </div>
  );
};

export default AddBlog;
