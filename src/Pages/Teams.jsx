import { Teams_list } from '../HardCoded_data/Teams_list'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'

let Teams_card = ({ v }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
          />
        </div>

        <h5 className="card-title"><strong>Team:</strong> {v.name}</h5>
        <p className="card-text"><strong>Members:</strong> {v.no_members}</p>
        <p className="card-text"><strong>Task:</strong> {v.task}</p>
        <p className="card-text"><strong>Deadline:</strong> {v.deadline}</p>
        <p className="card-text"><strong>Assumed_date:</strong> {v.assumed_date}</p>
      </div>
    </div>
  )
}

export default function Teams() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Teams</h1>
            </div>

            <div className="row">
              {Teams_list.map((tem, i) => (
                <div className="col-md-4 col-sm-6" key={i}>
                  <Teams_card v={tem} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
