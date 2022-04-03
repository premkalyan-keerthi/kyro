import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

import "./styles.css";

const getCallData = () => {
  return axios.get("https://api.tvmaze.com/shows");
};

export function Homepage() {
  const { data, isLoading, isError, refetch } = useQuery(
    "tv-shows",
    getCallData,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  let randomArray = [],
    i = 0;

  if (isLoading) return "Loading ...";
  else if (isError) return "Error occured";
  else if (data) {
    const { data: tvShowsData } = data;

    while (i < 5) {
      const value = parseInt(Math.random(0, 10) * 100, 10);
      if (!randomArray.includes(value)) {
        randomArray.push(value);
        i++;
      }
    }

    return (
      <div className="cards-button-container">
        <button
          className="reset-button-styles"
          onClick={() => {
            refetch();
          }}
        >
          Reset
        </button>
        <div className="cards-container">
          {randomArray.map((eachIndex) => (
            <div className="card-container" key={eachIndex}>
              <span className="card-heading">
                {tvShowsData[eachIndex].name}
              </span>
              <a href={tvShowsData[eachIndex].url} target="_blank">
                <img
                  className="card-image"
                  src={tvShowsData[eachIndex].image.medium}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
