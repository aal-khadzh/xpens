import React from "react";
import { Dialog, Table } from "evergreen-ui";

export const Balance = ({ children, isShown, onCloseComplete }) => (
  <Dialog
    isShown={isShown}
    onCloseComplete={onCloseComplete}
    hasFooter={false}
    hasHeader={false}
  >
    <Table>
      <Table.Head>
        <Table.TextHeaderCell textAlign={"center"}>Name</Table.TextHeaderCell>
        <Table.TextHeaderCell textAlign={"center"}>Spent</Table.TextHeaderCell>
        <Table.TextHeaderCell textAlign={"center"}>
          Balance
        </Table.TextHeaderCell>
      </Table.Head>
      <Table.VirtualBody height={240}>{children}</Table.VirtualBody>
    </Table>
  </Dialog>
);

export const BalanceItem = props => (
  <Table.Row key={props.key} intent={props.intent}>
    <Table.TextCell textAlign={"center"}>{props.personName}</Table.TextCell>
    <Table.TextCell textAlign={"center"} isNumber>
      {props.personExpense}
    </Table.TextCell>
    <Table.TextCell textAlign={"center"} isNumber>
      {props.personBalance}
    </Table.TextCell>
  </Table.Row>
);
