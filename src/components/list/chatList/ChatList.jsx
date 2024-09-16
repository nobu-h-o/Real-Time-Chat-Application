import "./chatList.css"

const ChatList = () => {
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="/public/search.png" alt="search"/>
                    <input type="text" placeholder="Search" />
                </div>
                <img src="/public/plus.png" alt="plus"/>
            </div>
        </div>
    )
}

export default ChatList;