import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters"
          autoFocus
          className="form-control"
          value={text}
        />
      </form>
    </section>
  );
};

export default Search;
