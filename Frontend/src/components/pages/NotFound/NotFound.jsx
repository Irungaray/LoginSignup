import { Container, Stack } from "@mui/material";
import { Link, Text } from "../../atoms";

const NotFound = () => {
    return (
        <Stack direction="column" alignItems="center" >
            <Text v="h1">Not found</Text>
            <Text v="h1">404</Text>

            <Link v="h4" to="/" color="primary" sx={{ mt: 10 }}>Go Back</Link>
        </Stack>
    )
};

export { NotFound }
