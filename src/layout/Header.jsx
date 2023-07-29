import { Button, Col, Grid, Image, Row, Space } from 'antd'
import Card from 'antd/es/card/Card'
import Search from 'antd/es/input/Search'
import { Header } from 'antd/es/layout/layout'
import Link from 'antd/es/typography/Link'
import React from 'react'

const Head = () => {
    return (
        <Header >
            <Card className='w-100'>
                <Row align='middle' wrap>
                    <Col flex={4}>
                        <Space align='center' size='large'>

                            <Image src='vite.svg' fallback='vite.svg' />
                            <Link href='javascript::void(0)'>
                                Home
                            </Link>
                            <Link href='javascript::void(0)'>
                                Exchanges
                            </Link>
                            <Link href='javascript::void(0)'>
                                NFTs
                            </Link><Link href='javascript::void(0)'>
                                Tokens
                            </Link><Link href='javascript::void(0)'>
                                About
                            </Link>
                        </Space>
                    </Col>
                    <Col flex={1} >
                        <Space align='center' size='middle'>
                            <Search />
                            <Button>Connect Wallet</Button>
                        </Space>
                    </Col>
                </Row>
            </Card>
        </Header>
    )
}

export default Head