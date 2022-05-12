import './featuredInfo.css';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,410</span>
                    <span className="featuredMoneyRate negative">-11.4 <BsArrowDown className='featuredIcon negative' /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,410</span>
                    <span className="featuredMoneyRate">-1.4 <BsArrowDown className='featuredIcon negative' /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">+2.4 <BsArrowUp className='featuredIcon' /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    )
}
