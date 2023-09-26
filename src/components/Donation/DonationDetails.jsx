import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { DonationContext } from '../../Layout/MainLayout'


export default function DonationDetails() {

    const [donation, setDonation] = useState([]);
    // const [btnBg, setBtnBg] = useState();
    const [allDonations, setAllDonations] = useContext(DonationContext)

    const [isActive, setIsActive] = useState(true);

    const { id } = useParams()
    // console.log(id);

    const donations = useLoaderData();
    // const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donations;
    // console.log("donations From Details", donations );

    useEffect(() => {
        const findDonation = donations.find((donation1) => donation1.id == id);
        // console.log(findDonation);

        setDonation(findDonation);

        // const btnBg = donation?.text_button_bg

        // const btnBgStyle = {
        //     backgroundColor: donation?.text_button_bg,
        // }
        // setBtnBg(donation?.text_button_bg)



    }, [id, donation, isActive])


    // const btnBgStyle = {
    //     backgroundColor: btnBg,
    // }

    const handleDonateBtn = () => {

        // setIsActive(!isActive)
        // setAllDonations(...allDonations + donation)

        const addToDonateArray = [];

        // console.log(donation);

        // localStorage.setItem("test", JSON.stringify(donation))

        const getDonated = JSON.parse(localStorage.getItem("Donated"));
        // const getDonated = localStorage.getItem(donation.id);
        // console.log(JSON.parse(getDonated));

        if (!getDonated) {
            addToDonateArray.push(donation)
            console.log(addToDonateArray);
            localStorage.setItem("Donated", JSON.stringify(addToDonateArray))
            // localStorage.setItem(JSON.stringify(donation.id), JSON.stringify(addToDonateArray))
            alert("Succesfully Donated")
        }
        else {
            addToDonateArray.push(...getDonated)
            // alert("Else")
            // console.log("donation.id",donation.id);
            console.log(addToDonateArray);
            // addToDonateArray.map(donatedAlready => console.log(donatedAlready.id))
            const isExist = addToDonateArray.find(donatedAlready => donatedAlready.id == donation.id)
            console.log("Is ex", isExist);
            if (!isExist) {
                addToDonateArray.push(...getDonated, donation);
                localStorage.setItem("Donated", JSON.stringify(addToDonateArray));
                alert("Succesfully Donated");
            }
            else {
                alert("You Have Donated To " + isExist.title);
            }





            // localStorage.setItem(JSON.stringify(donation.id), JSON.stringify(addToDonateArray))
        }


    }

    return (
        <div>
            <div>
                <div className="relative">
                    <img className="h-[85vh] w-full" src={donation?.picture} alt="" />
                    <div className="bg-[rgba(11,11,11,0.50)] h-32 absolute w-full bottom-0">A</div>
                    <button onClick={handleDonateBtn} className="bg-[rgba(11,11,11,0.50)] absolute bottom-10 left-10 btn text-white border-none" style={{ backgroundColor: donation?.text_button_bg, }} >
                        Donate {donation?.price}
                    </button>
                </div>
                <div className="my-10">
                    <h1 className="text-6xl pb-10 font-bold">
                        {donation?.title}
                    </h1>
                    <p className="text-xl text-[#0b0b0bb2]">
                        {donation?.description}

                    </p>
                </div>
            </div>
            {/* <div className="hero text-left min-h-[70vh] mb-14 relative" style={{ backgroundImage: `url(${donation?.picture})` }}>
                        <div className="hero-overlay h-1/4 b-0 bg-black bg-opacity-50  "></div>
                    <div className="flex  w-full pl-10">
                        <button className="btn text-white" style={{ backgroundColor: donation?.text_button_bg, }} onClick={handleDonateBtn}>
                            Donate {donation?.price}
                        </button>
                    </div>
                </div> */}
            {/* <div>
                    <img src={donation?.picture} alt="" />
                    <div className="hero-overlay bg-black opacity-10">F</div>
                    <div className="overlay">
                        <button className="btn text-white" style={{ backgroundColor: donation?.text_button_bg, }} >
                            Donate {donation?.price}
                        </button>
                    </div>
                    <div className="my-10">
                        <h1 className="text-6xl pb-10">
                            {donation?.title}
                        </h1>
                        <p className="text-xl text-[#0b0b0bb2]">
                            {donation?.description}

                        </p>
                    </div>

                </div> */}

        </div>

    )
}
