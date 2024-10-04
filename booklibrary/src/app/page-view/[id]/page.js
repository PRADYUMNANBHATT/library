// import { useParams } from "next/navigation";
import React from "react";
import PageViewCard from "../../../../components/PageViewCard";
import CommentCard from "../../../../components/CommentCard";

const PageView = ({ params: { id } }) => {
  return (
    <div className=" min-h-screen pr-[10vw] pl-[10vw] pt-[100px] pb-[10vh]]">
      <PageViewCard item={id} />
      <div className="pl-[10.5vw] pt-5">
        <CommentCard item={id} />
      </div>
    </div>
  );
};

export default PageView;
