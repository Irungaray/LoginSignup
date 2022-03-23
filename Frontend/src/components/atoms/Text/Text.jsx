// Utils & conf
import PropTypes from "prop-types"

// Ext comps
import { Typography } from "@mui/material"

const Text = (props) => {
    return (
        <Typography
            variant={props.v}
            color={props.color}
            sx={{ ml: 2, ...props.sx }}
        >
            {props.children || props.text}
        </Typography>
    )
}

Text.propTypes = {
    v: PropTypes.string,
    color: PropTypes.string,
    sx: PropTypes.object,
    text: PropTypes.string,
    children: PropTypes.string,
}

export { Text }
