// Ext comps
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

// Int comps
import { CustomStack } from '../../containers'
import { Text } from '../../atoms'

import { useContext } from 'preact/hooks';
import { SessionContext } from "../../../context/SessionContext"

const Header = () => {
    const { isLogged, setIsLogged } = useContext(SessionContext);

    return (
        <CustomStack>
            <Text v="h6" text="L&S Template" />

            {isLogged
                ? <IconButton aria-label="Logout">
                    <LogoutIcon sx={{ mr: 2, color: "text.primary" }} />
                </IconButton>
                : null
            }
        </CustomStack>
    )
}

export { Header }
