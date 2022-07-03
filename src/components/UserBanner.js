import '../DesktopHome.css'

export default function UserBanner(props){
    return(
        <div className='UserBanner'>
            <div className='FlexRow'>
                <img src={props.avatar} alt='avatar'/>
                    <p>{props.username}<br/>{props.realname}</p>
            </div>
            <div>
                <h3>{props.ending}</h3>
            </div>
        </div>
    );
}
