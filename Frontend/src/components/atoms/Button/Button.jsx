// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import { Button as MuiButton } from '@mui/material'

const Button = (props) => {
    return (
            <MuiButton
                variant={props.variant || "outlined"}
                disabled={props.disabled}
                onClick={props.onClick}
                sx={{m: 2, ...props.sx}}
            >
                {props.text}
            </MuiButton>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    sx: PropTypes.object,
    text: PropTypes.string
}

export { Button }
