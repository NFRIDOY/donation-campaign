import { useLoaderData } from "react-router-dom"
import DonationCard from "../../components/Donation/DonationCard";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";


export default function Home() {

  const donations = useLoaderData();
  // console.log(donations);
  const [search, setSearch] = useState("");

  const searchArray = donations.filter((donation) => donation.category === search)
  // console.log(search);
  console.log(searchArray);
  return (
    <div>
      <Banner setSearch={setSearch}></Banner>
      {/* {typeof(search)} */}
      <div className=" flex justify-center">
        <div className="grid grid-cols-4 gap-7">
          {
            !search ? donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>) : searchArray?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            // donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>
      </div>

    </div>
  )
}
