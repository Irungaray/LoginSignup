// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import { Button } from '@mui/material'

const CustomButton = (props) => {
    return (
            <Button
                variant={props.variant || "outlined"}
                disabled={props.disabled}
                onClick={props.onClick}
                sx={{m: 2, ...props.sx}}
            >
                {props.text}
            </Button>
    )
}

CustomButton.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    sx: PropTypes.object,
    text: PropTypes.string
}

export { CustomButton }
