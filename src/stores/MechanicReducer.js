import * as actionCreators from '../actions/mactions'
import * as actionCreators1 from '../actions/ValidateUser'


const initialState = {
      returnedMessage: 'data yet Found',
      mechanicList: [],
      serviceList:[],
      feedbackList:[],
      status:0
}
const MechanicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.ADD_MECHANIC:
            let messageAfterAddition = action.data.resMessage
            let listAfterAddition = action.data.mechanicList
            console.log(listAfterAddition);
            console.log(messageAfterAddition)
            
            return {
                returnedMessage: messageAfterAddition,
                mechanicList: listAfterAddition
            }
        case actionCreators.GET_REQUEST:
            let messageAfterRequest = action.data.resMessage
            let listAfterRequest = action.data.serviceList
            console.log('Addition of mechanic')
            console.log(listAfterRequest)
            console.log(messageAfterRequest)
            return {
                returnedMessage: messageAfterRequest,
                serviceList: listAfterRequest                                                                          
            }
            case actionCreators.GET_FEEDBACK:
                let messageAfterFeedback = action.data.resMessage
                let listAfterFeedback = action.data.feedbackList
                console.log('Addition of mechanic')
                console.log(listAfterFeedback)
                console.log(messageAfterFeedback)
                return {
                    returnedMessage: messageAfterFeedback,
                    feedbackList: listAfterFeedback                                                                          
                }
            case actionCreators.GET_MECHANIC:
                let messageAfterMechanic = action.data.resMessage
                let listAfterMechanic = action.data.mechanicList
                console.log('Addition of mechanic')
                console.log(listAfterMechanic)
                console.log(messageAfterMechanic)
                return {
                    returnedMessage: messageAfterMechanic,
                    mechanicList: listAfterMechanic                                                                          
                } 
            case actionCreators.UPDATE_MECHANIC:
                let messageAfterUpdate = action.data.resMessage
                let listAfterUpdate = action.data.mechanicList
                console.log('Addition of mechanic')
                console.log(listAfterUpdate)
                console.log(messageAfterUpdate)
                return {
                    returnedMessage: messageAfterUpdate,
                    listAfterMechanic: listAfterUpdate                                                                          
                }     
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: ''
            }

        default:
            return state
    }
}
export default MechanicReducer;
