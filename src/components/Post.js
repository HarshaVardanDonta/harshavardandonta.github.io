import '../DesktopHome.css'
import {FiHeart} from 'react-icons/fi'
import {BiPaperPlane} from 'react-icons/bi'
import {GoComment} from 'react-icons/go'
import PropTypes from 'prop-types'

export default function Post(props){
    return(
        <div className='PostContainerForDesktop'>
            <div className='PostContainerForDesktopHeader'>
                <img src={props.dp} alt='dp' className='PostContainerForDesktopHeaderImage'/>
                <p>{props.username}</p>
            </div>
            <img src={props.post} alt='dp' className='ImageContainerForPost'/>
            <div>
                <FiHeart className='PostContainerForDesktopFooterIcon'/>
                <BiPaperPlane className='PostContainerForDesktopFooterIcon'/>
                <GoComment className='PostContainerForDesktopFooterIcon'/>
            </div>
            <div>
            {props.likes}
            </div>
            <div>
            {props.comments}
            </div>
            
        </div>
    );
}
Post.propTypes = {
    dp: PropTypes.string.isRequired,
}