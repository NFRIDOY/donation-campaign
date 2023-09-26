import { useLoaderData } from "react-router-dom"
import DonationCard from "../../components/Donation/DonationCard";
import Banner from "../../components/Header/Banner/Banner";


export default function Home() {

  const donations = useLoaderData();
  // console.log(donations);

  return (
    <div>
      <Banner></Banner>
      <div className=" flex justify-center">
        <div className="grid grid-cols-4 gap-7">
          {
            donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>
      </div>

    </div>
  )
}
