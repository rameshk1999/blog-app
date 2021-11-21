import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider, useSnackbar } from "notistack";

export const GlobalContext = React.createContext();

export default function GlobalProvider({ children }) {
  const [mode, setMode] = React.useState("dark");
  const [user, setUser] = React.useState("fdsf");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <GlobalContext.Provider value={{ colorMode, user }}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}> {children} </ThemeProvider>{" "}
      </SnackbarProvider>
    </GlobalContext.Provider>
  );
}
