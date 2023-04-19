import { fetchBookByKey } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const bookKeys = ["OL45804W", "OL262758W"];

const AllBooks = () => {
  let { bookKey } = useParams();
  let books = [];

  useEffect(() => {
    bookKeys.map((key) => {
      fetchBookByKey(key).then((data) => {
        return data;
        // not working how it's supposed to yet!//
      });
    });
  }, [bookKey]);

  console.log(books);

  return <div> Books:</div>;
};
export default AllBooks;
