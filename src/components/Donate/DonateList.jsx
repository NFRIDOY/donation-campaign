import { useContext } from "react";
import DonateCard from "./DonateCard";
import { DonationContext } from "../../Layout/MainLayout";

export default function DonateList() {
    const [allDonations, setAllDonations] = useContext(DonationContext)
    console.log(allDonations)    
    return (
        <div>
            DonateList
            {
                allDonations.map((donate) => <DonateCard key={donate.id} donate={donate}></DonateCard>)
            }
            {/* <DonateCard></DonateCard> */}
            {
                allDonations.lenght
            }
        </div>
    )
}
