
document.getElementById('content').innerHTML = `
<div class="hoa"> 
<div class="main">
            <input type="checkbox" id="chk" aria-hidden="true">
            <div class="signup" id="su">
                <div>
                    <label for="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="username" id="username" placeholder="User name" required="">
            <input type="text" name="password" id="password" placeholder="Password" required="">
            <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required="">
            <button onclick="signUp()">Sign up</button>
        </div>
    </div>

    <div class="login" id="ln">
        <div>
            <label for="chk" aria-hidden="true">Login</label>
            <input type="text" name="username" id="username1" placeholder="User name">
            <input type="password" name="password" id="password1" placeholder="Password">
            <button onclick="login()">Login</button>
        </div>
    </div>
</div>
</div>
`
let id;
let token;
let storageKey = 'token';
let storageKeyId = 'id';

function login() {
    let userName = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;
    console.log(userName)
    let user = {
        username: userName,
        password: password,
    }
    console.log(user)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8000/login",
        data: JSON.stringify(user),
        success: function (data) {

            id = data.id;
            localStorage.setItem(storageKey, data.accessToken)
            localStorage.setItem(storageKeyId, id)
            home()
        },
        error: function (error) {
            console.log(error)

        }
    })
}

function signUp() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let user = {
        username: userName,
        password: password,
        confirmPassword: confirmPassword
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8000/register",
        data: JSON.stringify(user),
        success: function () {
            alert("Đăng kí thành công!")
            $('#username').val("");
            $('#password').val("");
            $('#confirmPassword').val("");

        },
        error: function (error) {
            console.log(error)
        }
    })
}


