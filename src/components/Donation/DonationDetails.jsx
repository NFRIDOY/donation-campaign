import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"


export default function DonationDetails() {

    const [donation , setDonation] = useState();

    const {id} = useParams()
    console.log(id);

    const donations = useLoaderData();
    console.log("donations From Details", donations );

    useEffect(() => {
        const findDonation = donations?.map((donation1)=> donation1.id === id);
        console.log(findDonation);

    }, [id, donation])

    return (
        <div>
            <div>
                <div>
                    {/* <img src={} alt="" />
                    <div className="overlay">
                        <button className="btn btn-primary">
                            Donate $ Price {params.id}
                            Donate $ Price {donations.id}
                        </button>
                    </div> */}

                </div>

            </div>
        </div>
    )
}
