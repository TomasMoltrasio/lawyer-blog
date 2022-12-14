import { useContext } from "react";
import { Navbar, Text, Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import { GoLaw } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import NextLink from "next/link";
import Cookies from "universal-cookie";
import UserContext from "context/AuthContext";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const { logOut } = useContext(UserContext);
  const cookies = new Cookies();
  const user = cookies.get("user");
  const collapseItems = ["Inicio", "Publicaciones", "Blog", "Contacto"];
  const collapseItemsLinks = ["/", "/publicaciones", "/blog", "/contacto"];

  const router = useRouter();

  return (
    <Navbar className="w-screen" as="nav" variant="static" maxWidth="fluid">
      <Navbar.Toggle showIn="xs" id="navbar-toggle">
        <AiOutlineMenu size={30} className="cursor-pointer" />
      </Navbar.Toggle>
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <NextLink href="/">
          <Link className="text-black hover:scale-105 hover:text-emerald-900">
            <GoLaw className="text-3xl mr-2" />
            <Text
              className="cursor-pointer text-xl"
              b
              color="inherit"
              hideIn="sm"
            >
              Germán González Campaña
            </Text>
          </Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content
        activeColor="success"
        hideIn="xs"
        variant="underline-rounded"
        css={{
          fontSize: "1.3rem",
          marginLeft: "auto",
        }}
      >
        <NextLink href="/">
          <Navbar.Link
            isActive={router.pathname === "/"}
            className="hover:scale-110"
          >
            Inicio
          </Navbar.Link>
        </NextLink>
        <NextLink href="/publicaciones">
          <Navbar.Link
            isActive={router.pathname === "/publicaciones"}
            className="hover:scale-110"
          >
            Publicaciones
          </Navbar.Link>
        </NextLink>
        <NextLink href="/blog">
          <Navbar.Link
            isActive={router.pathname === "/blog"}
            className="hover:scale-110"
          >
            Blog
          </Navbar.Link>
        </NextLink>
        <NextLink href="/contacto">
          <Navbar.Link
            isActive={router.pathname === "/contacto"}
            className="hover:scale-110"
          >
            Contacto
          </Navbar.Link>
        </NextLink>
        {user?.token ? (
          <Navbar.Link
            onClick={logOut}
            className="hover:scale-110 cursor-pointer text-red-500"
          >
            <FiLogOut className="mr-2" />
          </Navbar.Link>
        ) : null}
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={`item-collapse-${index}`}
            activeColor="success"
            isActive={router.pathname === collapseItemsLinks[index]}
          >
            <NextLink href={collapseItemsLinks[index]}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                onClick={() => {
                  document.getElementById("navbar-toggle").click();
                }}
              >
                {item}
              </Link>
            </NextLink>
          </Navbar.CollapseItem>
        ))}
        {user?.token ? (
          <Navbar.CollapseItem activeColor="success">
            <Link
              color="error"
              css={{
                minWidth: "100%",
              }}
              onClick={() => {
                document.getElementById("navbar-toggle").click();
                logOut();
              }}
            >
              <FiLogOut className="mr-2" />
            </Link>
          </Navbar.CollapseItem>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
}
