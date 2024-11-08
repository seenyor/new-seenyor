import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [1, 2, 3, 4, 5];
const page = () => {
  return (
    <div className=" bg-white py-5 w-full max-w-[1320px] mx-auto">
      <div className="mx-6 tab:mx-2 flex  flex-col gap-10 ">
        {/* recent blog */}
        <div>
          <div className="flex justify-start py-3">
            <Link href="/">Home</Link>
            <span>&nbsp;/&nbsp;</span>
            <Link className="font-semibold" href="/blog">
              Blog
            </Link>
          </div>
          <h3 className="text-[1.7rem] font-semibold pb-5">
            Recent Blog Posts
          </h3>
          {/* cards */}
          <div className="flex md:flex-col justify-between items-center gap-5">
            {blogs?.slice(0, 2).map((blog) => (
              <div key={blog} className="flex justify-between gap-2">
                <Image
                  className="w-[40%] h-auto"
                  src="/images/blog1.png"
                  height={300}
                  width={200}
                  alt=""
                />
                <div className="w-[60%] p-3 tab:p-1">
                  <p className="text-sm">12 may , 2024</p>
                  <h4 className="text-xl tab:text-lg tab:leading-5 sm:text-[15px] sm:leading-[17px] font-semibold py-3">
                    Lorem ipsum dolor sit amet consectetur. Ornare sapien.
                  </h4>
                  <p className="tab:text-sm">
                    Lorem ipsum dolor sit amet consectetur. Augue venenatis sit
                    dolor ante. Varius diam turpis pharetra malesuada. Quis non
                    enim convallis augue et nec ac.
                  </p>
                  <Link
                    className="flex items-center text-primary pt-4 font-semibold"
                    href="/blog/details"
                  >
                    <span> See More </span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* all blog post */}
        <div>
          <h3 className="text-[1.7rem] font-semibold mt-5 pb-5">
            All Blog Posts
          </h3>
          {/* cards */}
          <div className="grid grid-cols-3 tab:grid-cols-1 gap-5">
            {blogs.map((blog) => (
              <div key={blog} className="flex justify-center">
                <div className="">
                  <Image
                    className="w-full h-auto"
                    src="/images/blog.png"
                    height={300}
                    width={200}
                    alt=""
                  />
                  <div className="p-3 md:p-2">
                    <p className="text-sm">12 may , 2024</p>
                    <h4 className="text-xl md:text-[16px] font-semibold py-3 md:leading-5">
                      Lorem ipsum dolor sit amet consectetur. Ornare sapien.
                    </h4>
                    <p className="md:text-sm">
                      Lorem ipsum dolor sit amet consectetur. Augue venenatis
                      sit dolor ante. Varius diam turpis pharetra malesuada.
                      Quis non enim convallis augue et nec ac.
                    </p>
                    <Link
                      className="flex items-center text-primary pt-4 font-semibold"
                      href="/blog/details"
                    >
                      <span> See More </span>
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
