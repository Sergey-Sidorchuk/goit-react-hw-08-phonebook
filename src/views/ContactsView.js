import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../Components/Container';
import Phonebook from '../Components/Phonebook';
import { contactsOperations } from '../redux/contacts';

export default function ContactsView(params) {
    const dispatch = useDispatch();
    // const isLoadingContacts = useSelector(contactsSelectors.getLoading);

    useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
    
    return (
        <Container>
            <Phonebook />
        </Container>
    );
};