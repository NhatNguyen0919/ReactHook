import "./Blog.scss";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";


const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleSubmitBtn = async (e) => {
        e.preventDefault()
        if (!title || !content) {
            alert('please enter data');
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog)
            console.log('>>>check new blog', newBlog);
        }

        console.log(">>> check data res", res);
    }

    return (
        <div>
            <form onSubmit={handleSubmitBtn} className="add-new-form">
                <h3 className="text-add-new">---Add new blog---</h3>
                <div className="title-wrap">
                    <label htmlFor="">Title: </label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="content-wrap">
                    <label htmlFor="">Content: </label>
                    <input type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)} />
                </div>
                <Button className="my-3" variant="secondary" type="submit" >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default AddNewBlog;