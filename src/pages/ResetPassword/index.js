import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import styled from "styled-components";

import RequestResetPassword from "./RequestResetPassword";
import NewPasswordForm from "./NewPasswordForm";

export default function ResetPassword() {
  const match = useRouteMatch();
  return (
    <>
      <Container>
        <Switch>
          <Route path={`${match.path}/`} exact>
            <RequestResetPassword />
          </Route>

          <Route path={`${match.path}/:resetToken`} exact>
            <NewPasswordForm />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
