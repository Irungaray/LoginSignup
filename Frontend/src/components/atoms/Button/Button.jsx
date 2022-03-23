// Utils & conf
import PropTypes from "prop-types"

// Ext comps
import { LoadingButton as MuiLoadingButton } from "@mui/lab"


const Button = (props) => {
    return (
        <MuiLoadingButton
            loading={props.loading}
            variant={props.variant || "outlined"}
            disabled={props.disabled}
            onClick={props.onClick}
            sx={{ m: 2, ...props.sx }}
        >
            {props.text}
        </MuiLoadingButton>
    )
}

Button.propTypes = {
    loading: PropTypes.bool,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    sx: PropTypes.object,
    text: PropTypes.string,
}

export { Button }
