import { useContext, useEffect } from "react";
import DonateCard from "./DonateCard";
import { DonationContext } from "../../Layout/MainLayout";

export default function DonateList() {
    const [allDonations, setAllDonations] = useContext(DonationContext)
    useEffect(() => {
        setAllDonations(JSON.parse(localStorage.getItem("Donated")))  
    },[])
    // console.log(allDonations)  
    return (
        <div>
            {
                allDonations.map((donate) => <DonateCard key={donate.id} donate={donate}></DonateCard>)
            }
            {/* <DonateCard></DonateCard> */}
            {/* {
                allDonations.lenght
            } */}
        </div>
    )
}
