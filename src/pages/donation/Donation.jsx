import { useContext } from "react"
import { DonationContext } from "../../Layout/MainLayout"

export default function Donation() {
  const [allDonations, setAllDonations] = useContext(DonationContext)

  console.log(allDonations.id);

  return (
    <div className="">
      Donation 
        {allDonations.id}
    </div>
  )
}
