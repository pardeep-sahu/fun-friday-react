import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { BsTrash } from "react-icons/bs";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from "../newUser/NewUser";
import AddCategory from "../categories/AddCategory";

export default function UserList() {
    const [show, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [data, setData] = useState(userRows);

    const showModalButtons = () => {
        setShowForm(false); setShowCategoryForm(false);
    };
    const hideUserForm = () => {
        setShowForm(false); setShowCategoryForm(false);
    };
    const showAddUserForm = () => {
        setShowForm(true); setShowCategoryForm(false);
    };
    const showCategoryFormComponent = () => {
        setShowForm(false); setShowCategoryForm(true);
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <BsTrash
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <div className="userListContainer">
                <h1 className="userTitle">Users List</h1>
                {/* <Link to="/newUser"> */}
                <button className="userAddButton" variant="primary" onClick={handleShow}>Create User</button>
                {/* </Link> */}
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                style={{ 'marginTop': '20px', 'boxShadow': '0px 0px 15px -10px rgba(0, 0, 0, 0.75)' }} />
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!(showForm || showCategoryForm) && (<center>
                        <Button className="functionalButton" onClick={showAddUserForm}>
                            Add new user
                        </Button>
                        <Button className="functionalButton" onClick={showCategoryFormComponent}>
                            Add Category
                        </Button>
                    </center>)}

                    {showForm ? <NewUser /> : null}
                    {showCategoryForm ? <AddCategory /> : null}

                </Modal.Body>
                <Modal.Footer>
                    {(showForm || showCategoryForm) && <Button className="backButton" onClick={() => { showModalButtons(); hideUserForm() }}>Back</Button>}
                    <Button variant="secondary" onClick={() => { handleClose(); showModalButtons(); }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}