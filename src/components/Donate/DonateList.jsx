import { useContext, useEffect } from "react";
import DonateCard from "./DonateCard";
import { DonationContext } from "../../Layout/MainLayout";
import DataNotFound from "../../pages/Error/DataNotFound";

export default function DonateList() {
    const [allDonations, setAllDonations] = useContext(DonationContext)
    useEffect(() => {
        const Donated = JSON.parse(localStorage.getItem("Donated"))
        if(Donated) {
            setAllDonations(Donated)
        }
        else {
            console.log("Data Not Found");
        }
    }, [])
    // console.log(allDonations)  
    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                {
                    localStorage.getItem("Donated") ? allDonations.map((donate) => <DonateCard key={donate.id} donate={donate}></DonateCard>) : DataNotFound()
                }
                
            </div>
            {/* <DonateCard></DonateCard> */}
            {/* {
                allDonations.lenght
            } */}
        </div>
    )
}
