import React from "react";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

import BookCard from "../../Component/BookCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const About = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const wantToReadCount = state.bookItems.filter((currentBook) => {
    return currentBook.status == "want";
  }).length;

  const readCount = state.bookItems.filter((currentBook) => {
    return currentBook.status == "read";
  }).length;

  const currentReadCount = state.bookItems.filter((currentBook) => {
    return currentBook.status == "current";
  }).length;

  return (
    <div className="bg-blue-950 max-w-[1280px] px-6 flex flex-col gap-12 py-16">
      <h1 className="text-center text-6xl flex gap-4 mx-auto items-center">
        📚<span>MY LIBRARY</span>
      </h1>

      <div className="flex justify-center">
        <Button
          variant="contained"
          onClick={() => navigate("/search")}
          className="flex items-center w-60 mx-auto gap-3"
        >
          <SearchIcon />
          Search Books
        </Button>
      </div>
      <div className="flex flex-col gap-12">
        <section className="w-full flex flex-col gap-6">
          <h2 className="text-center text-4xl font-normal bg-[#000] rounded-md p-4">
            Want to Read ({wantToReadCount})
          </h2>
          <div className="flex flex-wrap gap-3 justify-between">
            {state.bookItems
              .filter((currentBook) => {
                return currentBook.status == "want";
              })
              .map((currentFilteredBook) => {
                return (
                  <BookCard
                    {...currentFilteredBook}
                    key={currentFilteredBook._id}
                  />
                );
              })}
          </div>
        </section>
        <section className="w-full flex flex-col gap-6">
          <h2 className="text-center text-4xl font-normal bg-[#000] rounded-md p-4">
            Currently Reading ({currentReadCount})
          </h2>
          <div className="flex flex-wrap gap-3 justify-between">
            {state.bookItems
              .filter((currentBook) => {
                return currentBook.status == "current";
              })
              .map((currentFilteredBook) => {
                return (
                  <BookCard
                    {...currentFilteredBook}
                    key={currentFilteredBook._id}
                  />
                );
              })}
          </div>
        </section>
        <section className="w-full flex flex-col gap-6">
          <h2 className="text-center text-4xl font-normal bg-[#000] rounded-md p-4">
            Already Read ({readCount})
          </h2>
          <div className="flex flex-wrap gap-3 justify-between">
            {state.bookItems
              .filter((currentBook) => {
                return currentBook.status == "read";
              })
              .map((currentFilteredBook) => {
                return (
                  <BookCard
                    {...currentFilteredBook}
                    key={currentFilteredBook._id}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
