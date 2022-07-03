import '../DesktopHome.css'

export default function SuggestUserBanner(props){
    return (
        <div className='SuggestUserBanner'>
            <div className='FlexRow'>
                <img src={props.avatar} alt='avatar'/>
                <p>{props.username}<br/><>{props.desctiption}</></p>
            </div>
            <div>
                <h4>{props.ending}</h4>
            </div>
        </div>
    );
}