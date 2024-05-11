import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import ManageServiceCard from "./ManageServiceCard"

const ManageService = () => {
  const { user } = useContext(AuthContext)
  const [addService, setAddService] = useState([])

  const url = `http://localhost:5000/serviceProvider?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddService(data))
  }, [url])

  return (
    <div>
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
