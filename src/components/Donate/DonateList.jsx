import { useContext, useEffect, useState } from "react";
import DonateCard from "./DonateCard";
import { DonationContext } from "../../Layout/MainLayout";
import DataNotFound from "../../pages/Error/DataNotFound";

export default function DonateList() {
    const [allDonations, setAllDonations] = useContext(DonationContext)
    const [isShowAll, setIsShowAll] = useState(false)

    useEffect(() => {
        const Donated = JSON.parse(localStorage.getItem("Donated"))
        if (Donated) {
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
                    localStorage.getItem("Donated") ? !isShowAll ? allDonations.slice(0, 4).map((donate) => <DonateCard key={donate.id} donate={donate}></DonateCard>) : allDonations.slice(0, 12).map((donate) => <DonateCard key={donate.id} donate={donate}></DonateCard>) : DataNotFound()
                }

            </div>
            <div className="w-full flex justify-center ">
                {
                    <button onClick={() => setIsShowAll(!isShowAll)} className="btn bg-[#009444] text-white mx-auto my-10 hover:bg-black">{isShowAll ? "Show Less" : "Show All"}</button>
                }
            </div>
            {/* <DonateCard></DonateCard> */}
            {/* {
                allDonations.lenght
            } */}
        </div>
    )
}
