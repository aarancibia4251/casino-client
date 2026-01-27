import React from "react";
import { Card, Carousel, Flex, theme, Typography } from "antd";
import ButtonComponent from "../../atoms/button/Button.component";

const cardStyle: React.CSSProperties = {
  borderRadius: "5px",
};

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "480px",
  color: "#fff",
  lineHeight: "480px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
  borderRadius: "10px",
};

const HomePage = () => {
  const {
    token: { colorPrimaryBg },
  } = theme.useToken();
  return (
    <div>
      <Card
        hoverable
        style={cardStyle}
        styles={{ body: { padding: 0, overflow: "hidden" } }}
      >
        <Flex justify="flex-start">
          <Carousel arrows dotPlacement="end" infinite={false}>
            <div>
              <div style={{ position: "relative", paddingTop: "42%" }}>
                <iframe
                  src="https://player.mediadelivery.net/embed/585837/377ab856-0933-4cb2-8c83-4bae0bb5972d?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                  loading="lazy"
                  style={{
                    border: 0,
                    position: "absolute",
                    top: 0,
                    height: "480px",
                    width: "100%",
                  }}
                  allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>
          <Flex
            vertical
            align="flex-end"
            justify="space-between"
            style={{ padding: 32 }}
          >
            <Typography.Title level={3}>
              “Learn casino dance with Elegant, Technique and Fun”
            </Typography.Title>
            <ButtonComponent
              type="primary"
              className=""
              style={{ background: colorPrimaryBg }}
              target="_blank"
            >
              Conocer más...
            </ButtonComponent>
          </Flex>
        </Flex>
      </Card>
      <br />
    </div>
  );
};

export default HomePage;
