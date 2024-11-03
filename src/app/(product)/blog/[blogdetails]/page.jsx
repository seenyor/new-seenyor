import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetails = ({ params }) => {
  return (
    <div className=" bg-white py-5 w-full max-w-7xl mx-auto">
      <div className="mx-6 flex  flex-col gap-10 ">
        <div>
          <div className="flex justify-start py-3">
            <Link href="/">Home</Link>
            <span>&nbsp;/&nbsp;</span>
            <Link href="/blog">Blog</Link>
            <span>&nbsp;/&nbsp;</span>
            <Link
              className="font-semibold"
              href={`/blog/${params?.blogdetails}`}
            >
              {params?.blogdetails}
            </Link>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold py-3">
              Lorem ipsum dolor sit amet consectetur. Ornare sapien.
            </h2>
            <p className="text-sm pb-4">12 may , 2024</p>
            <Image
              className="w-full h-auto max-h-[370px]"
              src="/images/blog1.png"
              height={500}
              width={800}
              alt=""
            />
            <p className="text-[16px] py-6">
              Lorem ipsum dolor sit amet consectetur. Blandit aliquam amet lacus
              viverra quis amet magnis. Quis malesuada arcu tincidunt tincidunt
              maecenas vestibulum est. Nec mi fames parturient ornare proin id.
              Morbi amet arcu ut augue. Velit a nullam neque proin sed. Aliquet
              faucibus ac neque lacus in mi. Integer nunc id vitae mauris.
              Faucibus urna nunc tellus risus purus velit morbi risus. In a eu
              gravida ipsum dictumst sed posuere nunc in. Phasellus ut id
              vestibulum et. Quis sodales semper convallis massa id at. Cras
              orci nunc tellus sem fermentum. Odio posuere ipsum et in ut ac
              integer ornare diam. Neque vitae pellentesque lectus vitae
              tincidunt. Mauris aenean tellus in urna morbi. Lorem ipsum dolor
              sit amet consectetur. Blandit aliquam amet lacus viverra quis amet
              magnis. Quis malesuada arcu tincidunt tincidunt maecenas
              vestibulum est. Nec mi fames parturient ornare proin id. Morbi
              amet arcu ut augue. Velit a nullam neque proin sed.
            </p>
            <div className="text-2xl py-4">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <Image
              className="w-full h-auto max-h-[370px]"
              src="/images/blog.png"
              height={500}
              width={800}
              alt=""
            />
            <p className="text-[16px] py-6">
              Lorem ipsum dolor sit amet consectetur. Blandit aliquam amet lacus
              viverra quis amet magnis. Quis malesuada arcu tincidunt tincidunt
              maecenas vestibulum est. Nec mi fames parturient ornare proin id.
              Morbi amet arcu ut augue. Velit a nullam neque proin sed. Aliquet
              faucibus ac neque lacus in mi. Integer nunc id vitae mauris.
              Faucibus urna nunc tellus risus purus velit morbi risus. In a eu
              gravida ipsum dictumst sed posuere nunc in. Phasellus ut id
              vestibulum et. Quis sodales semper convallis massa id at. Cras
              orci nunc tellus sem fermentum. Odio posuere ipsum et in ut ac
              integer ornare diam. Neque vitae pellentesque lectus vitae
              tincidunt. Mauris aenean tellus in urna morbi. Lorem ipsum dolor
              sit amet consectetur. Blandit aliquam amet lacus viverra quis amet
              magnis. Quis malesuada arcu tincidunt tincidunt maecenas
              vestibulum est. Nec mi fames parturient ornare proin id. Morbi
              amet arcu ut augue. Velit a nullam neque proin sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
