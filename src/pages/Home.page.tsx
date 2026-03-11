import '@mantine/core';

// Укажите правильный относительный путь к файлу, который создали выше
import { Button, Dropdown, DropdownMenu } from '../components/Dropdown/Dropdown';

function RoleDropdown() {
  return (
    <Dropdown>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Choose role
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <Dropdown.List>
        <Dropdown.Item>Admin</Dropdown.Item>
        <Dropdown.Item>Client</Dropdown.Item>
        <Dropdown.Item>Superadmin</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
}

export function HomePage() {
  return (
    <>
      <RoleDropdown />
    </>
  );
}
