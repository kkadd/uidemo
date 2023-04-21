import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../styles/Layout.js'
import { Navbar, Text, Avatar, Grid, Col, Dropdown, Card, Spacer, Container} from '@nextui-org/react';
import { DiGithubBadge, DiVisualstudio, DiBootstrap, DiFirefox, DiDropbox, DiNodejsSmall} from "react-icons/di";
import { FaStar } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Navbar */}
        <Navbar isCompact isBordered variant={"static"}>
          <Navbar.Content css={{"color" : "$secondary"}}>
            <Navbar.Link href='#'>Home</Navbar.Link>
            <Navbar.Link href='#'>All Services</Navbar.Link>
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
                <Avatar /* Profile icon */
                  bordered
                  color="secondary"
                  as="button"
                  size="md"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/20211007_BamBam.jpg/330px-20211007_BamBam.jpg"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu /* Dropdown Menu */
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Bamb1a@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Settings
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        </Navbar>

      {/* Grid icon*/}
      <Grid.Container gap={2} justify='center' css={{"height" : "300px", "backgroundColor" : "$white"}}>

          <Grid sm={2} alignItems="flex-start">
            <Col>
              <Text size={50} css={{"textAlign" : "center"}}><DiGithubBadge/></Text>
              <Text size={15} css={{"textAlign" : "center"}}>Github</Text>
            </Col>
          </Grid>
          <Grid sm={2} alignItems="flex-start">
            <Col>
              <Text size={50} css={{"textAlign" : "center"}}><DiVisualstudio/></Text>
              <Text size={15} css={{"textAlign" : "center"}}>Visual studio</Text>
            </Col>
          </Grid>
          <Grid sm={2} alignItems="flex-start">
            <Col>
              <Text size={50} css={{"textAlign" : "center"}}><DiFirefox/></Text>
              <Text size={15} css={{"textAlign" : "center"}}>Firefox</Text>
            </Col>
          </Grid>
          <Grid sm={2} alignItems="flex-start">
            <Col>
              <Text size={50} css={{"textAlign" : "center"}}><DiBootstrap/></Text>
              <Text size={15} css={{"textAlign" : "center"}}>Bootstrap</Text>
            </Col>
          </Grid>
          <Grid sm={2} alignItems="flex-start">
            <Col>
              <Text size={50} css={{"textAlign" : "center"}}><DiDropbox/></Text>
              <Text size={15} css={{"textAlign" : "center"}}>Dropbox</Text>
            </Col>
          </Grid>
          <Grid sm={2} alignItems="flex-start">
            <Col>
              <Text size={50} css={{"textAlign" : "center"}}><DiNodejsSmall/></Text>
              <Text size={15} css={{"textAlign" : "center"}}>Node.js</Text>
            </Col>
          </Grid>

      </Grid.Container>
      
      {/* Recently */}
          <Grid.Container css={{"backgroundColor" : "$white"}}>
            <Grid xs={12}>
              <Card variant="bordered" css={{ mw: "1440px"}}>
                <Card.Header css={{"backgroundColor" : "$purple300"}}>
                  <Text weight={'bold'} size={20} css={{"textAlign" : "start"}}>Recently Access</Text>
                </Card.Header>
                <Card.Divider/>
                <Card.Body css={{"backgroundColor" : "$purple100"}}>
                  <Grid.Container justify="flex-start">
                  <Grid sm={1} alignItems="center">
                    <Col>
                      <Text size={50} css={{"textAlign" : "center"}}><DiNodejsSmall/></Text>
                    </Col>
                  </Grid>
                  <Grid sm={1} alignItems="center">
                    <Col>
                      <Text size={50} css={{"textAlign" : "center"}}><DiGithubBadge/></Text>
                    </Col>
                  </Grid>
                  </Grid.Container>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>

      {/* Frequency */}
      <Grid.Container css={{"backgroundColor" : "$white"}}>
            <Grid xs={12}>
              <Card variant="bordered" css={{ mw: "1440px"}}>
                <Card.Header css={{"backgroundColor" : "$purple300"}}>
                  <Text weight={'bold'} size={20} css={{"textAlign" : "start"}}>Frequency Used <FaStar color="yellow"/></Text>
                </Card.Header>
                <Card.Divider/>
                <Card.Body css={{"backgroundColor" : "$purple100"}}>
                  <Grid.Container justify="flex-start">
                  <Grid sm={1} alignItems="center">
                    <Col>
                      <Text size={50} css={{"textAlign" : "center"}}><DiVisualstudio/></Text>
                    </Col>
                  </Grid>
                  <Grid sm={1} alignItems="center">
                    <Col>
                      <Text size={50} css={{"textAlign" : "center"}}><DiBootstrap/></Text>
                    </Col>
                  </Grid>
                  </Grid.Container>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
          {/* footer */}
          <Container justify='center' css={{"height" : "50px", "backgroundColor" : "$white"}}>
            <Text css={{"textAlign" : "center"}}>© Copyright 2023 uidemo</Text>
          </Container>
    </Layout>
  )
}

export default Home