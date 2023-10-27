import { Button, Image, List, ListItem, Nav, NavLink, Wrapper } from "./navbar.styles";
import LogoFipp from "../../assets/images/logo-fipp.png";
import LogoUnoeste from "../../assets/images/logo-unoeste.png";

export const Navbar = () => {
  function onButtonPress() {
    window.open("https://www.unoeste.br/")
  }

  return (
    <Wrapper>
      <Nav>
        <Image src={LogoFipp} />
        <List>
          <ListItem>
            <NavLink to={"/"}>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={"/corpo-docente"}>Corpo Docente</NavLink>
          </ListItem>
          <ListItem>
            <Button  onClick={onButtonPress}>
              <Image src={LogoUnoeste}/>
            </Button>
          </ListItem>
        </List>
      </Nav>
    </Wrapper>)
  ;
};
