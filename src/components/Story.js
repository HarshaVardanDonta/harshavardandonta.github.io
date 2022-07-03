export default function Story(props){
    return(
    <div className='StoryIcon'>
        <img src={props.dp} alt='dp' className='StoryAvatar'/>
        {props.name}
    </div>
    );
}