export const useSx = () => {
    return {
        mainBox: {
            backgroundColor: (theme) => theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            p: 2,
            width: 600,
            borderRadius: 1.5
        },
        // Example
        test: {
            color: (theme) => theme.palette.primary.main,
            color: "primary.main",
            backgroundColor: "secondary.main",
            my: 5,
        },
    }
}
