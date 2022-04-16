import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TableGrid = (props)=>{
    let data = props.data;
    let url = "https://crudcrud.com/api/e2948268f4fc471bb82e85b18966b7cf/users/";
    const navigate = useNavigate();
    const onDelete = (e, id)=>{
        e.preventDefault();
        axios.delete(url+id)
            .then(response => navigate('/'))
            .catch(err=> console.log(err))
    }
    return (
        <div>
            <Link to="/data/add">Add Data</Link>
            <table>
                <thead>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Operation</th>
                </thead>
                <tbody>
                    {
                        data.map((d)=>{
                            return (
                                <tr key={d.id}>
                                    <td>{d.firstname}</td>
                                    <td>{d.lastname}</td>
                                    <td>{d.email}</td>
                                    <td>
                                        <Link to={`/data/view/${d._id}`}>View</Link>
                                        <Link to={`/data/edit/${d._id}`}>Edit</Link>
                                        <button onClick={(e)=> onDelete(e, d._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableGrid;