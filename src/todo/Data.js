import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


const Data = () => {
    const [data, setData] = useState({
        firstname: null,
        lastname: null,
        email: null,
        department: null,
        phone: null
    });
    let url = 'https://crudcrud.com/api/e2948268f4fc471bb82e85b18966b7cf/users/';
    const param = useParams();
    useEffect(() => {
        if (param != null) {
            if (param["id"]) {
                axios.get(url + `${param["id"]}`).then(response => {
                    console.log("response - ", response.data);
                    setData(response.data);
                }
                ).catch(err => console.log(err));
            }
        }
    }, []);
    const navigate = useNavigate();
    let isDisable = param["mode"] === "view" ? true : false;
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (param["mode"] === "edit") {
            axios.put(url+param["id"], data)
                .then(response => {
                    return { status: true }
                })
                .catch(err => {
                    return {
                        status: false
                    }
                });
        } else {
            axios.post(url, data)
                .then(response => {
                    return {
                        status: true
                    }
                })
                .catch(err => {
                    return {
                        status: false
                    }
                });
        }
        navigate('/');
    }
    return (
        <div>
            <div>
                <label htmlFor="firstname">FirstName</label>
                <input type="text" id="firstname" name="firstname" className="firstname" onChange={onChangeHandler} value={data.firstname} disabled={isDisable} />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" name="lastname" className="lastname" onChange={onChangeHandler} value={data.lastname} disabled={isDisable} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" className="email" onChange={onChangeHandler} value={data.email} disabled={isDisable} />
            </div>
            <div>
                <label htmlFor="department">Department</label>
                <input type="text" id="department" name="department" className="department" onChange={onChangeHandler} value={data.department} disabled={isDisable} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" className="phone" onChange={onChangeHandler} value={data.phone} disabled={isDisable} />
            </div>
            <button onClick={onSubmit}>
                {
                    param === null ? 'Submit' : param["mode"] === 'view' ? 'Back' : 'Save'
                }
            </button>
        </div>
    )
}

export default Data;