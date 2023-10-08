import { useLoaderData } from "react-router-dom"
import DonationCard from "../../components/Donation/DonationCard";
import Banner from "../../components/Header/Banner/Banner";
import { useEffect, useState } from "react";


export default function Home() {

  const donations = useLoaderData();
  // console.log(donations);
  const [search, setSearch] = useState("");

  const [searchArray, setSearchArray] = useState([])
  console.log(donations.lenght);

  useEffect(() => {
    const s = donations?.filter((donation) => donation?.category?.toLowerCase() === search?.toLowerCase())
    console.log(s);
    setSearchArray(s);
  },[donations,search])
  
  // console.log(search);
  return (
    <div>
      <Banner setSearch={setSearch}></Banner>
      {/* {typeof(search)} */}
      <div className=" flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {
            !search ? donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>) : searchArray?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            // donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>
      </div>

    </div>
  )
}
