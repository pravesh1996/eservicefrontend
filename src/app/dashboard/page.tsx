// pages/dashboard.js
import React from "react";
import styles from "../css/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>go2market</h3>
        <ul>
          <li>User</li>
          <li>OBD</li>
          <li>Campaign</li>
          <ul>
            <li>My Campaign</li>
          </ul>
          <li>Report</li>
          <li>Request</li>
          <li>Approvals</li>
          <li>Credit Allocation</li>
          <li>Manage</li>
          <li>IVR Manage</li>
          <li>Phone Book</li>
          <li>Conference</li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div>Account ID: 50001</div>
          <div>Voice Promo Credit: -20000000</div>
          <div>Voice Trans Credit: -1000187697931</div>
          <button className={styles.button}>Change Password</button>
          <button className={styles.button}>Logout</button>
        </header>

        <h2>Manage OBD Campaigns</h2>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Enabled</th>
                <th>User</th>
                <th>Creation Date</th>
                <th>Creation Time</th>
                <th>Schedule Date</th>
                <th>Schedule Time</th>
                <th>Total</th>
                <th>Approved</th>
                <th>Reject</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cibaca_Day_25_OBDth_18th_Oct</td>
                <td>Active</td>
                <td>Cibaca_Colgate</td>
                <td>09-10-2024</td>
                <td>12:58:02 PM</td>
                <td>18-10-2024</td>
                <td>09:00:05 AM</td>
                <td>250056</td>
                <td>250055</td>
                <td>1</td>
                <td>Transactional</td>
                <td>Scheduled</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
