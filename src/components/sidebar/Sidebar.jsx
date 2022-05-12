import "./sidebar.css";
import { BsHouseDoor, BsGraphUp, BsPeople, BsShopWindow, BsCurrencyExchange, BsReception3, BsMailbox, BsChatLeft, BsBriefcase, BsSticky, BsStickies } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <BsHouseDoor className="sidebarIcon" /> Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <BsGraphUp className="sidebarIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BsPeople className="sidebarIcon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <BsPeople className="sidebarIcon" /> Users
                            </li>
                        </Link>
                        <Link to="/posts" className="link">
                            <li className="sidebarListItem">
                                <BsSticky className="sidebarIcon" /> Posts
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <BsShopWindow className="sidebarIcon" /> Products
                        </li>
                        <li className="sidebarListItem">
                            <BsCurrencyExchange className="sidebarIcon" /> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BsReception3 className="sidebarIcon" /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BsMailbox className="sidebarIcon" /> Mail
                        </li>
                        <li className="sidebarListItem">
                            <BsStickies className="sidebarIcon" /> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <BsChatLeft className="sidebarIcon" /> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BsBriefcase className="sidebarIcon" /> Manage
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}