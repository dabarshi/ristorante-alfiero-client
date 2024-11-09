import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const TableReservations = () => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const [approvedReservations, setApprovedReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axiosInstance.get("/bookings");
      const data = response.data;

      setPendingReservations(
        data.filter((booking) => booking.status === "pending")
      );
      setApprovedReservations(
        data.filter((booking) => booking.status === "approved")
      );
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const approveReservation = async (id) => {
    try {
      // Update status in the database
      const updatedReservation = await axiosInstance.patch(`/bookings/${id}`, {
        status: "approved",
      });

      if (updatedReservation.status === 200) {
        // Ensure the request was successful
        // Move the approved reservation to the approved list in local state
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
      console.error("Error approving reservation:", error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axiosInstance.delete(`/bookings/${id}`);
      setPendingReservations((prev) =>
        prev.filter((reservation) => reservation._id !== id)
      );
      setApprovedReservations((prev) =>
        prev.filter((reservation) => reservation._id !== id)
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded">
      <h1 className="text-2xl font-bold mb-4 shadow-sm">Table Reservations</h1>

      <div className="mb-8 px-4">
        <h2 className="text-xl font-semibold mb-3">Pending Reservations</h2>
        <ul className="space-y-4">
          {pendingReservations === null ? (
            pendingReservations.map((reservation) => (
              <li
                key={reservation._id}
                className="p-4 bg-white shadow rounded-lg"
              >
                <p>
                  <strong>Name:</strong> {reservation.name}
                </p>
                <p>
                  <strong>Date:</strong> {reservation.date}
                </p>
                <p>
                  <strong>Time:</strong> {reservation.time}
                </p>
                <p>
                  <strong>Persons:</strong> {reservation.person}
                </p>
                <p>
                  <strong>Phone:</strong> {reservation.phone}
                </p>
                <p>
                  <strong>Email:</strong> {reservation.email}
                </p>
                <p>
                  <strong>Message:</strong> {reservation.message}
                </p>
                <button
                  onClick={() => approveReservation(reservation._id)}
                  className="px-4 py-2 bg-green-500 text-white rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => deleteReservation(reservation._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="p-4 bg-white shadow rounded-lg">
              There is no more pending reservation.
            </p>
          )}
        </ul>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-semibold mb-3">Approved Reservations</h2>
        <ul className="space-y-4">
          {approvedReservations === null ? (
            approvedReservations.map((reservation) => (
              <li
                key={reservation._id}
                className="p-4 bg-white shadow rounded-lg"
              >
                <p>
                  <strong>Name:</strong> {reservation.name}
                </p>
                <p>
                  <strong>Date:</strong> {reservation.date}
                </p>
                <p>
                  <strong>Time:</strong> {reservation.time}
                </p>
                <p>
                  <strong>Persons:</strong> {reservation.person}
                </p>
                <p>
                  <strong>Phone:</strong> {reservation.phone}
                </p>
                <p>
                  <strong>Email:</strong> {reservation.email}
                </p>
                <p>
                  <strong>Message:</strong> {reservation.message}
                </p>
                <button
                  onClick={() => deleteReservation(reservation._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="p-4 bg-white shadow rounded-lg">
              There is no more reservation.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TableReservations;
