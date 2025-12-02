import React, { useEffect, useState } from "react";
import "../../CSS/Admin/AdminPage.css";

const AdminPage = () => {
  const [demoData, setDemoData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/book-demo");
        // const response = await fetch("http://localhost:6002/api/book-demo");
        const response = await fetch("http://15.207.163.30:6002/api/book-demo");
        if (response.ok) {
          const result = await response.json();
          setDemoData(result.data); // access `data` property
        } else {
          console.error("Failed to fetch data");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Book a Demo - Admin Panel</h2>

      {loading ? (
        <p className="loading">Loading data...</p>
      ) : demoData.length === 0 ? (
        <p className="no-data">No demo requests found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Mobile Number</th>
                <th>Products / Services</th>
                <th>Description</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {demoData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.organization}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.productsServices}</td>
                  <td>{item.description || "-"}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
