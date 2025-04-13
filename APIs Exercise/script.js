document.addEventListener("DOMContentLoaded", function ()
{
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const logoutButton = document.getElementById("logout-button");
    const systemMessageContainer = document.getElementById("system-message");

    const intelForm = document.getElementById("intelligence-form");
    const pageNumInput = document.getElementById("page-number-input");
    const hackerContainer = document.getElementById("hackers");

    const api = "https://reqres.in/api";
    let token = "";

    loginForm.addEventListener("submit", async function (event)
    {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        try
        {
            const response = await axios.post(`${api}/login`, { email, password });
            token = response.data.token;
            systemMessageContainer.innerText = `Access Granted with Token: ${token}`;
        }
        catch (error)
        {
            systemMessageContainer.innerText = `Failed to Infiltrate: Invalid credentials.`;
        }
        finally
        {
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    logoutButton.addEventListener("click", async function ()
    {
        token = "";
        systemMessageContainer.innerText = "Snuck away, leaving no trace behind.";
    });

    intelForm.addEventListener("submit", async function (event)
    {
        event.preventDefault();

        if (token === "")
        {
            hackerContainer.innerText = `Infiltrate the system to get hackers.`;
            return;
        }

        const pageNumber = pageNumInput.value;

        try
        {
            const response = await axios.get(`${api}/users`, { params: { delay: 1, page: pageNumber } });
            const hackers = response.data.data;

            hackerContainer.innerHTML = ""; // Clear previous hackers

            for (const hacker of hackers)
            {
                const hackerInfo = document.createElement("div");
                hackerInfo.innerHTML = `<p>${hacker.first_name} ${hacker.last_name}</p><p>${hacker.email}</p><img src="${hacker.avatar}" alt="Avatar" width="50" height="50">`;
                hackerInfo.classList.add("hacker");
                hackerContainer.appendChild(hackerInfo);
            }
        }
        catch (error)
        {
            hackerContainer.innerText = `Failed to get hackers: ${error.message}`;
        }
    });
});