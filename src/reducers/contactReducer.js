const initialState = {
	contacts: [
      {
        id: 1,
        name: 'Mohamed IDBRAHIM',
        email: 'idbrahimdev@gmail.com',
        phone: '0650303315'
      },
      {
        id: 2,
        name: 'Basma IDBRAHIM',
        email: 'basma@gmail.com',
        phone: '0650303316'
      },
      {
        id: 3,
        name: 'Walid IDBRAHIM',
        email: 'walid@gmail.com',
        phone: '0650303317'
      },
      {
        id: 4,
        name: 'fff IDBRAHIM',
        email: 'fff@gmail.com',
        phone: '0650322217'
      }
    ]
};

export default function(state = initialState, action){
	switch(action.type){
    case 'GET_CONTACTS' : return {
      ...state
    }
		default:{
			return state;
		}
	}
}

