import { CursoWrapper, Image, NomeCurso, TipoCurso, TiposWrapper, Title, View, Wrapper } from "./cursos.styles";
import {useState} from "react";
import BacharreloImg from "../../../../assets/images/graduacao.png"
import TecnologoImg from "../../../../assets/images/tec.png"
import PosImg from "../../../../assets/images/pos.png"

export const Cursos = () => {
  const [numCurso, setNumCurso] = useState(0);
  return (
    <>
      <Title>Cursos</Title>
      <Wrapper>
        <TiposWrapper>
          <TipoCurso onClick={() => setNumCurso(0)}>Bacharelado</TipoCurso>
          <TipoCurso onClick={() => setNumCurso(1)}>Tecnólogo</TipoCurso>
          <TipoCurso onClick={() => setNumCurso(2)}>Pós-graduação</TipoCurso>
        </TiposWrapper>
        <CursoWrapper>
          {
            numCurso == 0 && (
              <>
                <Image src={BacharreloImg}/>
                <View>
                  <NomeCurso>Ciência da Computação</NomeCurso>
                  <NomeCurso>Sistemas de Informação</NomeCurso>
                  <NomeCurso>Engenharia de Software(EAD)</NomeCurso>
                </View>
              </>
            )
          }

          {
            numCurso == 1 && (
              <>
                <Image src={TecnologoImg}/>
                <View>
                  <NomeCurso>Análise e Desenvolvimento de Sistemas</NomeCurso>
                  <NomeCurso>Redes de Computadores</NomeCurso>
                  <NomeCurso>Jogos Digitais</NomeCurso>
                  <NomeCurso>Gestão da Tecnologia da Informação</NomeCurso>
                </View>
              </>
            )
          }
          
          {
            numCurso == 2 && (
              <>
                <Image src={PosImg}/>
                <View>
                  <NomeCurso>Data Science</NomeCurso>
                  <NomeCurso>Desenvolvimento de Aplicações Web</NomeCurso>
                  <NomeCurso>Segurança da Informação</NomeCurso>
                </View>
              </>
            )
          }
        </CursoWrapper>
      </Wrapper>
    </>
  );
};
