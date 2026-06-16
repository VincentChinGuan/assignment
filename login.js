function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

function handleCredentialResponse(response) {
        
    const userProfile = parseJwt(response.credential);
    localStorage.setItem("userName", userProfile.name);
    localStorage.setItem("userEmail", userProfile.email);
    localStorage.setItem("userPicture", userProfile.picture);

    window.location.href = "examples/test.html";
        }

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "715062166189-7vv10mq414ileois6cqs13jg9prk4485.apps.googleusercontent.com", 
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("googleBtn"), { theme: "filled_blue", size: "large", width: 260 } 
    );

    google.accounts.id.prompt(); 
}