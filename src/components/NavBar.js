import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to="/myFeed">My Feed    </Link>
            <Link to="/mySaved">   My Saved Articles</Link>
        </div>
    )
}