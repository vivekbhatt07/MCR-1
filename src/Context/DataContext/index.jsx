import React, { createContext, useContext, useReducer } from "react";

import { bookList } from "../../Data";

const DataContext = createContext();
const initialState = {
  bookItems: [...bookList],
  filteredBookItems: [],
};

const simpleString = (str) => {
  return str.trim().split(" ").join("").toLowerCase();
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SHELF_TYPE": {
      return {
        ...state,
        bookItems: state.bookItems.map((currentBook) => {
          return currentBook._id === action.payload.id
            ? { ...currentBook, status: action.payload.readStatus }
            : currentBook;
        }),
      };
    }
    case "SEARCH_TYPE": {
      return {
        ...state,
        filteredBookItems: state.bookItems.filter((currentBook) => {
          return (
            action.payload !== "" &&
            simpleString(currentBook.title).includes(
              simpleString(action.payload)
            )
          );
        }),
      };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
