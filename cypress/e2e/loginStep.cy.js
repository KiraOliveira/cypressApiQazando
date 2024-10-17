import loginPage from '../support/pageObjects/loginPage'

Given("Acesso o site Automation Pratica - Qazando", () => {
    loginPage.acessarSite();
})

When("Acesso a página de Login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("Devo visualizar a tela de Login", () => {
    loginPage.telaLogin();
})