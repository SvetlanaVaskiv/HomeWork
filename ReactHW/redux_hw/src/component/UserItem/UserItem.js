import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import { fetchContacts } from "../../UserServer/UserServer";

export const UserItem = ({ id }) => {

	const dispatch = useDispatch();
	const userList = useSelector(state => state.contactsList.contacts)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<Table.Body>
			{userList && userList.length > 0 && userList.map(item => {
				return (
					<>
						<Table.Row key={item.id}>
							<Table.Cell key={item.name} component="th" scope="row">
								{item.name}
							</Table.Cell>
							<Table.Cell align="right" key={item.number}> {item.number} </Table.Cell>
							<Table.Cell align="right" key={item.lacation}> {item.lacation} </Table.Cell>
						</Table.Row>
					</>
				);
			})}
		</Table.Body>)
}








