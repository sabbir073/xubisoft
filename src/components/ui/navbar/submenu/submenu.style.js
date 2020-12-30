import styled from 'styled-components';

export const SubmenuWrap = styled.ul `
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1c1c1c;
    visibility: hidden;
    opacity: 0;
    min-width: 260px;
    padding: 0 0;
    z-index: 9;
    pointer-events: none;

    li.active{
        background-color:#086AD8;
    }
`;