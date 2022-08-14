import Navbar from "../components/Navbar"
import Maingrid from "../components/Maingrid"
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
    ThemeProvider,
    useTheme
  } from "@material-ui/core";

function Home() {

    const theme = useTheme()

    return (
        <>
        
            <ThemeProvider theme={theme}>
                <SCThemeProvider theme={theme}>
                    
                    <Navbar />
                    
                    <h1>Bradz Page</h1>
                    
                    <p>Best Site On Da Web</p>
                    
                    <Maingrid />

                </SCThemeProvider>
            </ThemeProvider>
        </>
    )
    }

    export default Home