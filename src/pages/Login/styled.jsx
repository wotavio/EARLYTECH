import styled from 'styled-components';

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// body {
//     font-family: 'Open Sans', sans-serif;
// }

export const containerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #5158c7; 
`;

export const Content = styled.div`
    background-color: #fff;
    border-radius: 15px;
    width: 960px;
    height: 50%;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background-color: #454ef3;
        width: 40%;
        height: 100%;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        
        left: 0;
}
`

export const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;

`
export const TitlePrimary = styled.h1`
    color: #fff;
`
export const titleSecond = styled.h1`
     color: #454ef3;
`
export const description = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 30px;
`
export const descriptionPrimary = styled.p`
    color: #fff;
`
export const descriptionSecond = styled.p`
    color: #262727;
`
export const btn = styled.button`
    border-radius: 15px;
    text-transform: uppercase;
    color: #fff;
    font-size: 10px;
    padding: 10px 50px;
    cursor: pointer;
    font-weight: bold;
    width: 150px;
    align-self: center;
    border: none;
    margin-top: 1rem;
`
export const btnPrimary = styled.button`
    background-color: transparent;
    border: 1px solid #fff;
    transition: background-color .5s;
        
    &:hover {
    background-color: #fff;
    color: #454ef3;
    }
`
export const btnSecond = styled.button`
    background-color: #454ef3;
    border: 1px solid #454ef3;
    transition: background-color .5s;

    &:hover {
    background-color: #fff;
    border: 1px solid #454ef3;
    color: #454ef3;
}
`

export const firstContent = styled.div`
    display: flex;
    z-index: 11;
`

export const firstColumn = styled.div`
    text-align: center;
    width: 40%;
    z-index: 10;
`
export const secondColumn = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 11;
`
export const social-media = styled.div`
    margin: 1rem 0;
`
.link-social-media:not(:first-child){
    margin-left: 10px;
}
.link-social-media .item-social-media {
    transition: background-color .5s;
}
.link-social-media:hover .item-social-media{
    background-color: #454ef3;
    color: #fff;
    border-color: #454ef3;
}
.list-social-media {
    display: flex;
    list-style-type: none;
}
.item-social-media {
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #262727;
}
export const form = styled.form`
    display: flex;
    flex-direction: column;
    width: 55%;
`
.form input {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
}
input:-webkit-autofill 
{    
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}
.label-input {
    background-color: #ecf0f1;
    display: flex;
    align-items: center;
    margin: 8px;
}
.icon-modify {
    color: #262727;
    padding: 0 5px;
}




export const secondContent = styled.div`
    position: absolute;
    display: flex;
`
.second-content .first-column {
    order: 2;
    z-index: -1;
}
.second-content .second-column {
    order: 1;
 
    z-index: -1;
}
.password {
    color: #34495e;
    font-size: 14px;
    margin: 15px 0;
    text-align: center;
}
.password::first-letter {
    text-transform: capitalize;
}



.sign-in-js .first-content .first-column {
    z-index: -1;
}

.sign-in-js .second-content .second-column {
    z-index: 11;
}
.sign-in-js .second-content .first-column {
    z-index: 13;
}

.sign-in-js .content::before {
    left: 60%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    animation: slidein 1.3s; 

    z-index: 12;
}

.sign-up-js .content::before {
    animation: slideout 1.3s; 

    z-index: 12;
}

.sign-up-js .second-content .first-column,
.sign-up-js .second-content .second-column {
    z-index: -1;
}

.sign-up-js .first-content .second-column {
    z-index: 11;
}

.sign-up-js .first-content .first-column {
    z-index: 13;    
}


/* DESLOCAMENTO CONTEÚDO ATRÁS DO CONTENT:BEFORE*/
.sign-in-js .first-content .second-column {

    z-index: -1;
    position: relative;
    animation: deslocamentoEsq 1.3s; 
}

.sign-up-js .second-content .second-column {
    position: relative;
    z-index: -1;
    animation: deslocamentoDir 1.3s; 
}




/*ANIMAÇÃOO CSS PARA O CONTEÚDO*/

@keyframes deslocamentoEsq {

    from {
        left: 0;
        opacity: 1;
        z-index: 12;
    }

    25% {
        left: -80px;
        opacity: .5;
       
    }

    50% {
        left: -100px;
        opacity: .2;
        
    }

    to {
        left: -110px;
        opacity: 0;
        z-index: -1;
    }
}


@keyframes deslocamentoDir {

    from {
        left: 0;
        z-index: 12;
    }

    25% {
        left: 80px;
       
    }

    50% {
        left: 100px;
        
    }

    to {
        left: 110px;
        z-index: -1;
    }
}


/*ANIMAÇÃO CSS*/

@keyframes slidein {

    from {
        left: 0;
        width: 40%;
    }

    25% {
        left: 5%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 45%;
        width: 50%;
    }

    to {
        left: 60%;
        width: 40%;
    }
}

@keyframes slideout {

    from {
        left: 60%;
        width: 40%;
    }

    25% {
        left: 45%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 5%;
        width: 50%;
    }

    to {
        left: 0;
        width: 40%;
    }
}

/*VERSÃO MOBILE*/
@media screen and (max-width: 1040px) {
    .content {
        width: 100%;
        height: 100%;
    }

    .content::before {
        width: 100%;
        height: 40%;
        top: 0;
        border-radius: 0;
    }
    .first-content, .second-content {
        flex-direction: column;
        justify-content: space-around;
    }

    .first-column, .second-column {
        width: 100%;
    }
    
    .sign-in-js .content::before {
        top: 60%;
        left: 0;
        border-radius: 0;

    }

    .form {
        width: 90%;
    }
    
   

    @keyframes deslocamentoEsq {

        from {
            top: 0;
            opacity: 1;
            z-index: 12;
        }
        25% {
            top: -80px;
            opacity: .5;
            
        }
        50% {
            top: -100px;
            opacity: .2;
            
        }
        to {
            top: -110px;
            opacity: 0;
            z-index: -1;
        }
    }
    
    
    @keyframes deslocamentoDir {
        from {
            top: 0;
            z-index: 12;
        }
        25% {
            top: 80px;
            
        }
        50% {
            top: 100px;
            
        }
        to {
            top: 110px;
            z-index: -1;
        }
    }
    
    
    
    @keyframes slidein {
    
        from {
            top: 0;
            height: 40%;
        }
    
        25% {
            top: 5%;
            height: 50%;
        }
    
        50% {
            top: 25%;
            height: 60%;
        }
    
        75% {
            top: 45%;
            height: 50%;
        }
    
        to {
            top: 60%;
            height: 40%;
        }
    }
    
    @keyframes slideout {
        from {
            top: 60%;
            height: 40%;
        }
        25% {
            top: 45%;
            height: 50%;
        }
        50% {
            top: 25%;
            height: 60%;
        }
        75% {
            top: 5%;
            height: 50%;
        }
        to {
            top: 0;
            height: 40%;
        }
    }
}

@media screen and (max-width: 740px) {
    .form {
        width: 50%;
    }
}

@media screen and (max-width: 425px) {
    .form {
        width: 100%;
    }
}