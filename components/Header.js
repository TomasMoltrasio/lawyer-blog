import React from "react";
import { Navbar, Text, Link } from "@nextui-org/react";
import { AcmeLogo } from "../public/AcmeLogo.js";
import { useRouter } from "next/router";

export default function Header() {
  const collapseItems = ["Inicio", "Publicaciones", "Blog", "Contacto"];
  const collapseItemsLinks = ["/", "/publicaciones", "/blog", "/contacto"];
  const router = useRouter();

  return (
    <Navbar isBordered variant="static">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link
          className="text-black hover:scale-125 hover:text-lime-900"
          onClick={() => router.push("/")}
        >
          <AcmeLogo />
          <Text className="cursor-pointer" b color="inherit" hideIn="xs">
            Germán González Campaña
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="success"
        hideIn="xs"
        variant="highlight"
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
