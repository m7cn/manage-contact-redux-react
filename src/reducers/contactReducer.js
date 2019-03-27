const initialState = {
contacts: [
    {
      id: 1,
      name: 'Mohamed IDBRAHIM',
      email: 'idbrahimdev@gmail.com',
      phone: '0650303315',
      errors:{}
    },
    {
      id: 2,
      name: 'Basma IDBRAHIM',
      email: 'basma@gmail.com',
      phone: '0650303316',
      errors:{}
    },
    {
      id: 3,
      name: 'Walid IDBRAHIM',
      email: 'walid@gmail.com',
      phone: '0650303317',
      errors:{}
    },
    {
      id: 4,
      name: 'fff IDBRAHIM',
      email: 'fff@gmail.com',
      phone: '0650322217',
      errors:{}
    }
  ]
};

export default function(state = initialState, action){
    switch(action.type){
      case 'GET_CONTACTS' : return {
        ...state
      }
      case 'UPDATE_CONTACT' : 
        const updatedContacts = state.contacts.map(contact => {
          if(contact.id === action.payload.id){
            return {...contact,...action.payload }
          }
          return contact;
        })
        state.contacts = updatedContacts;
        return state;

      case 'ADD_CONTACT':
        state.contacts.push(action.payload);
        return state;

      case 'DELETE_CONTACT':
        state.contacts = state.contacts.filter(contact => action.id !== contact.id)
        return {...state};

    	default:{
    		return state;
    	}
    }
}

