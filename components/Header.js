import React from "react";
import { Navbar, Text, Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import { GoLaw } from "react-icons/go";

export default function Header() {
  const collapseItems = ["Inicio", "Publicaciones", "Blog", "Contacto"];
  const collapseItemsLinks = ["/", "/publicaciones", "/blog", "/contacto"];
  const router = useRouter();

  return (
    <Navbar className="w-screen" as="nav" variant="static" maxWidth="fluid">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link
          className="text-black hover:scale-105 hover:text-emerald-900"
          onClick={() => router.push("/")}
        >
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
        <Navbar.Link
          onClick={() => router.push("/")}
          isActive={router.pathname === "/"}
          className="hover:scale-110"
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push("/publicaciones")}
          isActive={router.pathname === "/publicaciones"}
          className="hover:scale-110"
        >
          Publicaciones
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push("/blog")}
          isActive={router.pathname === "/blog"}
          className="hover:scale-110"
        >
          Blog
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push("/contacto")}
          isActive={router.pathname === "/contacto"}
          className="hover:scale-110"
        >
          Contacto
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="success"
            isActive={router.pathname === collapseItemsLinks[index]}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              onClick={() => router.push(collapseItemsLinks[index])}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
