import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Transition,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Flex,
} from '@mantine/core';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';
import { useDisclosure } from '@mantine/hooks';

import ColorSchemeToggle from './ColorSchemeToggle/ColorSchemeToggle';
const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header height={75} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <FaPaw size={30} />

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Home
            </Link>

            <Link href="/about" className={classes.link}>
              About
            </Link>
            <Link href="/kittens" className={classes.link}>
              Kittens
            </Link>
            <Link href="/resources" className={classes.link}>
              Resources
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Flex align="center" direction="row" gap="lg">
              <ColorSchemeToggle />
              <Button>Contact Us</Button>
            </Flex>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        sx={{
          backgroundColor: '#000000',
          color: 'white',
          width: 300,
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: drawerOpened ? 0 : -300,
          transition: 'all 0.5s ease-in-out',
          zIndex: 99,
        }}
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Link href="/" className={classes.link}>
            Home
          </Link>

          <Link href="/about" className={classes.link}>
            About
          </Link>
          <Link href="/kittens" className={classes.link}>
            Kittens
          </Link>
          <Link href="/resources" className={classes.link}>
            Resources
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <ColorSchemeToggle />
            <Button>Contact Us</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
