const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [ {
				id:1, 
				full_name: "",
				email: "",
				address: "",
				phone: "",
			}],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContact: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/danji_slug', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					});
			
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
			
					let data = await response.json();
			
					setStore({contacts:data });
					return getStore().contacts;
			
				} catch (error) {
					console.error(error);
				}
			},
	

			createContact: async (name,address, phone, email) => {
					let response = await fetch(
					  "https://playground.4geeks.com/apis/fake/contact/",
					  {
						method: "POST",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
						  full_name: name,
						  email: email,
						  agenda_slug: "danji_slug",
						  address: address,
						  phone: phone,
						}),
					  }
					);
					let data = await response.json();
			
					const currentContacts = getStore().contacts;
					setStore({ contacts: [...currentContacts, data] });
				  },
				
			updateContact: async (contactId, updatedData) => {
				try {
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/danji_slug', {
						method: 'PUT',
						body: JSON.stringify(updatedData),
						headers: new Headers({
							'Content-Type': 'application/json'
						})
					});
			
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
			
					let updatedContact = await response.json();
					
					getActions().setStore((prevState) => {
						const updatedData = prevState.myData.map(contact => {
							if (contact.id === contactId) {
								return { ...contact, ...updatedContact };
							}
							return contact;
						});
			
						return { contact: updatedData };
						
					});
			
				} catch (error) {
					console.error(error);
				}
			},
			deleteContact: async (contactId) => {
				try {
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/danji_slug', {
						method: 'DELETE',
						headers: new Headers({
							'Content-Type': 'application/json'
						})
					});
			
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
			
					getActions().setStore((prevState)  => {
						const updatedData = prevState.myData.filter(contact => contact.id !== contactId);
						return { contact: updatedData };
					});
			
				} catch (error) {
					console.error(error);
				}
				
			}
		}
	};
};

export { getState } ;
