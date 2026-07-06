import { useState } from "react";

import Header from "../components/Header";
import CrimeForm from "../components/CrimeForm";
import ReportCard from "../components/ReportCard";
import Footer from "../components/Footer";

function Home() {

    const [report, setReport] = useState(null);

    return (

        <div className="container">

            <Header />

            <CrimeForm setReport={setReport} />

            {report && <ReportCard report={report} />}

            <Footer />

        </div>

    );

}

export default Home;