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
  transition: transform 0.2s ease-out, color 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    color: #737373;   /* neutro */
  }
`;

const TriggerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: #000;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #666;
    transform: scale(1.2);
  }
`;

function MenuHamburguesa() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <TriggerButton>
          <Menu size={25} />
        </TriggerButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content>
          <Item onClick={() => console.log("Home")}>Home</Item>
          <Item onClick={() => console.log("Articles")}>Articles</Item>
          <Item onClick={() => console.log("Fashion Show")}>Fashion Show</Item>
          <Item onClick={() => console.log("Shooting")}>Shooting</Item>
          <Item onClick={() => console.log("About Me")}>About Me</Item>
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default MenuHamburguesa;