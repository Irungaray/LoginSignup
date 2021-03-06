// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import { Typography } from "@mui/material"

const Typhy = (props) => {
    return (
        <Typography variant={props.v} sx={{ ml: 2, ...props.sx }}>
            {props.children || props.text}
        </Typography>
    )
}

Typhy.propTypes = {
    v: PropTypes.string,
    sx: PropTypes.object,
    text: PropTypes.string,
    children: PropTypes.string
}

export { Typhy }
