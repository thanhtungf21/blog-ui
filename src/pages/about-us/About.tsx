import { Helmet } from "react-helmet-async";
import { Avatar, Card, Tag, Timeline, Typography, Row, Col } from "antd";
import {
  CodeOutlined,
  RocketOutlined,
  HeartOutlined,
  GithubOutlined,
  LinkedinOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Link } = Typography;

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-fadeIn">
      <Helmet>
        <title>Về Tôi - Blog Cá Nhân</title>
        <meta
          name="description"
          content="Giới thiệu về TungNT và dự án Blog UI"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <Avatar
            size={160}
            src="/logo/penguin_avatar.png"
            className="border-4 border-white shadow-lg mb-4"
          />
          <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
        </div>
        <Title level={1} className="!mb-2">
          Tùng Nguyễn (Fe2b)
        </Title>
        <Paragraph type="secondary" className="text-lg">
          Fullstack Developer • Tech Enthusiast • Penguin Lover 🐧
        </Paragraph>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="https://github.com/"
            target="_blank"
            className="text-2xl text-gray-700 hover:text-black transition-colors"
          >
            <GithubOutlined />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-2xl text-blue-600 hover:text-blue-800 transition-colors"
          >
            <LinkedinOutlined />
          </Link>
        </div>
      </div>

      <Row gutter={[32, 32]}>
        {/* Cột trái: Giới thiệu & Tech Stack */}
        <Col xs={24} md={14}>
          <Card className="shadow-sm mb-6 border-t-4 border-t-indigo-500">
            <Title level={3}>
              <RocketOutlined className="mr-2 text-indigo-500" />
              Về Dự Án Này
            </Title>
            <Paragraph className="text-justify text-base">
              Chào mừng bạn đến với <strong>Blog UI</strong> - một dự án cá nhân
              được tôi xây dựng để rèn luyện kỹ năng lập trình và chia sẻ những
              công cụ hữu ích.
            </Paragraph>
            <Paragraph className="text-justify text-base">
              Hiện tại, dự án tập trung vào tính năng{" "}
              <strong>Rút gọn liên kết (URL Shortener)</strong> và trang{" "}
              <strong>Profile cá nhân</strong>. Trong tương lai, đây sẽ là nơi
              tôi viết về ReactJS, TypeScript và những trải nghiệm trong nghề
              lập trình.
            </Paragraph>
          </Card>

          <Card className="shadow-sm border-t-4 border-t-teal-500">
            <Title level={3}>
              <CodeOutlined className="mr-2 text-teal-500" />
              Tech Stack
            </Title>
            <Paragraph>
              Dự án này được xây dựng dựa trên những công nghệ hiện đại mà tôi
              yêu thích:
            </Paragraph>
            <div className="flex flex-wrap gap-2">
              <Tag color="blue" className="px-3 py-1 text-sm">
                ReactJS v18
              </Tag>
              <Tag color="blue" className="px-3 py-1 text-sm">
                TypeScript
              </Tag>
              <Tag color="cyan" className="px-3 py-1 text-sm">
                Vite
              </Tag>
              <Tag color="purple" className="px-3 py-1 text-sm">
                Ant Design
              </Tag>
              <Tag color="cyan" className="px-3 py-1 text-sm">
                Tailwind CSS
              </Tag>
              <Tag color="red" className="px-3 py-1 text-sm">
                React Query
              </Tag>
              <Tag color="geekblue" className="px-3 py-1 text-sm">
                Axios
              </Tag>
            </div>
          </Card>
        </Col>

        {/* Cột phải: Timeline & Sở thích */}
        <Col xs={24} md={10}>
          <Card className="shadow-sm h-full border-t-4 border-t-orange-500">
            <Title level={3}>
              <CoffeeOutlined className="mr-2 text-orange-500" />
              Hành Trình
            </Title>
            <Timeline
              items={[
                {
                  color: "green",
                  children: (
                    <>
                      <h4 className="font-bold text-base m-0">Hiện tại</h4>
                      <p className="text-sm text-gray-500">
                        Phát triển Blog-UI & Học hỏi công nghệ mới
                      </p>
                    </>
                  ),
                },
                {
                  color: "blue",
                  children: (
                    <>
                      <h4 className="font-bold text-base m-0">2024</h4>
                      <p className="text-sm text-gray-500">
                        Bắt đầu dự án URL Shortener
                      </p>
                    </>
                  ),
                },
                {
                  color: "gray",
                  children: (
                    <>
                      <h4 className="font-bold text-base m-0">2023</h4>
                      <p className="text-sm text-gray-500">
                        Làm quen với React & Ecosystem
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Title level={4}>
                <HeartOutlined className="mr-2 text-red-500" />
                Sở thích
              </Title>
              <div className="flex flex-wrap gap-2">
                <Tag>🎧 Nghe nhạc Lofi</Tag>
                <Tag>🐧 Nuôi cánh cụt (ảo)</Tag>
                <Tag>☕ Cafe đá</Tag>
                <Tag>💻 Coding at night</Tag>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
