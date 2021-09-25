// Step 1: Import React
import * as React from "react";
import Gallery from "./gallery";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I am making this by following the Gatsby Tutorial</p>
      <Gallery />
    </main>
  );
};

// Step 3: Export your component
export default IndexPage;
