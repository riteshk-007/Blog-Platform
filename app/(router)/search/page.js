"use client";

import { useSearchParams } from "next/navigation";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  console.log(encodedSearchQuery);
  return <div>search</div>;
};

export default Search;
