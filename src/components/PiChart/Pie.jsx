// please install npm install react-apexcharts apexcharts
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
// import { DonationContext } from "../../Layout/MainLayout";
function Piechart() {
    // const [allDonations, setAllDonations] = useContext(DonationContext)
    const [allDonations, setAllDonations] = useState(0)

    useEffect(() => {
        const Donated = JSON.parse(localStorage.getItem("Donated"))
        if(Donated) {
            setAllDonations(Donated)
        }
        else {
            console.log("Data Not Found");
        }

    }, []);

    return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3 text-4xl">Welcome to Piechart </h3>
                <Chart
                    type="pie"
                    width={1349}
                    height={450}

                    series={[allDonations.length || 0, 12 - (allDonations.length || 0)]}

                    options={{
                        title: {
                            text: "Donated PieChart"
                        },
                        noData: { text: "Empty Data" },
                        colors:["#00C49F","#FF444A"],
                        labels: ["Donated", "Not Donated"]

                    }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;