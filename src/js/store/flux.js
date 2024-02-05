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
			specificContact: null,
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
			
					setStore({ contacts: data });
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

			selectedContact: (contactID) => { 
				setStore ({specificContact : contactID })
			},
				
			updateContact: (id, contacts) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(contacts),
				})
				  .then((resp) => {
					if (!resp.ok) throw Error(resp.statusText);
					return resp.json();
				  })
				  .then((data) => {
					console.log(data);
					getActions().getContact();
				  })
				  .catch((error) => {
					console.error("Error", error);
				  });
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
			
					setStore((prevState)  => {
						const updatedData = prevState.myData.filter(contact => contact.id !== contactId);
						return { contact: updatedData };
					});
			
				} catch (error) {
					console.error(error);
				}
				
			},

			specificId: async (id) => { 
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/ ${id}`, {
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

			singleContactUpdate: (id, name, email, address, phone) => {
				const store = getStore();
			  
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/danji_slug`, {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					full_name: name,
					email: email,
					agenda_slug: "danji_slug",
					address: address,
					phone: phone,
				  }),
				})
				  .then((response) => {
					if (!response.ok) {
					  throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.json();
				  })
				  .then((updatedContact) => {
					const changedContact = store.contacts.map((contact) => {
					  if (contact.id === id) {
						return {
						  ...contact,
						  full_name: updatedContact.full_name,
						  email: updatedContact.email,
						  address: updatedContact.address,
						  phone: updatedContact.phone,
						};
					  }
					  return contact;
					});
			  
					setStore({ contacts: changedContact });
				  })
				  .catch((error) => {
					console.error("Error updating contact:", error);
				  });
			  }
			  
		
		}
	};
};

export { getState } ;
