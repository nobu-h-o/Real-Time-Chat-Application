import "./userInfo.css"

const Userinfo = () => {
    return (
        <div className='userInfo'>
            <div className="user">
                <img src="/public/avatar.png" alt=""/>
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <img src="/public/more.png" alt=""/>
                <img src="/public/video.png" alt=""/>
                <img src="/public/edit.png" alt=""/>
            </div>
        </div>
    )
}

export default Userinfo;