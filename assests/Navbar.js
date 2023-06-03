
import Head from 'next/head'
import React from 'react'
import logo from '../public/stocks/profile-avatar.png'
import { Navbar, Link, Container, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
function Navigatebar() {

  const collapseItems = [
    "About Me",
    "Skills",
    "Services",
    "Projects",
    "Contact us"
  ];

  const thelinks = [
    {
      text:"About Me",
      link:"#about-cont",
    },
    {
      text:"Skills",
      link:"#skills",
    },
    {
      text:"Services",
      link:"#service",
    },
    {
      text:"Projects",
      link:"#projects",
    },
    {
      text:"Contact us",
      link:"#contact-us",
    },
  ]

  return (
    <>
    
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

<Navbar  css={{
      maxW: "100%"
    }} isBordered variant="sticky"  style={{backgroundColor:"white"}}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link  href="#about-cont">
            About Me
          </Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#service">Services</Navbar.Link>
          <Navbar.Link href="#projects">Project</Navbar.Link>
          <Navbar.Link href="#contact-us">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src='./stocks/profile-avatar.png'
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  janivansh2002@gmail.com
                </Text>
                <Button  onPress={()=>window.open('mailto:janivansh2002@gmail.com?subject=project','_blank')}>Contact</Button>
              </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {thelinks.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.link}
              >
                {item.text}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
   </>
  ) 

}

export default Navigatebar