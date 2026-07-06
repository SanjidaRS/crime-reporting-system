function ReportCard({ report }) {

    return (

        <div className="report-card">

            <h2>✅ Submitted Report</h2>

            <p><strong>Crime Type:</strong> {report.crimeType}</p>

            <p><strong>Location:</strong> {report.location}</p>

            <p><strong>Description:</strong> {report.description}</p>

            <p><strong>Number of Suspects:</strong> {report.suspects}</p>

        </div>

    );

}

export default ReportCard;