import { Anchor, Box, Button, Group, Image } from "@mantine/core";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";

const Navigation = () => {
  return (
    <Group h="80px" position="apart">
      <h1>
        <Image src="/logo.svg" alt="Highlight" />
      </h1>
      <Anchor href="https://github.com/mprasanjith/insights-os" target="_blank">
        <Button
          leftIcon={<IconBrandGithub size={16} />}
          rightIcon={<IconArrowUpRight size={16} />}
          variant="subtle"
          color="gray.6"
          radius="xl"
          compact
          styles={{
            leftIcon: {
              marginRight: "4px",
            },
            rightIcon: {
              marginLeft: "4px",
            },
          }}
        >
          Contribute to the project
        </Button>
      </Anchor>
    </Group>
  );
};

export default Navigation;
