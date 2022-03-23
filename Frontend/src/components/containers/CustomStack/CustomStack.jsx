// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import { Stack } from "@mui/material";

const CustomStack = (props) => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            {props.children}
        </Stack>
    )
};

CustomStack.propTypes = {
    children: PropTypes.element
}

export { CustomStack }
