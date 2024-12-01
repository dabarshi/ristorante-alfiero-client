import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const EventReservations = () => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const [approvedReservations, setApprovedReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axiosInstance.get("/events");
      const data = response.data;

      setPendingReservations(
        data.filter((reservation) => reservation.status === "pending")
      );
      setApprovedReservations(
        data.filter((reservation) => reservation.status === "approved")
      );
    } catch (error) {
      console.error("Error fetching event reservations:", error);
    }
  };

  const approveReservation = async (id) => {
    try {
      const updatedReservation = await axiosInstance.patch(`/events/${id}`, {
        status: "approved",
      });

      if (updatedReservation.status === 200) {
        setPendingReservations((prev) =>
          prev.filter((reservation) => reservation._id !== id)
        );
        setApprovedReservations((prev) => [
          ...prev,
          {
            ...pendingReservations.find(
              (reservation) => reservation._id === id
            ),
            status: "approved",
          },
        ]);
      }
    } catch (error) {
      console.error("Error approving event reservation:", error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axiosInstance.delete(`/events/${id}`);
      setPendingReservations((prev) =>
        prev.filter((reservation) => reservation._id !== id)
      );
      setApprovedReservations((prev) =>
        prev.filter((reservation) => reservation._id !== id)
      );
    } catch (error) {
      console.error("Error deleting event reservation:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded">
      <h1 className="text-2xl font-bold mb-4 shadow-sm">Event Reservations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-1 md:px-4 mb-2 md:mb-0">
          <h2 className="text-xl font-semibold mb-3">Pending Reservations</h2>
          <ul className="space-y-4">
            {pendingReservations.length > 0 ? (
              pendingReservations.map((reservation) => (
                <li
                  key={reservation._id}
                  className="p-4 bg-white shadow rounded-lg"
                >
                  <p>
                    <strong>Name:</strong> {reservation.name}
                  </p>
                  <p>
                    <strong>Date & Time:</strong> {reservation.dateTime}
                  </p>
                  <p>
                    <strong>People:</strong> {reservation.numberOfPeople}
                  </p>
                  <p>
                    <strong>Contact:</strong> {reservation.contactInfo}
                  </p>
                  <p>
                    <strong>Email:</strong> {reservation.email}
                  </p>
                  <p>
                    <strong>Occasion:</strong> {reservation.occasion}
                  </p>
                  <p>
                    <strong>Menu Requirements:</strong>{" "}
                    {reservation.menuRequirements}
                  </p>
                  <p>
                    <strong>Special Requirements:</strong>{" "}
                    {reservation.specialRequirements}
                  </p>
                  <div className="py-4 font-medium">
                    <button
                      onClick={() => approveReservation(reservation._id)}
                      className="px-4 py-2 bg-green-700 hover:bg-green-500 text-white rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => deleteReservation(reservation._id)}
                      className="px-4 py-2 bg-red-700 hover:bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="p-4 bg-white shadow rounded-lg">
                There are no pending reservations.
              </p>
            )}
          </ul>
        </div>

        <div className="px-1 md:px-4">
          <h2 className="text-xl font-semibold mb-3">Approved Reservations</h2>
          <ul className="space-y-4">
            {approvedReservations.length > 0 ? (
              approvedReservations.map((reservation) => (
                <li
                  key={reservation._id}
                  className="p-4 bg-white shadow rounded-lg"
                >
                  <p>
                    <strong>Name:</strong> {reservation.name}
                  </p>
                  <p>
                    <strong>Date & Time:</strong> {reservation.dateTime}
                  </p>
                  <p>
                    <strong>People:</strong> {reservation.numberOfPeople}
                  </p>
                  <p>
                    <strong>Contact:</strong> {reservation.contactInfo}
                  </p>
                  <p>
                    <strong>Email:</strong> {reservation.email}
                  </p>
                  <p>
                    <strong>Occasion:</strong> {reservation.occasion}
                  </p>
                  <p>
                    <strong>Menu Requirements:</strong>{" "}
                    {reservation.menuRequirements}
                  </p>
                  <p>
                    <strong>Special Requirements:</strong>{" "}
                    {reservation.specialRequirements}
                  </p>
                  <div className="py-4 font-medium">
                    <button
                      onClick={() => deleteReservation(reservation._id)}
                      className="px-4 py-2 bg-red-700 hover:bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="p-4 bg-white shadow rounded-lg">
                There are no approved reservations.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventReservations;
