import "./category.css";

export default function NewCategory() {

    return (
        <div className="newCategory">
            {window.location.href.includes("newUser") && (<h1 className="newCategoryTitle">Category</h1>)}
            <form className="newCategoryForm">
                <div className="newCategoryItem">
                    <label htmlFor="category_name">Category name</label>
                    <input type="text" placeholder="category" id="category_name" />
                </div>
                <div className="newCategoryItem">
                    <label htmlFor="active">Active</label>
                    <select className="newCategorySelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <button className="newCategoryButton">Create</button>
                </div>
            </form>
        </div>
    );
}