import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import styled from "@emotion/styled";

const Content = styled(DropdownMenu.Content)`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 6px;
  min-width: 160px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Item = styled(DropdownMenu.Item)`
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  color: #1a1a1a;
  transform-origin: left center;
  transition:
    transform 0.2s ease-out,
    color 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    color: #737373; /* neutro */
  }
`;

const TriggerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: #000;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #666;
    transform: scale(1.2);
  }
`;

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function MenuHamburguesa() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <TriggerButton>
          <Menu size={20} />
        </TriggerButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content>
          <Item onClick={() => scrollToSection("home")}>Home</Item>
          <Item onClick={() => scrollToSection("articles")}>Articles</Item>
          <Item onClick={() => scrollToSection("fashion-show")}>Fashion Show</Item>
          <Item onClick={() => scrollToSection("shooting")}>Shooting</Item>
          <Item onClick={() => scrollToSection("about-me")}>About Me</Item>
          <Item onClick={() => scrollToSection("contact")}>Contact</Item>
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default MenuHamburguesa;
