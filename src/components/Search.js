import React from "react";

export const Search = (props) => {
  const { term, setTerm, handleSubmit } = props;

  function handleChange(changeEvent) {
    setTerm(changeEvent.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(term);
  }

  return (
    <form id="searchAPI">
      <p style={{ color: "violet" }}>
        <em>{term && "Keywords Typed: " + term}</em>
      </p>
      <input
        type="text"
        value={props.term}
        onChange={handleChange}
        id="term"
        autoFocus="autoFocus"
      />
      <input type="submit" onClick={onSubmit} />
    </form>
  );
};

export default Search;

// // The search should be available on the home page of your
//  app. Your search <form/> will need to have an onSubmit()
//  handler that will call your search() function.
//  The search() function will return results of the iTunes
//  Search API
