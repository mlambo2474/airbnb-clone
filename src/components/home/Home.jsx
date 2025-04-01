import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../banner/Banner";
import Card from "../cards/Card";
import { listListing } from "../../actions/listingActions";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  console.log("Listing State:", listingList);

  const { loading, listings, error } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />

      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>error</h3>
      ) : (
        <div className="home-section">
          {listings.map((listing) => (
              <Card
                key={listing.id}
                src={listing.img}
                title={listing.title}
                description={listing.description}
                price={listing.price}
              />
            ))}
        </div>
      )}
      
    </div>
  );
};

export default Home;
