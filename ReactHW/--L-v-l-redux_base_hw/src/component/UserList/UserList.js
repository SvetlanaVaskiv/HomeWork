import { Table } from "semantic-ui-react";
import { UserItem } from '../UserItem/UserItem';

export const UserList = () => {

	return (<>
		<Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell> Name </Table.HeaderCell>
					<Table.HeaderCell> Number </Table.HeaderCell>
					<Table.HeaderCell> Location</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<UserItem />
		</Table>
	</>
	)
}

