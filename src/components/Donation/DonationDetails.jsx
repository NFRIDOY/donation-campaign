import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { DonationContext } from '../../Layout/MainLayout'


export default function DonationDetails() {

    const [donation, setDonation] = useState();
    // const [btnBg, setBtnBg] = useState();
    const [allDonations, setAllDonations] = useContext(DonationContext)

    const { id } = useParams()
    console.log(id);

    const donations = useLoaderData();
    // const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donations;
    // console.log("donations From Details", donations );

    useEffect(() => {
        const findDonation = donations.find((donation1) => donation1.id == id);
        console.log(findDonation);

        setDonation(findDonation);

        // const btnBg = donation?.text_button_bg

        // const btnBgStyle = {
        //     backgroundColor: donation?.text_button_bg,
        // }
        // setBtnBg(donation?.text_button_bg)

    }, [id, donations])


    // const btnBgStyle = {
    //     backgroundColor: btnBg,
    // }


    return (
        <div>
            <div>
                <div className="hero text-left min-h-[70vh] mb-14 relative" style={{ backgroundImage: `url(${donation?.picture})` }}>
                        <div className="hero-overlay h-1/4 b-0 bg-black bg-opacity-50  "></div>
                    <div className="flex  w-full pl-10">
                        <button className="btn text-white" style={{ backgroundColor: donation?.text_button_bg, }} onClick={() => setAllDonations(allDonations+1)}>
                            Donate {donation?.price}
                        </button>
                    </div>
                </div>
                <div>
                    {/* {console.log(donation?.picture)} */}
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

                </div>

            </div>
        </div>
    )
}
