
const Unauthorized = () => {

    return(
        <div>
            <h1>No authorization</h1>
            <h3>If you are not logged in, please log in and try again</h3>
            <p>You do not have the authorization to access the page you are trying to access</p>
            <p>If this is a mistake please contact your administrator or support team</p>
        </div>
    )
}

export default Unauthorized;