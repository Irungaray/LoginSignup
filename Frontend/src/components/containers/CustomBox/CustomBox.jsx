// Utils & conf
import PropTypes from 'prop-types'

// Ext comps
import { Box } from "@mui/material"

// Int comps
import { useSx } from "./styles"

const CustomBox = (props) => {
    const { mainBox } = useSx()

    return (
        <Box sx={mainBox} component="form">
            {props.children}
        </Box>
    )
}

CustomBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export { CustomBox }
