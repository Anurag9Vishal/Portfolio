import React from "react";

export default function Portfolio() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <section style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Anurag Vishal</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Data Analytics & Engineering professional with a strong foundation in data pipeline development, business intelligence, and dashboard design. Proficient in SQL, Power BI, and Python, I specialize in turning raw data into actionable insights, automating workflows, and driving data-informed decision-making.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <a
            href="https://www.linkedin.com/in/anurag-vishal-9a1014248/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #000",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              color: "#000",
              borderRadius: "4px"
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Anurag9Vishal"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #000",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              color: "#000",
              borderRadius: "4px"
            }}
          >
            GitHub
          </a>
        </div>

        <section>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Highlighted Projects</h2>

          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "6px" }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>1. Hospitality Revenue Insights</h3>
              <p style={{ fontSize: "0.95rem" }}>
                Built a Power BI-based end-to-end reporting system analyzing hotel booking trends, room occupancy, guest behavior, and revenue flow using multi-source data. Integrated multiple dimension tables and applied advanced DAX to extract actionable KPIs.
              </p>
              <a href="https://github.com/Anurag9Vishal/Hospitality-Revenue-Insights" target="_blank" style={{ color: "#0070f3", fontSize: "0.9rem" }}>
                View on GitHub
              </a>
            </div>

            <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "6px" }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>2. HR Data Analytics using Power BI & SQL</h3>
              <p style={{ fontSize: "0.95rem" }}>
                Designed a full-stack HR analytics solution analyzing 849+ attendance logs and 139 WFH records. Automated KPIs like leave trends and visualized patterns with Power BI.
              </p>
              <a href="https://github.com/Anurag9Vishal/HR-Data-Analytics" target="_blank" style={{ color: "#0070f3", fontSize: "0.9rem" }}>
                View on GitHub
              </a>
            </div>

            <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "6px" }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>3. Loan Eligibility Prediction</h3>
              <p style={{ fontSize: "0.95rem" }}>
                Developed a machine learning pipeline to predict loan approvals using logistic regression and decision tree models, achieving 80% accuracy.
              </p>
              <a href="https://github.com/Anurag9Vishal/Loan-Eligibility-Prediction" target="_blank" style={{ color: "#0070f3", fontSize: "0.9rem" }}>
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Skills & Tools</h2>
          <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem", listStyle: "disc", paddingLeft: "1.5rem" }}>
            <li>SQL (Joins, CTEs, Window Functions)</li>
            <li>Power BI (DAX, Filters, Visuals)</li>
            <li>Python (pandas, seaborn, matplotlib)</li>
            <li>Scikit-learn & ML Modeling</li>
            <li>ETL Automation & Data Pipelines</li>
            <li>Git & GitHub</li>
            <li>Excel (Pivot Tables, Power Query)</li>
            <li>Business Analytics & Storytelling</li>
            <li>RFM & Cohort Analysis</li>
          </ul>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Get in Touch</h2>
          <p>Email: <strong>vishalanurag@alumni.iitgn.ac.in</strong></p>
          <p>Phone: <strong>+91-8827433620</strong></p>
        </section>
      </section>
    </main>
  );
}
