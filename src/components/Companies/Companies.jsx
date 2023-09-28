import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Table } from "reactstrap"

export default function Companies() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    axios.get('https://mini-crud-api.vercel.app/api/v1/companies')
      .then((res) => {
        setCompanies(res.data.companies)
      })
  })

  return (
    <>
      <h1>Empresas</h1>

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
                  <Button>Eliminar</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}