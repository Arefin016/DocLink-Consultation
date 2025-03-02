import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import ManageServiceCard from "./ManageServiceCard"
import { Helmet } from "react-helmet-async"

const ManageService = () => {
  const { user } = useContext(AuthContext)
  const [addService, setAddService] = useState([])

  const url = `https://b9-a11-server-sigma.vercel.app/serviceProvider?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddService(data))
  }, [url])

  return (
    <div>
      <div className="text-center lg:my-10 my-5">
                <input className="border border-black p-2" type="Search" placeholder="Search" />
            </div>
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:mt-10 mt-4 mb-4">
        {
            addService.map(service => <ManageServiceCard 
            key={service._id}
            service={service}
            addService={addService}
            setAddService={setAddService}
            ></ManageServiceCard>)
        }
      </div>
    </div>
  )
}

export default ManageService
