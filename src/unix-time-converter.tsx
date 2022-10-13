import { Action, ActionPanel, List } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const unixtimeToDate = (unixtime: string) => {
    return `utc: ${new Date(Number(unixtime)).toUTCString()}`;
  };
  const [text, setText] = useState(Date.now().toString());
  const [date, setDate] = useState(unixtimeToDate(text));
  const onSearchTextChange = (value = "") => {
    setText(value);
    setDate(unixtimeToDate(value));
  };
  return (
    <List
      enableFiltering={false}
      searchText={text}
      onSearchTextChange={onSearchTextChange}
      searchBarPlaceholder="Enter unixtime"
    >
      <List.Item
        title={date}
        subtitle={date}
        actions={
          <ActionPanel title="Copy">
            <Action.CopyToClipboard title="Copy to clipboard" content={date} />
          </ActionPanel>
        }
      />
    </List>
  );
}
