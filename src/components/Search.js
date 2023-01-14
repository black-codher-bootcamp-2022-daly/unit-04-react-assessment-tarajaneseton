import React from "react";
// import PropTypes from "prop-types";

export const Search = (props) => {
  const { term, setTerm, handleSubmit } = props;
  // const [value, setValue] = React.useState(" ")

  function handleChange(changeEvent) {
    // props.search(props.term);
    setTerm(changeEvent.target.value);
  }

function onSubmit(event){
  event.preventDefault()
          handleSubmit(term)
}

  return (
    <form id="searchAPI">
      <p style={{ color: "violet" }}>
        <em>{term && "Keywords Typed: " + term}</em>
      </p>
      <input type="text" value={props.term} onChange={handleChange} id="term" />
      <input
        type="submit"
        onClick={onSubmit}
      />
    </form>
  );
};

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
