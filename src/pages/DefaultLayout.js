import '../DesktopHome.css'
import {GrHomeRounded} from 'react-icons/gr'
import {BiPaperPlane} from 'react-icons/bi'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {AiOutlineCompass} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {BsSearch} from 'react-icons/bs'
import TextField from "@material-ui/core/TextField";
import InstaLogo from '../assets/logo.png'
import { Outlet, Link } from "react-router-dom";

export default function DefaultLayout(){
    return(
        <div>
            <div className="Header">
                <div className="DummySpace"/>
                <div className="DummySpace"/>
                <Link to='/'>
                <img src={InstaLogo} alt="logo" className="LogoContainer"/>
                </Link>
                <div className="SearchContainer">
                    <BsSearch className='Icon'/>
                    <TextField className="TextField"/>
                </div>
                <div className="HeaderIconsContainer">
                    <Link to='/'>
                        <GrHomeRounded className="HeaderIcon"/>
                    </Link>
                    <Link to='/direct'>
                        <BiPaperPlane className="HeaderIcon"/>
                    </Link>
                    <AiOutlinePlusSquare className="HeaderIcon"/>
                    <AiOutlineCompass className="HeaderIcon"/>
                    <FiHeart className="HeaderIcon"/>
                    <Link to="/profile">
                        <CgProfile className="HeaderIcon"/>
                    </Link>
                </div>
                <div className="DummySpace"/>
                <div className="DummySpace"/>
            </div>
            <Outlet/>
        </div>
        
    );
}