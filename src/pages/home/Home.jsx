import { useLoaderData } from "react-router-dom"
import DonationCard from "../../components/Donation/DonationCard";


export default function Home() {

  const donations = useLoaderData();
  console.log(donations);

  return (
    <div>
      <div className="grid grid-cols-3">
        {
          donations?.map((donation) => <DonationCard donation={donation}></DonationCard>)
        }
      </div>
    </div>
  )
}
