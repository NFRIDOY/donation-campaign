import { useLoaderData } from "react-router-dom"
import DonationCard from "../../components/Donation/DonationCard";


export default function Home() {

  const donations = useLoaderData();
  console.log(donations);

  return (
    <div className="border-red-400 border-2 flex justify-center">
      <div className="border-2 border-blue-400">
        <div className="grid grid-cols-3 gap-x-9 gap-y-9">
          {
            donations?.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
        </div>
      </div>

    </div>
  )
}
