import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"


export default function DonationDetails() {

    const [donation, setDonation] = useState();

    const { id } = useParams()
    console.log(id);

    const donations = useLoaderData();
    // const {picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donations;
    // console.log("donations From Details", donations );

    useEffect(() => {
        const findDonation = donations.find((donation1) => donation1.id == id);
        console.log(findDonation);

        setDonation(findDonation);


    }, [id, donations])

    return (
        <div>
            <div>
                <div>
                    {/* {console.log(donation?.picture)} */}
                    <img src={donation?.picture} alt="" />
                    <div className="overlay">
                        <button className="btn btn-primary">
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
