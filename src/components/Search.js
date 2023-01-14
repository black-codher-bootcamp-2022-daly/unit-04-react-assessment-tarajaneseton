import React from "react";
// import PropTypes from "prop-types";

export const Search = (props) => {
  const { search, term, setTerm } = props;
  // const [value, setValue] = React.useState(" ")

  function handleChange(changeEvent) {
    console.log("tara event =>", changeEvent);
    // props.search(props.term);
    setTerm(changeEvent.target.value);
  }

  return (
    <form id="searchAPI">
   <p style={{color:"violet"}}><em>{term && 'Keywords Typed: ' + term}</em></p> 
      <input
        type="text"
        value={props.term}
        onChange={handleChange}
        id="term"
      />
      <input type="submit" />
    </form>
  );
};

// 11.01.23 search component. search bar displays using value, set valuee instead of props.keyword but it doesnt search for books. updated code sets the value from props video slides 00:58

// this seemed to work, so revret back to this if neeeded. 48mins into video
// const [keyword, setKeyword] = React.useState("");
//   return (
//     <form id="searchAPI">
//     <div>
//       <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/>
//       <input type="submit"/>
//     </div>
//     </form>
//   );
// };

// Search.proptypes = {
//   keyword: PropTypes.string,
//   setKeyword: PropTypes.func
// }

//   const { search, term, setTerm } = props;

//   function handleChange(changeEvent) {
//     console.log("Someone Typed event =>", changeEvent);
//      props.search(props.term);
//     setTerm(changeEvent.target.value);
//   }

//   //    handleSubmit(term); 3rd line

//   function onSubmit(event) {
//     event.preventDefault();

//   }
//   return (
//     <form className="Search" id="searchAPI">
//       <p style={{ color: "pink" }}>
//         <em>{term && "Term Typed: " + term}</em>
//       </p>
//       <input id="term" type="text" value={props.term} onChange={handleChange} />
//       <input className="submitButton" type="submit" onClick={onSubmit} />
//     </form>
//   );
// }

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
