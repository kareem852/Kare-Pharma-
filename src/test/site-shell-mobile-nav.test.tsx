import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterContextProvider } from "@tanstack/react-router";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteShell } from "@/components/SiteShell";
import { routeTree } from "@/routeTree.gen";

// The dropdown is only rendered while open, so the assertions below target the
// menu container itself: the always-present desktop nav holds the same labels.
function renderShell() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/team"] }),
    context: { queryClient: new QueryClient() },
  });

  return render(
    <RouterContextProvider router={router}>
      <SiteShell>
        <div />
      </SiteShell>
    </RouterContextProvider>,
  );
}

describe("SiteShell mobile navigation", () => {
  it("opens the dropdown from the menu button and closes it again", () => {
    renderShell();

    expect(document.getElementById("mobile-nav")).toBeNull();

    const openButton = screen.getByRole("button", { name: "Open menu" });
    expect(openButton.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(openButton);

    const menu = document.getElementById("mobile-nav");
    expect(menu).not.toBeNull();
    for (const label of ["Science", "Focus Areas", "Team", "Invest"]) {
      expect(menu?.textContent).toContain(label);
    }
    expect(screen.getByRole("button", { name: "Close menu" }).getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(document.getElementById("mobile-nav")).toBeNull();
  });

  it("closes the dropdown after a link inside it is followed", () => {
    renderShell();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = document.getElementById("mobile-nav");
    expect(menu).not.toBeNull();

    fireEvent.click(within(menu!).getByText("Science"));

    expect(document.getElementById("mobile-nav")).toBeNull();
  });
});
