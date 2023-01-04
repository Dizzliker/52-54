import { connect } from "react-redux";
import Icon from "../icon";

const ChatHeader = ({avatar, nickname}) => {
    return (
        <div className="chat__header">
            <img src={avatar} className="avatar w55 h55 online" alt="Avatar" />

            <div className="chat__name-container">
                <span className="chat__user-name">
                    {nickname}
                </span>
            </div>

            <div className="chat__actions">
                <Icon src="/images/search.svg" alt="search"/>
                <Icon src="/images/repost.svg" alt="repost"/>
                <Icon src="/images/trash.svg"  alt="delete"/>
            </div>


            <div className="chat__btn-more-options w55 h55">
                <div className="chat__more-option-circle"></div>
                <div className="chat__more-option-circle"></div>
                <div className="chat__more-option-circle"></div>
            </div>
        </div>
    );
};

const mapStateToProps = ({authUser: {avatar, nickname}}) => {
    return { avatar, nickname };
}

export default connect(mapStateToProps, null)(ChatHeader);