const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContact: async () => {
					fetch('https://playground.4geeks.com/apis/fake/contact/agenda/danji_slug', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					.then(resp => {
						console.log(resp.ok);
						console.log(resp.status); 
						return resp.json(); 
					})
					.then(data => {
						setStore({contacts: data});
						
					})
					.catch(error => {
						console.log(error);
					})
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
						  newid: Date.now()
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
				
			updateContact:  (contact) => {
				let store = getStore();
			fetch( `https://playground.4geeks.com/apis/fake/contact/${contact.id}`,{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({						
						"full_name": contact.full_name,
                      	"email": contact.email,
                      	"agenda_slug": "danji_slug",
                      	"address": contact.address,
                      	"phone": contact.phone,
						"newid":contact.id
					})					
				})
				.then(resp => {
					console.log(resp.ok);
					console.log(resp.status); 
					return resp.json(); 
				})
				.then(data => {
					console.log(data);
					let updatedContact = store.contacts.find((item) => {
						return item.id == contact.id;

					});
					updatedContact.full_name = contact.full_name;
					updatedContact.email = contact.email;
					updatedContact.address = contact.address;
					updatedContact.phone = contact.phone;
					updatedContact.newid = contact.newid;
					let newContact = [...store.contacts];
					setStore({contacts: newContact});
					
				})
				.catch(error => {
					
					console.log(error);
				})						


			},
			deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                        method: 'DELETE',
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    });
					console.log(response, "i am supposed to be showing");
					
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
			
					setStore((prevState)  => {
						console.log(prevState,"I'm supposed to be showing too")
						const updatedContact= prevState.contacts.filter(contact => contact.id !== id);
						return { contact: updatedContact};
					});
			
				} catch (error) {
					console.error(error);
				}
				
			},	
			  
		
		}
	};
};

export { getState } ;
