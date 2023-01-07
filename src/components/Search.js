import React from "react";

export function Search(props) {
  const { search, term, setTerm } = props;

  function handleChange(changeEvent) {
    console.log("Someone Typed event =>", changeEvent);
     props.search(props.term);
    setTerm(changeEvent.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(term);
  }
  return (
    <form className="Search" id="searchAPI">
      <p style={{ color: "pink" }}>
        <em>{term && "Term Typed: " + term}</em>
      </p>
      <input id="term" type="text" value={props.term} onChange={handleChange} />
      <input className="submitButton" type="submit" onClick={onSubmit} />
    </form>
  );
}

// //Search.js will return a form with the following
// identifier id="searchAPI" e.g., <form id="searchAPI">.
//  The form should have at least one text field for keyword
//   input e.g. <input id="term"/> and a button to submit the
//    form.

// // The search should be available on the home page of your
//  app. Your search <form/> will need to have an onSubmit()
//  handler that will call your search() function.
//  The search() function will return results of the iTunes
//  Search API
