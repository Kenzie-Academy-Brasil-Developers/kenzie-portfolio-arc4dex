// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import Typewriter from "typewriter-effect";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { stackLearning } from "@/utils/stackLearning";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Pedro Bernardes
            </Text>
            <Text as="h1" type="heading1" color="grey5">
              <Typewriter
                options={{
                  strings: ["Desenvolvedor Front-End" ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
            <Text type="body1" color="grey6">
              Apaixonado pela programação e em constante evolução! Meu objetivo
              é ser minha melhor versão e elevar minhas habilidades e meu
              trabalho sempre ao próximo nível.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
              <Button as="a" href="https://drive.google.com/file/d/1EkZfi5D_liWwdMaZY5coTZBYqBSvRhFk/view?usp=sharing" type="btLink" color="grey5" target="_blank">
                Download CV
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
          <Text as="h4" type="heading3" color="grey1">
            Estou aprendendo
          </Text>
          <StackCards>
            {stackLearning.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1" css={{ marginTop: "$2" }}>
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text as="h3" type="heading2" color="grey1">
                Meus projetos
              </Text>
              <Text type="body1" color="grey2" css={{ marginTop: "$2" }}>
                Ao longo do curso da Kenzie Academy aprendi diversas tecnologias e desenvolvi inúmeros projetos. Abaixo estão meus principais trabalhos.
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
