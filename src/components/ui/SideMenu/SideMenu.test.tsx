import { render, screen, fireEvent } from "@testing-library/react";
import { SideMenu } from "./SideMenu";
import type { MenuItem } from "./SideMenu.types";
import { vi } from "vitest";

// Mock the Link component since we're not using the router in tests
vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual("@tanstack/react-router");
  return {
    ...actual,
    Link: ({ children, to, ...props }: any) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  };
});

describe("SideMenu", () => {
  const mockMenuItems: MenuItem[] = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Settings", path: "/settings" },
    { label: "Profile", path: "/profile" },
  ];

  test("renders with menu items", () => {
    render(<SideMenu menuItems={mockMenuItems} />);

    // Check that menu items are displayed
    mockMenuItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });

    // Check that the container is present using data-testid
    const menuContainer = screen.getByTestId("menu-container");
    expect(menuContainer).toBeInTheDocument();
  });

  test("toggle button changes the data-expanded attribute", () => {
    render(<SideMenu menuItems={mockMenuItems} />);

    // Get the menu container to check data-expanded attribute
    const menuContainer = screen.getByTestId("menu-container");

    // Initially should be expanded (data-expanded="true")
    expect(menuContainer).toHaveAttribute("data-expanded", "true");

    // Get the button by its aria-label, not by role
    const toggleButton = screen.getByLabelText("Collapse menu");

    // Click the toggle button
    fireEvent.click(toggleButton);

    // Should now be collapsed (data-expanded="false")
    expect(menuContainer).toHaveAttribute("data-expanded", "false");

    // Click again to expand
    fireEvent.click(toggleButton);

    // Should now be expanded again (data-expanded="true")
    expect(menuContainer).toHaveAttribute("data-expanded", "true");
  });

  test("all menu items are properly displayed", () => {
    render(<SideMenu menuItems={mockMenuItems} />);

    // Check that all menu items are present
    const menuItems = screen.getAllByRole("link");
    expect(menuItems).toHaveLength(mockMenuItems.length);

    // Check each menu item has correct label and path
    mockMenuItems.forEach((item, index) => {
      expect(menuItems[index]).toHaveTextContent(item.label);
      expect(menuItems[index]).toHaveAttribute("href", item.path);
    });

    // Check the structure
    const menuList = screen.getByRole("list");
    expect(menuList).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockMenuItems.length);
  });
});
