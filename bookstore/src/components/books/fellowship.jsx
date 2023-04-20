import { fetchBookByKey } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAuthorByKey } from "../../api";

const key = { useParams };
const Fellowship = () => {
  const [book, setBook] = useState({});
  const [author, setAuthor] = useState({});
  useEffect(() => {
    fetchBookByKey("OL14933414W").then(({ data }) => {
      setBook(data);
    });
    fetchAuthorByKey(book.authors[0].author.key);
  }, [key]);
  console.log(book.authors[0].author.key);
  return (
    <div>
      <p>
        Title: {book.title}, Author: {author}
        <img src="https://dauntbooks.co.uk/wp-content/uploads/2021/09/9780261103344.jpg"></img>
      </p>
    </div>
  );
};
export default Fellowship;
