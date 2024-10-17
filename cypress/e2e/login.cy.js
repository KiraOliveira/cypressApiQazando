/// <reference types="cypress"/>

import loginPage from "../support/pageObjects/loginPage"

// Funcionalidade
describe('Login', () => {
    
    // Cenário 01 - Login Com Sucesso
    it('Cenário 01 - Login Com Sucesso', () => {
        cy.visit('/')

        // DADO - Acessar a tela de Login
        loginPage.acessarSite();
        loginPage.clicarBotaoPaginaLogin();
        loginPage.telaLogin();

        // QUANDO - Inserir Email e Senha
        // E - Clicar no botão de Login
        // ENTÃO - Será realizado o login
        loginPage.realizacaoLoginSucesso();
    })
    // Cenário 02 - Login Com Email Inválido
    it('Cenário 02 - Login Com Email Inválido', () => {
        cy.visit('/')

        // DADO - Acessar a tela de Login
        loginPage.acessarSite();
        loginPage.clicarBotaoPaginaLogin();
        loginPage.telaLogin();

        // QUANDO - Inserir Email e Senha
        // E - Clicar no botão de Login
        // ENTÃO - Será realizado o login
        loginPage.realizacaoLoginEmailInvalido();
    })
    // Cenário 03 - Login Com Senha Inválida
    it('Cenário 03 - Login Com Senha Inválida', () => {
        cy.visit('/')

        // DADO - Acessar a tela de Login
        loginPage.acessarSite();
        loginPage.clicarBotaoPaginaLogin();
        loginPage.telaLogin();

        // QUANDO - Inserir Email e Senha
        // E - Clicar no botão de Login
        // ENTÃO - Será realizado o login
        loginPage.realizacaoLoginSenhaInvalida();
    })
})