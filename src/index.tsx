import { ActionPanel, Detail, List, Action } from "@raycast/api";

import UNIXTimeConverter from "./unix-time-converter";

export default function Command() {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Greeting"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="UNIX Time Converter"
        actions={
          <ActionPanel>
            <Action.Push title="Use this!" target={<UNIXTimeConverter />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
