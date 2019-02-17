import React from "react";
import { Table, IconButton } from "evergreen-ui";

export const Output = ({ children }) => (
  <div className="outputContainer">
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Name</Table.TextHeaderCell>
        <Table.TextHeaderCell>Spent</Table.TextHeaderCell>
        <Table.TextHeaderCell flexBasis={56} flexShrink={0} flexGrow={0} />
      </Table.Head>
      <Table.VirtualBody height={320}>{children}</Table.VirtualBody>
    </Table>
  </div>
);

export const OutputItem = props => (
  <Table.Row key={props.key}>
    <Table.TextCell>{props.personName}</Table.TextCell>
    <Table.TextCell isNumber>{props.personExpense}</Table.TextCell>
    <Table.Cell flexBasis={56} flexShrink={0} flexGrow={0}>
      <IconButton
        name={props.name}
        onClick={props.onClick}
        icon="cross"
        intent="danger"
      />
    </Table.Cell>
  </Table.Row>
);
