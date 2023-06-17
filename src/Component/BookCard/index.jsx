import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const BookCard = (props) => {
  const { state, dispatch } = useData();
  const [selectedShelf, setSelectedShelf] = useState();

  const handleShelf = (event) => {
    const { value } = event.target;
    setSelectedShelf(value);
  };

  const style = {};

  return (
    <article className="flex flex-col w-[360px] min-h-[480px] gap-8 bg-[#000] p-4 rounded-md">
      <div className="flex h-[300px]">
        <img src={props?.coverImg} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-xl">{props?.title}</p>
        <p className="text-sm">{props?.author}</p>
      </div>
      <select
        onChange={(event) => {
          handleShelf(event);
          dispatch({
            type: "SHELF_TYPE",
            payload: { id: props?._id, readStatus: event.target.value },
          });
        }}
        className="text-blue-950 mt-auto"
        defaultValue={props?.status}
        value={selectedShelf}
      >
        <option value="current">Currently Reading</option>
        <option value="want">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </article>
  );
};

export default BookCard;
