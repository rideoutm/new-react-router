import React from "react";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find page.</p>
      </main>
    </>
  );
}
