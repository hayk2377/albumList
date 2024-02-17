import styled from "styled-components";
const FooterContainer = styled.footer`
  background-color: #000033;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffffff;
  p {
    margin: 20px 20px;
  }
`;

const SocialMedia = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  li a {
    color: white;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: goldenrod;
    }
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const Copyright = styled.p`
  color: white;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <p>
          <span>Email:</span> haykelmuktar@gmail.com
        </p>
        <p>
          <span>Phone:</span> +251991229830
        </p>
        <SocialMedia>
          <li>
            <a
              href="https://github.com/hayk2377"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/github.jpg" alt="GitHub Icon" />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/haykel-muktar-a09747213"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.png" alt="linkedin Icon" /> LinkedIn
            </a>
          </li>
        </SocialMedia>
      </ContactInfo>
      <Copyright>© 2024 Album HITS</Copyright>
    </FooterContainer>
  );
};

export default Footer;
