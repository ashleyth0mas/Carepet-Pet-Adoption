import { GoogleLogout} from "react-google-login";


const clientId ="166586900999-e1f14vvvc2gqg5l7hrgmpjo7o3iadmd2.apps.googleusercontent.com";

function Logout()
{

    const onSuccess = () =>{
        console.log("log out successful");
    }

return(
    <div>
        <br></br><br></br><br></br>
    <GoogleLogout
    clientId={clientId}
    buttonText="Logout"
    onLogoutSuccess={onSuccess}
    
    className=' text-white font-semibold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline'
  />
  </div>
  );
}
export default Logout;