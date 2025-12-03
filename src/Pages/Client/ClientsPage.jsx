import React, { useState } from "react";
import clientsData from "../../data/clientsData";
import "../../CSS/Clientpage/ClientsPage.css";
import ClientReviews from "../Home/ClientReviews";

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // === Add this state ===
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", ...new Set(clientsData.map((client) => client.industry))];

  const filteredClients = clientsData.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "All" || client.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });


  return (
    <section className="client-page-section">
      <div className="client-page-container">
        <div className="client-page-hero">
        {/* Heading Section */}
        <div className="client-page-header">
          <h2>Our Clients</h2>
          <p>
            We are proud of contributing to the success of the world’s leading
            brands.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="client-page-filter">
          <div className="filter-group">
            <label className="filter-label" htmlFor="industry">Industries</label>
            <select
              id="industry"
              className="client-page-dropdown"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {industries.map((industry, idx) => (
                <option key={idx} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label" htmlFor="search">Clients</label>
            <input
              id="search"
              type="text"
              className="client-page-input-line"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        </div>




        {/* Clients Grid */}
        <div className="client-page-grid">
          {filteredClients.map((client, index) => (
            <div className="client-page-card" key={index}>
              <div className="client-page-info">
                <span className="client-page-bullet-dot"></span>
                <h4 className="client-page-title">{client.industry}</h4>
              </div>
              <div className="client-page-logo">
                <img src={client.logo} alt={client.industry} />
              </div>
              <div className="client-page-overlay">
                <p>{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ClientReviews />

    </section>


  );
};

export default ClientsPage;