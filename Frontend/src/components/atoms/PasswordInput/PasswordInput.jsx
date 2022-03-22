// Ext comps
import { Typography } from '@mui/material'

// Int comps
import { useStyles } from './styles'

const PasswordInput = () => {

    const { text } = useStyles()

    return (

        <Typography variant="h1" sx={text}>Password</Typography>

    )
}

export { PasswordInput }
