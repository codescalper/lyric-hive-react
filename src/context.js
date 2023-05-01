import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const Context = createContext();

export const Provider = (props) => {
  const [trackList, setTrackList] = useState([]);
  const [heading, setHeading] = useState("Top 10 Tracks");

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API error:", error);
        return Promise.reject(error);
      }
    );

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setTrackList(res.data.message.body.track_list);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={{ trackList, heading }}>
      {props.children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
