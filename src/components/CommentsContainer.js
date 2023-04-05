import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Vivek",
    text: "Very good information",
    replies: [
      {
        name: "Jeff",
        text: "Very good information",
        replies: [],
      },
      {
        name: "Mike",
        text: "Very good information",
        replies: [],
      },
      {
        name: "John",
        text: "Very good information",
        replies: [],
      },
    ],
  },
  {
    name: "Sharukh",
    text: "Very good information",
    replies: [
      {
        name: "Sonu",
        text: "Very good information",
        replies: [],
      },
    ],
  },
  {
    name: "Vijay",
    text: "Very good information",
    replies: [
      {
        name: "Varun",
        text: "Very good information",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border ml-2 border-l-gray-400">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-2 bg-gray-100 rounded p-2">
      <FaUserCircle className="text-3xl" />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
