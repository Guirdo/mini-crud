import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"

export default function Companies() {
  const navigate = useNavigate()
  const [companies, setCompanies] = useState([])
  const [modal, setModal] = useState(false)
  const [aboutToDeleteCompany, setAboutToDeleteCompany] = useState({})

  useEffect(() => {
    axios.get('https://mini-crud-api.vercel.app/api/v1/companies')
      .then((res) => {
        setCompanies(res.data.companies)
      })
  })

  const openModal = (company) => {
    setModal(true)
    setAboutToDeleteCompany(company)
  }

  const handleDeleteCompany = (id) => {
    axios.delete(`https://mini-crud-api.vercel.app/api/v1/companies/${id}`)
      .then(res => {
        navigate('/companies')
      })
    setModal(false)
  }

  return (
    <>
      <h1>Empresas</h1>

      <div>
        <Link
          className="btn btn-success"
          to="/companies/create"
        >
          Añadir empresa
        </Link>
      </div>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {
            companies && companies.map(company => (
              <tr key={company._id}>
                <th>{company._id}</th>
                <td>{company.name}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/companies/edit/${company._id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(company)}>Eliminar</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {/* Modal para eliminar a una empresa */}

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Modal title</ModalHeader>
        <ModalBody>
          ¿Estas seguro de eliminar la empresa <span className="fw-bold"> {aboutToDeleteCompany.name}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteCompany(aboutToDeleteCompany._id)}>
            Eliminar
          </Button>{' '}
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}