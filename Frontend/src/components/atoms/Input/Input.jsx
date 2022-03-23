// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import {
    OutlinedInput,
    InputLabel,
    FormControl,
} from "@mui/material"

const Input = (props) => {
    return (
        <FormControl variant="outlined" sx={{ m: 2, ...props.sx }}>
            <InputLabel htmlFor={`${props.name}-id`} color="primary">
                {props.label}
            </InputLabel>

            <OutlinedInput
                sx={props.inputSx}
                id={`${props.name}-id`}
                type={props.type || "text"}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                autoFocus={props.autoFocus}
                name={props.name}
            />
        </FormControl>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    sx: PropTypes.object,
    inputSx: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    autoFocus: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export { Input }
