import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import "./post.css";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            paginatedPosts: [],
            perPage: 10,
            page: 0,
            pages: 0
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data,
                    pages: Math.floor(response.data.length / this.state.perPage),
                    paginatedPosts: (_(response.data).slice(0).take(this.state.perPage).value())
                })
            });
    }

    handlePageClick = (event) => {
        let page = event.selected;
        console.log(page)
        this.setState({ page })
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const { posts, paginatedPosts, page, perPage, pages } = this.state
        let items = posts.slice(page * perPage, (page + 1) * perPage);
        console.log(items)
        return (
            <div className="posts">
                <div className="postTitleContainer">
                    <h1 className="postTitle">Posts List</h1>
                    <Link to="/newPost">
                        <button className="postAddButton">Create Post</button>
                    </Link>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedPosts.map((val, key) => {
                                return (
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.userId}</td>
                                        <td>{this.Capitalize(val.title)}</td>
                                        <td>{this.Capitalize(val.body)}</td>
                                        <td>
                                            <Link to={"/posts/" + val.id}>
                                                <button className="userListEdit">Edit</button>
                                            </Link>
                                            <BsTrash className="userListDelete" />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                {/* <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="page-link">1</li> */}
                {/* {
                            pages.map((page) => {
                                <li className={page === page ? "page-item active" : "page-item"}><p className="page-link">{page}</p></li>
                            })
                        } */}
                {/* </ul>
                </nav> */}
                <div className="pagination-txt">Display {this.state.perPage} of {posts.length} relevant
                    posts
                </div>
                <div className="float-end">
                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        pageCount={pages}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div >
        );
    }
}

export default Posts;