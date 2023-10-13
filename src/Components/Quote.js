import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Quote(props) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [load, setLoad] = useState(true);

  const updateQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      let ele = await response.json();
      setLoad(false);
      setContent(ele.content);
      setAuthor(ele.author);
      setTags(ele.tags);
    } catch {
      console.log("error");
    }
  };

  const handleClick = ()=>{
      setLoad(true)
  }

  useEffect(() => {
    if (load){ updateQuote();}
  }, [load]);

  return (
    <div className="container">
      {load && <Spinner />}
      {!load && (
        <div className="card border-success mb-3">
          <div className="card-header bg-transparent border-success">
            {author}
          </div>
          <div className="card-body text-success">
            <h5 className="card-title">Quote</h5>
            <p className="card-text">{content}</p>
          </div>
          <div className="card-footer bg-transparent border-success">
            {tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
      )}
      {!load && (<div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" className="btn btn-outline-success" onClick={handleClick}>New Quote!</button>
      </div>)}
    </div>
  );
}
