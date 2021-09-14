import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

import AuthLayout from "../../../layouts/Auth";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Form/Button";
import { Row, Title, Label } from "../../../components/Auth";
import Link from "../../../components/Link";

import EventInfoContext from "../../../contexts/EventInfoContext";

import useApi from "../../../hooks/useApi";

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetToken } = useParams();
  const history = useHistory();
  const api = useApi();
  
  const { eventInfo } = useContext(EventInfoContext);

  function submit(event) {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
    } else {
      // api.password.updatePassword(password, resetToken).then(response => {
      //   toast("Sua senha foi alterada com sucesso!");
      //   history.push("/sign-in");
      // }).catch(error => {
      //   if (error.response) {
      //     for (const detail of error.response.data.details) {
      //       toast(detail);
      //     }
      //   } else {
      //     toast("Não foi possível conectar ao servidor!");
      //   }
      // }).then(() => {
      //   setLoading(false);
      // });
    }
  }

  return (
    <AuthLayout background={eventInfo.backgroundImage}>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      <Row>
        <Label>Troque sua senha</Label>
        <form onSubmit={submit}>
          <Input label="Nova senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua nova senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loading}>Trocar senha</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Voltar para o Login</Link>
      </Row>
    </AuthLayout>
  );
}
