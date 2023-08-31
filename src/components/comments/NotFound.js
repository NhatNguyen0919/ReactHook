import { useNavigate } from "react-router-dom";



const NotFound = () => {
    let navigate = useNavigate();
    const goBackBtn = () => {
        navigate("/");
    }
    return (
        <div>
            <h3>This Page Isn't Avalable</h3>
            <h4>This error usually occurs when the owner only
                shares the content with a small group,
                changes the viewer or deletes the content.</h4>
            <button className="btn btn-primary" onClick={goBackBtn}>Go back ?</button>
        </div>
    )
}

export default NotFound;