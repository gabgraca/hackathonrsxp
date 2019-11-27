import styled from 'styled-components'
import preloader from '../../assets/preloader.gif'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.4);
`;

export const Icon = styled.img.attrs({
    src: preloader,
    alt: 'Preloader Icon'
})`
    width: 60px;
    height: auto;
`