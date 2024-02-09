<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Social Media App</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <header>
        <h1>Login to Social Media App</h1>
    </header>

    <section class="login-section">
        <form id="loginForm" action="process_login.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <div id="usernameAvailability"></div>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <div id="passwordStrength"></div>

            <label>
                <input type="checkbox" name="rememberMe"> Remember Me
            </label>

            <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <a href="register.php">Sign up here</a></p>
        <p><a href="forgot_password.php">Forgot your password?</a></p>
    </section>

    <footer>
        <p>&copy; 2023 Social Media App</p>
    </footer>

    <script src="js/login.js"></script>
</body>
</html>
