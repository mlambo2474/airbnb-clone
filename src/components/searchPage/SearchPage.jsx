import React from 'react';
import  Button from "@mui/material/Button";
import SearchResult from "../searchResult/SearchResult"
import "./SearchPage.css"

const SearchPage = () => {
  return (
    <div className="search-page">
     <div className="search-page-info">
      <p>63 stays · 05 May to 10 May · 2 guest</p>
      <h1>Stays nearby</h1>
      <Button variant="outlined">Cancellation Flexibility </Button>
      <Button variant="outlined">Type of place </Button>
      <Button variant="outlined">Price </Button>
      <Button variant="outlined">Rooms and Beds </Button>
      <Button variant="outlined">More Filters </Button>
     </div>
     <SearchResult 
         img= "https://helium.privateproperty.co.za/live-za-images/property/1122/36/10873122/images/property-10873122-76909926_e.jpg"
         location ="Hermanus"
         title="Spacious Family Home with pool, entertainment area [removed] close to top schools"
         description ="A beautiful seaside and mountain view in the comfort of a stone house"
         star = "4.4"
         price="$80/night"
         total= "$240.60"
     />
     <SearchResult 
         img= "https://helium.privateproperty.co.za/live-za-images/property/915/28/10956915/images/property-10956915-81850863_e.jpg"
         location ="Hout Bay beach"
         title="3 Bed House in Marina Da Gama"
         description ="High-quality finishes, superior craftsmanship and thoughtful design elements accentuate the spaces ensuring sophisticated home"
         star = "5.0"
         price="$78/night"
         total= "$213.00"
     />
     <SearchResult 
         img= "https://helium.privateproperty.co.za/live-za-images/property/539/19/10938539/images/property-10938539-71252313_e.jpg"
         location ="Chapmans Estate"
         title="3 Bed House in Protea Heights"
         description ="Safety and security are paramount at Groot Parys Lifestyle Estate which is why we have partnered with the most prominent security company in Paarl."
         star = "4.5"
         price="$68/night"
         total= "$633.45"
     />
         <SearchResult 
         img= "https://helium.privateproperty.co.za/live-za-images/property/635/4/10908635/images/property-10908635-4017432_e.jpg"
         location =" De Waterkant"
         title="2 Bed Apartment in De Waterkant"
         description ="Low maintenance lock up & go home with granny flat. This exceptional property offers everything youve ever desired for luxurious living in the sought-after area. With a perfect blend of style, functionality, and comfort, this home is designed to cater to your every need."
         star = "3.8"
         price="$68/night"
         total= "$633.45"
     />
       <SearchResult 
         img= "https://helium.privateproperty.co.za/live-za-images/property/1195/5/11011195/images/property-11011195-81738094_e.jpg"
         location =" Observatory Western Cape"
         title="Charming Victorian Home in Observatory Fully Renovated with Timeless Character"
         description ="Step into a piece of history with this beautifully renovated Victorian home in the heart of Observatory. Seamlessly blending period charm with modern convenience"
         star = "4.6"
         price="$68/night"
         total= "$633.45"
     />
       <SearchResult 
         img= "https://helium.privateproperty.co.za/live-za-images/property/722/1/11002722/images/property-11002722-74592753_e.jpg"
         location ="Contact agent for street address"
         title="4 Bed House in Ferndale"
         description ="Beautifully renovated family home . This property offers the perfect blend of modern living and family comfort. The bathrooms have been beautifully renovated, offering a sleek, contemporary design."
         star = "5"
         price="$89/night"
         total= "$523.45"
     />
    </div>
  )
}

export default SearchPage