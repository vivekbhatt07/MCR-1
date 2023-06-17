import React, { useState } from "react";
import { useData } from "../../Context/DataContext";
import BookCard from "../../Component/BookCard";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { state, dispatch } = useData();

  return (
    <div className="bg-blue-950 max-w-[1280px] px-6 flex flex-col gap-12 w-full min-h-screen">
      <input
        type="search"
        value={searchInput}
        className="text-blue-950 mt-6 w-96 mx-auto p-4 rounded-md"
        onChange={(event) => {
          setSearchInput(event.target.value);
          dispatch({ type: "SEARCH_TYPE", payload: event.target.value });
        }}
        placeholder="Search for books..."
      />

      <div className="">
        {searchInput.length === 0 && (
          <div className="text-blue-50 text-center text-4xl mx-auto">
            SEARCH TO EXPLORE BOOKS
          </div>
        )}
        {state.filteredBookItems.length === 0 && searchInput.length > 0 ? (
          <div className="text-blue-50 text-center text-4xl mx-auto">
            NO DATA FOUND
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center">
            {state.filteredBookItems.map((currentBook) => {
              return <BookCard {...currentBook} key={currentBook._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
