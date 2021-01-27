import * as actionCreators from '../actions/useractions'
import * as actionCreators1 from '../actions/ValidateUser'

const initialState = {
      returnedMessage: 'data yet Found',
      userList:[],
      mechanicList:[],
      feedbackList:[],
      serviceList:[],
      status:0
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
         case actionCreators1.VALIDATE_USER:
            let resMessage1 = action.data.message
            // let listAfterUserLogin = action.data.userList
            let Reqstatus1 = action.status
            // listAfterUserLogin.map((user)=>{
            //    alert("setting sesssion");
            //    sessionStorage.setItem("SessUserId", user.userId);
            //    alert("setting sesssion complete"+user.userId);
            // })
            console.log(Reqstatus1)
            return {
                returnedMessage : resMessage1,
                status : Reqstatus1,
               //  userList:listAfterUserLogin
            }
        
         case actionCreators.ADD_USER:
            let messageAfterAddition = action.data.resMessage
            let listAfterAddition = action.data.userList
            console.log('Addition of user')
           console.log(messageAfterAddition)
            
           return {
              returnedMessage: messageAfterAddition,
              userList: listAfterAddition
         }
         case actionCreators.LOGIN_USER:
            let messageAfterUserLogin = action.data.resMessage
            let listAfterUserLogin = action.data.userList
            console.log(listAfterUserLogin)
            console.log(messageAfterUserLogin)
            listAfterUserLogin.map((user)=>{
            alert("setting sesssion");
            sessionStorage.setItem("SessUserId", user.userId);
            alert("setting sesssion complete"+user.userId);
        })
           return {
              returnedMessage: messageAfterUserLogin,
              userList: listAfterUserLogin
         }
         case actionCreators.GET_MECHANIC:
            let messageAfterGetMechanic = action.data.resMessage
            let listAfterGetMechanic = action.data.mechanicList
            console.log(listAfterGetMechanic)
           console.log(messageAfterGetMechanic)
           return {
              returnedMessage: messageAfterGetMechanic,
              mechanicList: listAfterGetMechanic
         }
         case actionCreators.GET_USER:
            let messageAfterGetUSER = action.data.resMessage
            let listAfterGetUSER = action.data.userList
            console.log(listAfterGetUSER)
           console.log(messageAfterGetUSER)
           return {
              returnedMessage: messageAfterGetUSER,
              userList: listAfterGetUSER
         }
         case actionCreators.UPDATE_USER:
            let messageAfterUpdateUser = action.data.resMessage
            let listAfterUpdateUser = action.data.userList
            console.log(listAfterUpdateUser)
           console.log(messageAfterUpdateUser)
           return {
              returnedMessage: messageAfterUpdateUser,
              userList: listAfterUpdateUser
         }
         case actionCreators.REQUEST_MECHANIC:
            let messageAfterRequestMechanic = action.data.resMessage
            let listService = action.data.serviceList
            console.log(listService)
           console.log(messageAfterRequestMechanic)
        //    listService.map((service)=>{
        //    // alert("setting sesssion");
        //     sessionStorage.setItem("sesmecId",service.mechanicId)
        //     sessionStorage.setItem("SesServId",service.serviceId);
        //    //alert("setting sesssion complete"+service.serviceId+" "+service.mechanicId);
        // })
           return {
              returnedMessage: messageAfterRequestMechanic,
              serviceList: listService
         }

         case actionCreators.GIVE_FEEDBACK:
            let messageFeedback = action.data.resMessage
            //let listFeedback = action.data.feedbackList
           // console.log(listFeedback)
           console.log(messageFeedback)
           return {
              returnedMessage: messageFeedback,
              //feedbackList: listFeedback
         }

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: ''
            }

        default:
            return state
    }
}
export default UserReducer;
