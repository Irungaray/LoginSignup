// Ext modules
import { createContext } from 'preact'
import { useEffect, useState } from "preact/hooks"

// Int modules
import { refreshSession } from '../helpers/requests/auth'

const SessionContext = createContext()

const SessionProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const refreshToken = () => {
        refreshSession()
            .then((res) => {
                if (res.status === 200) setIsLogged(true)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        refreshToken()
    }, [])

    const values = {isLogged, setIsLogged}

    return (
        <SessionContext.Provider value={values}>
            {isLoading ? null : props.children}
        </SessionContext.Provider>
    )
}

export { SessionContext, SessionProvider }
