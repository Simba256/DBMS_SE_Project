// import { ethers } from 'ethers'
// import { useEffect } from 'react'
// import { Link } from 'react'
import "./Booking.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import plane from '../../images/plane.gif'
export default function Booking() {

    return(
        // HTML comes here
        <div>   
            <Header />
            <div>This is Booking Page</div>
            <div class="booking-form">
                <h2>Book your Flight</h2>
                <form action="#" method="get">
                    <div class="form-group">
                        <label for="from">Departure</label>
                        <input type="text" id="from" name="from" placeholder="Enter departure city" required></input>
                    </div>
                    <div class="form-group">
                        <label for="to">Arrival</label>
                        <input type="text" id="to" name="to" placeholder="Enter arrival city" required></input>
                    </div>
                    <div class="form-group">
                        <label for="date">Date:</label>
                        <input type="date" id="date" name="date" required></input>
                    </div>
                    <div class="form-group">
                        <label for="adults">Adults:</label>
                        <select id="adults" name="adults">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="children">Children:</label>
                        <select id="children" name="children">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="class">Travel Class:</label>
                        <select id="class" name="class">
                            <option value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                        </select>
                    </div>
                    <button type="submit" id="search-button">Search Flights</button>
                </form>
            </div>
          <div class="plane-container">
            <img src={plane} class="plane-gif" id="plane"></img>
            </div>

            <script src="booking.js"></script>
            <script src="https://skyscanner.github.io/slate/skyscanner-live-api/versions/latest/swagger-ui.js"></script>
            <Footer />
        </div>
    )
}