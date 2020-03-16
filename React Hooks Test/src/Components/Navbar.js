import React from 'react'
import {Link} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
    badge: {
      right: -1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 2px',
    },
  }))(Badge);

export default function Navbar({repositories}) {
    return (
        
            <nav className="navbar">
                <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Repositories">Repositories 
                        </Link>
                        <StyledBadge badgeContent={repositories.length} color="secondary">
                        </StyledBadge>
                    </li>
                </ul>
                </div>
            </nav>
        
    )
}
