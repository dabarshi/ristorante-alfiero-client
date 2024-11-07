import React, { useState } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import EventsForm from "../../components/EventsForm/EventsForm";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";
import { SecondaryHeroImg } from "../../data/data";
import useImageLoader from "../../hooks/useImageLoader";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Book = () => {
  const bookImg = "https://i.ibb.co.com/0DnSw9X/26.webp";
  const [selectedForm, setSelectedForm] = useState("table");
  // Combine all images to preload
  const allImages = [...SecondaryHeroImg, { img: bookImg, alt: "Background" }];

  // Use the loading state
  const loading = useImageLoader(allImages);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondaryHeroSection
            index={3}
            title={"Book"}
            subtitle={"Make a Reservation"}
            SecondaryHeroImg={SecondaryHeroImg}
          />
          <div className="text-center py-12 bg-[#121217]">
            <button
              onClick={() => setSelectedForm("table")}
              className={`px-6 py-2 mr-4 font-semibold rounded ${
                selectedForm === "table"
                  ? "bg-amber-600 text-white"
                  : "bg-white text-amber-600"
              }`}
            >
              Table Booking
            </button>
            <button
              onClick={() => setSelectedForm("event")}
              className={`px-6 py-2 font-semibold rounded ${
                selectedForm === "event"
                  ? "bg-amber-600 text-white"
                  : "bg-white text-amber-600"
              }`}
            >
              Event Booking
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(${bookImg})`,
            }}
            className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-40">
              {selectedForm === "table" ? <BookingForm /> : <EventsForm />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Book;
