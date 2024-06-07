import React, { useEffect, useState } from "react";
import "../style/Common.css";
import "../style/BreweryDetail.css";
import Navbar from "../components/Navbar.js";
import { useLocation } from "react-router-dom";
import { getReview, postReview } from "../api/Review.js";

export default function BreweryDetail() {
  const { state } = useLocation();
  const item = state.item;
  console.log(state);
  const [review, setReview] = useState();
  const [oldReview, setOldReview] = useState();
  useEffect(() => {
    document.title = "Brewery Detail";
  }, []);
  useEffect(() => {
    async function fetchReview() {
      const res = getReview("abcde@gmail.com");
      setOldReview(res);
      console.log(res);
    }
    fetchReview();
  }, []);
  return (
    <div className="DetailsOuterContainer">
      <Navbar searchbar="false" />
      <div className="DetailsContainer">
        <div className="InDetailsContainer">
          <div className="DetailContainerLeft">
            <text>
              <strong>Name:</strong>
              {item.name}
            </text>
            <text>
              <strong>Brewery Type:</strong> {item.brewery_type}
            </text>
            <text>
              <strong>Contact:</strong> {item.phone}
            </text>
            <text>
              <strong>Website Url:</strong> {item.website_url}
            </text>
            <text>
              <strong>City:</strong> {item.city}
            </text>
            <text>
              <strong>State:</strong> {item.state}
            </text>
            <text>
              <strong>Country:</strong> {item.country}
            </text>
          </div>
          <div className="DetailContainerRight">
            <text>
              <strong>Address:</strong> {item.address_1} {item.address_2}{" "}
              {item.address_3}
            </text>
            <text>
              <strong>State Province:</strong> {item.state_province}
            </text>
            <text>
              <strong>Postal Code:</strong> {item.postal_code}
            </text>
            <text>
              <strong>Longitude:</strong> {item.longitude}
            </text>
            <text>
              <strong>Latitude:</strong> {item.latitude}
            </text>
            <text>
              <strong>Street:</strong> {item.street}
            </text>
          </div>
        </div>
        <div className="ReviewBtnContainer">
          <input
            className="reviewInput"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button className="AddReviewBtn">Add Review</button>
        </div>
      </div>
    </div>
  );
}
