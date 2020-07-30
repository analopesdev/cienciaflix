import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled(Link)`
border-radius: none;
color: var(--white);
border: 2px solid var(--primary);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: 500;
font-size: 16px;
outline: none;
text-decoration: none;
display: inline-block;
&:hover,
&:focus {

background: #a3652f;
border: 2px solid #fff;
}
`;

export default Button