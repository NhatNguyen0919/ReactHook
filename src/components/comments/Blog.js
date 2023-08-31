import useFetch from "../../customize/Fetch";
import "./Blog.scss";
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddNewBlog from "./AddNewBlog";



const Blog = () => {
    const [show, setShow] = useState(false);
    const [newDataBlog, setNewDataBlog] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts');

    useEffect(() => {
        if (dataBlog && dataBlog.length) {
            let newDataSimple = dataBlog.slice(0, 12)
            setNewDataBlog(newDataSimple)
        }
    }, [dataBlog])



    const handleAddNew = (blog) => {
        let data = newDataBlog;
        data.unshift(blog)
        setShow(false);
        setNewDataBlog(data)
    }

    const deletePost = (id) => {
        let data = newDataBlog;
        data = data.filter((item, index) => {
            return item.id !== id;
        })
        setNewDataBlog(data)
    }

    return (
        <>
            <Button className="my-3" variant="secondary" onClick={handleShow}>
                + Add New Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>
            <div className="blog-containers">
                {newDataBlog && newDataBlog.length > 0 && newDataBlog.map((item, index) => {
                    return (
                        <div className="card" key={index} >
                            <div className="card-body" >
                                <div className="header" style={{ float: "right" }}>
                                    <small style={{ cursor: "pointer" }} onClick={() => { deletePost(item.id) }}>X</small>
                                </div>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body}</p>
                                <button>
                                    <Link className="link-data" to={`/blog/${item.id}`}>
                                        View details
                                    </Link>
                                </button>


                            </div>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div className="is-loading">Loading data ...</div>
                }
            </div>
        </>
    )
}

export default Blog;


