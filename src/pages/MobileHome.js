import InstaLogo from '../assets/logo.png'
import {GrHomeRounded} from 'react-icons/gr'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {AiOutlineCompass} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import Post from '../components/Post';
import drake from '../assets/drake.jpg'
import drakePost from '../assets/drakePost.jpg'
import inna from '../assets/inna.jpg'
import innaPost from '../assets/innaPost.jpg'
import jlo from '../assets/jlo.jpg'
import Story from '../components/Story'
import '../DesktopHome.css'


export default function MobileHome(){
    
    return (
        <div className="BodyOfMobile">
            <div className="Header"> 
                <img src={InstaLogo} alt="loogo" className="LogoContainer"/>
            </div>   
            

            <div className="PostScrollMobile">
            <div className='Container'>
                <div className='StoryContainerForDesktop'>
                    <Story dp={drake} name='drake'/>
                    <Story dp={inna} name='inna'/>
                    <Story dp={jlo} name='jlo'/>
                    <Story dp={drake} name='drake'/>
                    <Story dp={inna} name='inna'/>
                    <Story dp={jlo} name='jlo'/>
                </div>
            </div>
            
            <Post dp={drake} post={drakePost} username='drake' likes='1,568 likes' comments='View all 500 comments'/>
                <Post dp={inna} post={innaPost} username='inna' likes='1,568 likes' comments='View all 500 comments'/>
                <Post dp={jlo} post={drakePost} username='jlo' likes='1,568 likes' comments='View all 500 comments'/>               
            </div>
            <div className='MobileFooter'>
                <GrHomeRounded className="HeaderIcon"/>
                <AiOutlineCompass className="HeaderIcon"/>
                <AiOutlinePlusSquare className="HeaderIcon"/>
                <FiHeart className="HeaderIcon"/>
                <CgProfile className="HeaderIcon"/>
            </div>  
        </div>
    );
}