import { useState, useContext } from "react";
import { toast } from "react-toastify";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";
import { Row, Title, Label, Span } from "../../components/Auth";

import EventInfoContext from "../../contexts/EventInfoContext";
import UserContext from "../../contexts/UserContext";

import useApi from "../../hooks/useApi";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [isReseted, setIsReseted] = useState(false);
  const [loading, setLoading] = useState(false);

  const api = useApi();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);
  
  function submit(event) {
    event.preventDefault();
    setLoading(true);
    api.password.reset(email).then(response => {
      setIsReseted(true);
    }).catch(error => {
      /* eslint-disable-next-line no-console */
      console.error(error);
      if (error.response) {
        toast(error.response.data.message);
      } else {
        toast("Não foi possível conectar ao servidor!");
      }
    }).then(() => {
      setLoading(false);
    });
  } 

  function buildEmailString(email) {
    let string = "";
    const firstHalf = email.split("@")[0];
    const secondHalf = email.split("@")[1];
    string += firstHalf.slice(0, 1).padEnd(firstHalf.length - 1, "*");
    string += "@";
    string += secondHalf;
    return string;
  }

  return (
    <AuthLayout background={eventInfo.backgroundImage}>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      {isReseted && 
        <Row>
          <Span>Um link para troca de senha foi enviado para {buildEmailString(email)}</Span>
          <Link to="/sign-in">
            <Button type="submit" color="primary" fullWidth >Voltar para o Login</Button>
          </Link>
        </Row>
      }
      {!isReseted &&
      <>
        <Row>
          <Label>Para resetar sua senha insira seu email cadastrado</Label>
          <form onSubmit={submit}>
            <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <Button type="submit" color="primary" fullWidth disabled={loading}>Resetar Senha</Button>
          </form>
        </Row>
        <Row>
          <Link to="/sign-in">Já está inscrito? Faça login</Link>
          <Link to="/enroll">Não possui login? Inscreva-se</Link>
        </Row>
      </>
      }
    </AuthLayout>
  );
}
