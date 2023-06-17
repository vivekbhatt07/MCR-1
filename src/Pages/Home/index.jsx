import React from "react";
import { useData } from "../../Context/DataContext";

import BookCard from "../../Component/BookCard";
import { Link } from "react-router-dom";

const About = () => {
  const { state, dispatch } = useData();

  return (
    <div className="bg-blue-950 max-w-[1280px] px-6 flex flex-col gap-12">
      <Link to="/search">Search</Link>
      <h1 className="text-center text-6xl">BOOKS</h1>
      <div className="flex flex-col gap-12">
        <section className="w-full flex flex-col gap-6">
          <h2 className="text-center text-4xl">None</h2>
          <div className="flex flex-wrap gap-3">
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
          <h2 className="text-center text-4xl">Want to Read</h2>
          <div className="flex flex-wrap gap-3">
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
          <h2 className="text-center text-4xl">Currently Reading</h2>
          <div className="flex flex-wrap gap-3">
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
          <h2 className="text-center text-4xl">Already Read</h2>
          <div className="flex flex-wrap gap-3">
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
