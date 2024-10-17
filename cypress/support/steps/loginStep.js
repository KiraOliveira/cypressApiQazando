import loginPage from '../pageObjects/loginPage'
const loginPage = new loginPage

Given("Acesso o site Automation Pratica - Qazando", () => {
    loginPage.acessarSite();
})

When("Acesso a página de Login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("Devo visualizar a tela de Login", () => {
    loginPage.telaLogin();
})