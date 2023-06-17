import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const BookCard = (props) => {
  const { state, dispatch } = useData();
  const [selectedShelf, setSelectedShelf] = useState();

  const handleShelf = (event) => {
    const { value } = event.target;
    setSelectedShelf(value);
  };

  return (
    <article className="flex flex-col max-w-[360px]">
      <div>
        <img src={props?.coverImg} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">{props?.title}</p>
        <p className="text-xl">{props?.author}</p>
      </div>
      <select
        onChange={(event) => {
          handleShelf(event);
          dispatch({
            type: "SHELF_TYPE",
            payload: { id: props?._id, readStatus: event.target.value },
          });
        }}
        className="text-blue-950"
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
