import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/DataContext";
import BookCard from "../../Component/BookCard";
import SearchImg from "../../Asset/SearchImg.svg";
import NoDataImg from "../../Asset/NoDataImg.svg";
import { Button } from "@mui/material";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  return (
    <div className="bg-blue-950 max-w-[1280px] px-6 flex flex-col gap-12 w-full min-h-screen py-4">
      <div className="flex justify-center">
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          className="flex items-center w-28 mx-auto gap-3"
        >
          GO BACK
        </Button>
      </div>
      <input
        type="search"
        value={searchInput}
        className="text-blue-950 mt-4 w-96 mx-auto p-4 rounded-md"
        onChange={(event) => {
          setSearchInput(event.target.value);
          dispatch({ type: "SEARCH_TYPE", payload: event.target.value });
        }}
        placeholder="Search for books..."
      />

      <div className="">
        {searchInput.length === 0 && (
          <div className="text-blue-50 text-center text-4xl mx-auto flex flex-col gap-10">
            <span>SEARCH TO EXPLORE BOOKS</span>
            <img
              src={SearchImg}
              alt="search-img"
              className="w-[300px] h-[300px] mx-auto"
            />
          </div>
        )}
        {state.filteredBookItems.length === 0 && searchInput.length > 0 ? (
          <div className="text-blue-50 text-center text-4xl mx-auto flex flex-col gap-10">
            <span>NO DATA FOUND</span>
            <img
              src={NoDataImg}
              alt="search-img"
              className="w-[300px] h-[300px] mx-auto"
            />
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
