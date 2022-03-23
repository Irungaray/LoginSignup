// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import { Link as MuiLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const Link = (props) => {
    return (
        <MuiLink
            component={RouterLink}
            to={props.to}
            onClick={props.onClick}
            variant={props.v}
            underline={props.underline || "hover"}
            color={props.color || "text.primary"}
            sx={{ ml: 2, cursor: "pointer", ...props.sx }}
        >
            {props.children || props.text}
        </MuiLink>
    )
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    v: PropTypes.string,
    underline: PropTypes.string,
    color: PropTypes.string,
    sx: PropTypes.object,
    text: PropTypes.string,
    children: PropTypes.string
}

export { Link }
