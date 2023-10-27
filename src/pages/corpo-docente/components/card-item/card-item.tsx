import { CorpoDocente } from "@/entities/corpo-docente";
import { Email, EmailWrapper, Formation, FormationWrapper, ImageWrapper, MainWrapper, Name, NameWrapper, ProfessorImage, Title, TitleWrapper } from "./card-item.styles";

type Props = {
  Professor: CorpoDocente; 
}

export const CardItem = ({Professor}:Props) => {
  return <MainWrapper>
    <NameWrapper>
      <Name>{Professor.nome}</Name>
    </NameWrapper>
    <TitleWrapper>
      <Title>{Professor.titulacao}</Title>
    </TitleWrapper>
    <ImageWrapper>
      <ProfessorImage src={Professor.foto}/>
    </ImageWrapper>
    <FormationWrapper>
      <Formation>{Professor.graduacao}</Formation>
    </FormationWrapper>
    <EmailWrapper>
      <Email>{Professor.email}</Email>
    </EmailWrapper>
  </MainWrapper>;
};
