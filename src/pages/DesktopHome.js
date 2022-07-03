import '../DesktopHome.css'

import Post from '../components/Post';
import drake from '../assets/drake.jpg'
import drakePost from '../assets/drakePost.jpg'
import inna from '../assets/inna.jpg'
import innaPost from '../assets/innaPost.jpg'
import jlo from '../assets/jlo.jpg'
import Story from '../components/Story'
import UserBanner from '../components/UserBanner'
import SuggestUserBanner from '../components/SuggestUserBanner'



export default function DesktopHome(){
    return (
        <div className="BodyOfPage">
        <div className="DummySpace"/>
            
            <div className="PostScrollDesktop">
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
                <Post dp={drake} post={drakePost} username='drake' likes='1,568 likes' comments='View all 500 comments'/>
                <Post dp={inna} post={innaPost} username='inna' likes='1,568 likes' comments='View all 500 comments'/>
                <Post dp={jlo} post={drakePost} username='jlo' likes='1,568 likes' comments='View all 500 comments'/>
                <Post dp={inna} post={innaPost} username='inna' likes='1,568 likes' comments='View all 500 comments'/>
            </div>
            
            <div className='RightStaticDesktop'>
            <UserBanner avatar={drake} realname='Harsha Vardan' username='.harsha._.vardan' ending='Switch'/>
            <h3>Suggestions For You</h3>
            <SuggestUserBanner avatar={jlo} username='jlo' desctiption='followed by users' ending='Follow'/>
            <SuggestUserBanner avatar={inna} username='inna' desctiption='followed by users' ending='Follow'/>
            <SuggestUserBanner avatar={innaPost} username='Random' desctiption='followed by users' ending='Follow'/>
            <br/>
            About Help Press API Jobs Privacy Terms Locations Language<br/>
            Language<br/>
            <br/>
            © 2022 INSTAGRAM FROM META

            </div>
            <div className="DummySpace"/>
            
        </div>
    );
}

