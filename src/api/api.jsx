import axios from "axios";

const googleMapsAPI = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/",
});

export const fetchAllFood = (location, GOOGLE_MAPS_APIKEY) => {
  let path = `nearbysearch/json?keyword=lunch&location=${location.latitude}%2C${location.longitude}&radius=2000&type=restaurant&opennow=true&key=${GOOGLE_MAPS_APIKEY}`;

  return googleMapsAPI.get(path).then(({ data }) => {
    return data.results;
  });
};

export const fetchAllPOI = (location, GOOGLE_MAPS_APIKEY) => {
  let POIpath = `nearbysearch/json?keyword=&location=${location.latitude}%2C${location.longitude}&radius=2000&type=tourist_attraction|park&key=${GOOGLE_MAPS_APIKEY}`;
  return googleMapsAPI.get(POIpath).then(({ data }) => {
    return data.results;
  });
};
