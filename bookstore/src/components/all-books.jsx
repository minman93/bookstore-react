import { fetchBookByKey } from "../api";
import { useEffect, useState } from "react";
import Fellowship from "./books/fellowship";

const AllBooks = () => {
  return (
    <main>
      Books:
      <Fellowship />
    </main>
  );
};
export default AllBooks;
