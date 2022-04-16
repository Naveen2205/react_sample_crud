import TableGrid from "./TableGrid";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react")

const Page = ()=>{
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get("https://crudcrud.com/api/e2948268f4fc471bb82e85b18966b7cf/users/").then(
            (response)=> setList(response.data)
        ).catch(err=> console.log(err));
    }, [])
    return (
        <div>
            {
                list.length > 0 ? <TableGrid data = {list}/> : <div>Datas not found</div>
            }
        </div>
    )
}

export default Page;