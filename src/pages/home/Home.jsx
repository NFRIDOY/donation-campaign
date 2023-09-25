import { useLoaderData } from "react-router-dom"
import DonationCard from "../../components/Donation/DonationCard";


export default function Home() {

  const donations = useLoaderData();
  console.log(donations);

  return (
    <div className=" flex justify-center">
      <div className="">
        <div className="grid grid-cols-3 gap-x-9 gap-y-9">
          {
            donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>
      </div>

    </div>
  )
}
