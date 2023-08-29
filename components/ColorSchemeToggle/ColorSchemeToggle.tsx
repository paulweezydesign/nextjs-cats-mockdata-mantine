import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <FaSun size={20} stroke={1.5} />
        ) : (
          <FaMoon size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
