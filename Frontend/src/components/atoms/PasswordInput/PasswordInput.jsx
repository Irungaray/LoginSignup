// Utils & conf
import { useState } from "preact/hooks"
import PropTypes from 'prop-types'

// Ext comps
import {
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <FormControl variant="outlined" sx={{ m: 2 }}>
            <InputLabel htmlFor="outlined-adornment-password" color="text">
                {props.label || "Password"}
            </InputLabel>
            <OutlinedInput
                // sx={{ backgroundColor: "text.primary" }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={props.value}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                                setShowPassword((prevState) => !prevState)
                            }
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                        >
                            {showPassword
                                ? <VisibilityOff />
                                : <Visibility />
                            }
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    )
}

PasswordInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export { PasswordInput }
