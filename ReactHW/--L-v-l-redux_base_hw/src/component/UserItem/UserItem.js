import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import { fetchContacts } from "../../redux/contacts/actions";

export const UserItem = () => {


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
						<Table.Row key={item.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<Table.Cell component="th" scope="row">
								{item.name}
							</Table.Cell>
							<Table.Cell align="right"> {item.number} </Table.Cell>
							<Table.Cell align="right"> {item.lacation} </Table.Cell>
						</Table.Row>
					</>
				);
			})}
		</Table.Body>

	)


}








