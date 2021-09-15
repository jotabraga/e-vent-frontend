import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  text-decoration: none;
  color: #222;
  margin-bottom: 15px;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
