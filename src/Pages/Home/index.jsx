import React from "react";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

import BookCard from "../../Component/BookCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const About = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  return (
    <div className="bg-blue-950 max-w-[1280px] px-6 flex flex-col gap-12 py-16">
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

      <h1 className="text-center text-6xl">BOOKS</h1>
      <div className="flex flex-col gap-12">
        <section className="w-full flex flex-col gap-6 bg-blue-600 p-12">
          <h2 className="text-center text-4xl font-normal bg-[#000] rounded-md p-4">
            None
          </h2>
          <div className="flex flex-wrap justify-between">
            {state.bookItems
              .filter((currentBook) => {
                return currentBook.status == "none";
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
            Want to Read
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
            Currently Reading
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
            Already Read
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
