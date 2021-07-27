import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 40px;
`;

export const ButtonStyle = styled(IconButton)`
  position: fixed !important;
  z-index: 2 !important;
  right: 10px !important;
  top: 10px !important;
`;
