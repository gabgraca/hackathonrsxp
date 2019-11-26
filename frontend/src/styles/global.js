import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root>div {
        height: 100%;
    }
    body {
        background: #E5E5E5;
        -webkit-font-smoothing: antialiased !important;
        font-family: Arial, Helvetica, sans-serif;
    }
`

export default GlobalStyle