import { useState } from "react";
import TableReservations from "../../sections/TableReservations";
import EventReservations from "../../sections/EventReservations";
import OffersManagement from "../../sections/OffersManagement";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("tables");
  const tabsData = [
    {
      tabName: "tables",
      tabTitle: "Table Reservations",
    },
    {
      tabName: "events",
      tabTitle: "Event Reservations",
    },
    {
      tabName: "offers",
      tabTitle: "Manage Offers",
    },
  ];

  return (
    <div className="min-h-screen bg-[#079bab] pt-24">
      <div className="max-w-6xl bg-[#ffffff10] mx-auto shadow-inner rounded">
        <div className="bg-[#ffffff4d] p-2 rounded">
          <h1 className="text-3xl text-white font-bold">Admin Dashboard</h1>
        </div>
        <div className="p-8">
          <div className="mb-4 shadow-inner">
            {/* Tabs for each section */}
            {tabsData.map((tabs) => (
              <button
                key={tabs.tabName}
                onClick={() => setActiveTab(`${tabs.tabName}`)}
                className={`p-2 mr-1 font-medium ${
                  activeTab === tabs.tabName
                    ? "text-white"
                    : "bg-[#00000045] text-[#ffffffa8]"
                }`}
              >
                {tabs.tabTitle}
              </button>
            ))}
          </div>

          {/* Display the selected section */}
          {activeTab === "tables" && <TableReservations />}
          {activeTab === "events" && <EventReservations />}
          {activeTab === "offers" && <OffersManagement />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
