import styled from "styled-components";

export const LayoutWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  min-height: 160px;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1240px;
	border: solid 2px blue;
    border-radius: 10px;
  background-color: ${(props) =>
		props.theme === "light" ? "#fff" : "#cbcbcb"};
`;