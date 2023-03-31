// import { ethers } from 'ethers'
// import { useEffect } from 'react'
// import { Link } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
export default function Login({setIsLoggedIn}) {

    // const navigate = useNavigate()
    // let handleNavigation = () => {
    //     setIsLoggedIn(true)
    //     navigate('/home', {
    //         state : { isLoggedIn : true }
    //     })
    // }


    // go to booking page
    const navigate = useNavigate()
    let handleNavigation = () => {
        navigate('/booking', {
            state : { isLoggedIn : true }
        })
    }

 




    return(
        // HTML comes here
        <div>   
            <Header />
            <div class="banner">
                <div class="box">
                    <div class="container">
                        <div class="top-header">
                            <span>Already have an account?</span>
                            <header> login </header>
                        </div>
                        <div class="dropdown">
                            <select name="types" id="user-type">
                                <option selected disabled>USER TYPE</option>
                                <option value="Employee">Employee</option>
                                <option value="Customer">Customer</option>
                            </select>
                            <i class="fa fa-solid fa fa-users" id="users"></i>
                            <i class=" fa fa-solid  fa fa-caret-down" id="icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="text" class="input" placeholder="IDENTIFICATION" required></input>
                            <i class="fa fa-light fa fa-user"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="input" placeholder="PASSWORD" required></input>
                            <i class="fa fa-light  fa fa-lock"></i>
                        </div>
                        <div class="input-field">
                            <input onClick={()=>handleNavigation()} type="submit" class="submit" value="Sign In" required></input>
                        </div>
                        <div class="bottom">
                            <div class="left">
                                <input type="checkbox" id="check"></input>
                                <label for="check">Remember Me</label>
                            </div>
                            <div class="right">
                                <label><a href="#" target="_blank">Forgot Password?</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}