import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        
    }
    body{
        background-color: rgb(245,247,250);
    }

    a{
        text-decoration: none;
    }

    ul, ol, li{
    list-style: none;
    }

    button{
    cursor: pointer;
    }
    

    :root{

        --clr-background-blue: rgb(245,247,250);    
        --clr-background-white: rgb(255,255,255);    
        --clr-border:rgb(212,222,229);

        --clr-title-dark: rgb(101,101,101);
        --clr-sub-title-dark: rgb(136,136,136);
        --clr-title-blue: rgb(61,117,187);

        --clr-font-blue: rgb(115,170,238);
        --clr-span-input: rgb(210,210,210);

        --clr-input-border:rgb(234,239,241);
        --clr-input-outline: rgb(159,205,241);

        --clr-input-error: rgb(232, 28,28);
    }

    @media (max-width: 320px){
        h1{
            font-size: 1.17rem;
        }
        p{
            font-size: 0.9rem;
        }
    }

    @media (max-width: 630px){
        h1{
            font-size: 1.17rem;
        }
        p{
            font-size: 0.9rem;
        }
    }
`;

export default GlobalStyle;
