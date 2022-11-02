import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";

const Characters = () => {
  const [originId, setOriginId] = useState(null);

  const fetchCharacters = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    return res.json();
  };
  const fetchOrigin = async ({ queryKey }) => {
    const [_, originId] = queryKey;
    if (originId) {
      console.log("🚀 ~ file: characters.js ~ line 17 ~ fetchOrigin ~ originId", originId);
      const res = await fetch(`https://rickandmortyapi.com/api/location/${originId}`);
      return res.json();
    }
    return false;
  };

  const getOrigin = (origin) => {
    if (origin) {
      const originId = origin.split("/").slice(-1).pop();
      setOriginId(originId);
      // manually refetch
      originQuery.refetch();
    }
  };

  const charactersQuery = useQuery({ queryKey: ["characters"], queryFn: fetchCharacters });
  const originQuery = useQuery({ queryKey: ["origin", originId], queryFn: fetchOrigin, refetchOnWindowFocus: false, enabled: false });

  if (charactersQuery.status === "loading") {
    return <p>Loading...</p>;
  }

  if (charactersQuery.status === "error") {
    return <p>Error</p>;
  }

  return (
    <div className="flex  flex-wrap">
      {charactersQuery.data &&
        charactersQuery.data.results.map((char, i) => (
          <div className="card w-72 bg-slate-100 shadow-xl m-4" key={"char" + i}>
            <figure>
              <img src={char.image} alt={char.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{char.name}</h2>
              <p>
                {char.name} is a {char.species.toLowerCase()} and their status is {char.status.toLowerCase()}. {char.name} is {char.gender.toLowerCase()} and from {char.origin.name}
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary" onClick={() => getOrigin(char.origin.url)}>
                  Where from
                </button> */}
                <label htmlFor="my-modal" className="btn" onClick={() => getOrigin(char.origin.url)}>
                  open modal
                </label>
              </div>
            </div>
          </div>
        ))}
      <Modal originQuery={originQuery} />
    </div>
  );
};

export default Characters;
