import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"


export default function DonationDetails() {

    const [donation , setDonation] = useState();

    const {id} = useParams()
    console.log(id);

    const donations = useLoaderData();
    console.log("donations From Details", donations );

    useEffect(() => {
        const findDonation = donations.find((donation1)=> donation1.id == id);
        console.log(findDonation);

        setDonation(findDonation);
        

    }, [id, donations])

    return (
        <div>
            <div>
                <div>
                    {console.log(donation?.picture)}
                    <img src={donation?.picture} alt="" />
                    <div className="overlay">
                        <button className="btn btn-primary">
                            Donate $ Price {id}
                            Donate $ Price {id}
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
