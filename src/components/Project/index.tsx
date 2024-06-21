import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { projectsData } from "@/utils/projectsData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

const projects = [
  {
    name: "EcommerceKenzie",
    link: "https://arc4dex.github.io/EcommerceKenzie/",
  },
  {
    name: 'Kenzie-Hub',
    link: 'https://kenzie-hub-bernardes.vercel.app/'
  },
  {
    name: 'KenzieBurguer',
    link: 'https://burgueriakenzie.vercel.app/'
  },
  {
    name: 'NuKenzie',
    link: 'https://nukenzie-bernardes.vercel.app/'
  },
  {
    name: 'OnTrip',
    link: 'https://capstone-m3-five.vercel.app/'
  }
];

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );

      const json = await data.json();

      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>
      {projectsData?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$2" }}
            color="grey1"
          >
            {repository.name}
          </Text>
          <Text type="body1" color="grey2">
            {repository.description}
          </Text>

          {repository.language && (
            <ProjectStack>
              <>
                <Text type="body2">Linguagens:</Text>
                {repository.language.map((tech) => {
                  return <ProjectStackTech>
                    <Text color="brand1" type="body2">
                      {tech}
                    </Text>
                  </ProjectStackTech>
                })}
              </>
              </ProjectStack>
          )}
  
            <ProjectStack>
              <>
                <Text type="body2">Ferramentas:</Text>
                {repository.tools.map((tech) => {
                    return <ProjectStackTech>
                      <Text color="brand1" type="body2">
                        {tech}
                      </Text>
                    </ProjectStackTech> 
                })}
              </>
              </ProjectStack>

          <ProjectLinks>
              <ProjectLink
                target="_blank"
                href={
                  projectsData.find((project) => {
                    return project.name === repository.name;
                  })?.link
                }
              >
                <FaShare /> Aplicação
              </ProjectLink>
            <ProjectLink target="_blank" href={repository?.link}>
              <FaGithub /> Github Code
            </ProjectLink>
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
