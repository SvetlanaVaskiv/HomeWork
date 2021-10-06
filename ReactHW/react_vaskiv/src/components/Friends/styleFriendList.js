import styled from "styled-components";


export const StatusStyle = styled.span`
width: 50px; 
height: 50px;
margin: 0 15px;
border-radius: 50%;
background-color: ${({ statusStyleOnline }) => statusStyleOnline.main === "red" ? "red" : "green"};
`;
export const ListItem = styled.li`
list-style-type: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
margin: 20px;
`