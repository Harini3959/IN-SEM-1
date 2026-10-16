```javascript

if (!localStorage.getItem("users")) {

    const users = [
        {
            username: "admin",
            password: "12345"
        }
    ];

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );
}


// ============================
// LOGIN
// ============================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document.getElementById(
                    "username"
                ).value.trim();


            const password =
                document.getElementById(
                    "password"
                ).value;


            const message =
                document.getElementById(
                    "message"
                );


            // Get users from localStorage
            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            // Find matching user
            const user =
                users.find(function (item) {

                    return (
                        item.username === username &&
                        item.password === password
                    );

                });


            if (user) {

                // Create session
                const session = {

                    username: user.username,

                    loginTime:
                        new Date().toISOString()

                };


                // Store active login session
                sessionStorage.setItem(
                    "loggedInUser",
                    JSON.stringify(session)
                );


                // Go to dashboard
                window.location.href =
                    "dashboard.html";


            } else {

                message.textContent =
                    "Invalid username or password.";

                message.style.color = "red";

            }

        }
    );

}
```
