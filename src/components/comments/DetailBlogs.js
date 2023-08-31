import { useParams } from "react-router-dom";
import "./Blog.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../customize/Fetch";


const DetailBlog = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const { data: dataBlogDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const handleBackData = () => {
        navigate("/blog");
    }


    return (
        <div className="detail-container">
            {dataBlogDetail &&
                <span >
                    <h1 className="title"> {dataBlogDetail.title}</h1>
                    <small className="id">-- Blog Id: {id}---
                        {isLoading === true ? "loading data..." : <p className="content">{dataBlogDetail.body}</p>}
                    </small>
                </span>

            }
            <button onClick={handleBackData}>Back</button>
        </div>
    )
}

export default DetailBlog;