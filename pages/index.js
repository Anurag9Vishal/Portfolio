import React from "react";

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#0f172a", color: "#f1f5f9", lineHeight: "1.6" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
          a.button {
            display: inline-block;
            padding: 10px 24px;
            margin-right: 12px;
            margin-bottom: 12px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          a.button-primary {
            background-color: #3b82f6;
            color: white;
          }
          a.button-primary:hover {
            background-color: #2563eb;
            transform: translateY(-2px);
          }
          a.button-outline {
            border: 2px solid #94a3b8;
            color: #94a3b8;
          }
          a.button-outline:hover {
            border-color: #f8fafc;
            color: #f8fafc;
            transform: translateY(-2px);
          }
          .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        `}
      </style>

      <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem", color: "#60a5fa" }}>Anurag Vishal</h1>
        <p style={{ maxWidth: "700px", margin: "auto", fontSize: "1.2rem", fontWeight: "300" }}>
          Data Analytics & Engineering professional transforming raw data into impactful solutions.
          Proficient in SQL, Power BI, Python & machine learning for business outcomes.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a href="https://www.linkedin.com/in/anurag-vishal-9a1014248/" className="button button-outline" target="_blank">LinkedIn</a>
          <a href="https://github.com/Anurag9Vishal" className="button button-outline" target="_blank">GitHub</a>
        </div>
      </section>

      <section className="glass section">
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#93c5fd" }}>🌟 Highlighted Projects</h2>
        <div className="grid" style={{ marginTop: "1.5rem" }}>
          <div>
            <h3 style={{ fontWeight: "600", color: "#facc15" }}>Hospitality Revenue Insights</h3>
            <p>Power BI dashboards for hotel booking trends, room occupancy, and KPIs.</p>
            <a href="https://github.com/Anurag9Vishal/Hospitality-Revenue-Insights" className="button button-primary" target="_blank">View Project</a>
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "#facc15" }}>HR Analytics using Power BI & SQL</h3>
            <p>Automated KPI tracking and workforce visualization to improve payroll accuracy.</p>
            <a href="https://github.com/Anurag9Vishal/HR-Data-Analytics" className="button button-primary" target="_blank">View Project</a>
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "#facc15" }}>Loan Eligibility Prediction</h3>
            <p>ML models predicting loan approvals with 80% accuracy using financial indicators.</p>
            <a href="https://github.com/Anurag9Vishal/Loan-Eligibility-Prediction" className="button button-primary" target="_blank">View Project</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#93c5fd" }}>🛠 Skills & Tools</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", listStyle: "none", marginTop: "1rem", padding: 0 }}>
          {["SQL", "Power BI", "Python", "Seaborn", "Matplotlib", "Sklearn", "Git", "GitHub", "ETL Automation", "Storytelling", "Excel", "RFM Analysis"].map(skill => (
            <li key={skill} style={{ background: "#1e293b", color: "#60a5fa", padding: "0.4rem 0.75rem", borderRadius: "8px", fontSize: "0.9rem" }}>{skill}</li>
          ))}
        </ul>
      </section>

      <footer style={{ padding: "3rem 1rem", textAlign: "center", backgroundColor: "#1e293b", marginTop: "4rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "500", color: "#facc15" }}>📬 Get in Touch</h2>
        <p>Email: <strong style={{ color: "#e2e8f0" }}>vishalanurag@alumni.iitgn.ac.in</strong></p>
        <p>Phone: <strong style={{ color: "#e2e8f0" }}>+91-7738957332</strong></p>
      </footer>
    </div>
  );
}

