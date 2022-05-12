import "./newUser.css";

export default function NewUser() {

    return (
        <div className="newUser">
            {window.location.href.includes("newUser") && (<h1 className="newUserTitle">New User</h1>)}
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="john" id="username" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="John Smith" id="full_name" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="john@gmail.com" id="email" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" id="password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="+1 123 456 78" id="phone" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="New York | USA" id="address" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="gender">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <button className="newUserButton">Create</button>
                </div>

            </form>
        </div>
    );
}