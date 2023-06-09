import React from "react";

const commentsData = [
  {
    name: "Deepak Kumar",
    text: "Hello",
    replies: [],
  },
  {
    name: "Deepak Kumar",
    text: "Hello",
    replies: [],
  },
  {
    name: "Deepak Kumar",
    text: "Hello",
    replies: [
      {
        name: "Deepak Kumar",
        text: "Hello",
        replies: [],
      },
      {
        name: "Deepak Kumar",
        text: "Hello",
        replies: [
          {
            name: "Deepak Kumar",
            text: "Hello",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Deepak Kumar",
    text: "Hello",
    replies: [
      {
        name: "Deepak Kumar",
        text: "Hello",
        replies: [],
      },
    ],
  },
  {
    name: "Deepak Kumar",
    text: "Hello",
    replies: [
      {
        name: "Deepak Kumar",
        text: "Hello",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
